import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { existsSync, mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const browser = [
  process.env.LAYOUT_BROWSER,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
].find(candidate => candidate && existsSync(candidate))

assert.ok(browser, "Edge, Chrome 또는 LAYOUT_BROWSER 환경 변수가 필요합니다")

function measureLayout(width, height) {
  const profile = mkdtempSync(resolve(tmpdir(), "wistia-layout-"))

  try {
    const fixture = pathToFileURL(resolve(here, "desktop-layout.fixture.html")).href
    const run = spawnSync(browser, [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--allow-file-access-from-files",
      `--user-data-dir=${profile}`,
      `--window-size=${width},${height}`,
      "--dump-dom",
      fixture
    ], { encoding: "utf8" })

    assert.equal(run.status, 0, run.stderr)
    const match = run.stdout.match(/<pre id="result">([^<]+)<\/pre>/)
    assert.ok(match, "브라우저에서 레이아웃 측정 결과를 읽을 수 있어야 합니다")
    return JSON.parse(match[1].replaceAll("&quot;", '"'))
  } finally {
    rmSync(profile, { recursive: true, force: true })
  }
}

{
  const layout = measureLayout(1572, 900)
  assert.ok(
    Math.abs(layout.hero.left - layout.wordmark.left) <= 1,
    `히어로 왼쪽(${layout.hero.left}px)이 헤더 왼쪽(${layout.wordmark.left}px)과 일치해야 합니다`
  )
  assert.ok(
    Math.abs(layout.hero.right - (layout.viewport - layout.wordmark.left)) <= 1,
    `히어로 오른쪽(${layout.hero.right}px)이 공통 컨테이너 오른쪽 기준과 일치해야 합니다`
  )
  assert.ok(
    layout.gateway.left >= layout.hero.left && layout.gateway.right <= layout.hero.right,
    "아래 상품 콘텐츠가 히어로의 공통 데스크톱 가이드 안에 있어야 합니다"
  )
}

{
  const layout = measureLayout(390, 844)
  assert.ok(
    Math.abs(layout.hero.left - 22) <= 1 && Math.abs(layout.hero.right - (layout.viewport - 22)) <= 1,
    `모바일 히어로는 기존 22px 여백을 유지해야 합니다 (현재 ${layout.hero.left}px / ${layout.viewport - layout.hero.right}px)`
  )
}
