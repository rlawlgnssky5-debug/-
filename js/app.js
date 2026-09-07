const KAKAO_FALLBACK = "http://pf.kakao.com/_GbExjX/chat"

const PRODUCTS = {
  solo: {
    key: "solo", category: "song", kicker: "SOLO WEDDING SONG", title: "1인 축가",
    sub: "혼자 부르는 축가를 1대1 디렉팅부터 음정·박자 보정, 믹싱·마스터링까지 안정적인 최종 음원으로 완성합니다",
    normal: 120000,
    concerns: [
      ["노래를 잘 못해도 괜찮을까요", "1대1 디렉팅과 수작업 보정으로 원래 목소리를 살려 자연스럽게 완성합니다"],
      ["본식에서 긴장할 것 같아요", "미리 완성된 음원을 준비해 당일에는 더 안정적으로 마음을 전할 수 있습니다"],
      ["어떤 키가 맞는지 모르겠어요", "음역을 확인하고 가장 편하게 부를 수 있는 키를 함께 정합니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "곡과 키, 사용 시점과 원하는 분위기를 함께 정합니다"],
      ["1대1 녹음 디렉팅", "엔지니어가 옆에서 한 구간씩 안내하며 편하게 녹음합니다"],
      ["음정 · 박자 보정", "원래 목소리는 살리고 필요한 부분만 정교하게 다듬습니다"],
      ["믹싱 · 마스터링", "본식에서 바로 사용할 수 있는 최종 음원으로 완성합니다"]
    ],
    included: ["녹음 및 1대1 디렉팅", "음정 · 박자 보정", "믹싱 · 마스터링", "최종 음원 전달"],
    faq: [
      ["노래를 잘 못해도 가능한가요", "가능합니다 녹음 디렉팅과 보정으로 편안하게 부를 수 있도록 안내하고 자연스럽게 완성합니다"],
      ["키도 정해주시나요", "현재 음역을 확인해 편하게 부를 수 있는 키를 함께 정할 수 있습니다"],
      ["결과물은 무엇인가요", "음정·박자 보정과 믹싱·마스터링이 완료된 최종 음원을 전달합니다"]
    ]
  },
  duo: {
    key: "duo", category: "song", kicker: "DUET WEDDING SONG", title: "2인 축가",
    sub: "두 사람의 음역과 파트, 화음을 맞춰 자연스럽고 안정적인 듀엣 축가 음원으로 완성합니다",
    normal: 160000,
    concerns: [
      ["둘의 음역이 달라요", "파트와 키를 나눠 두 분 모두 편하게 부를 수 있도록 구성합니다"],
      ["화음을 넣고 싶은데 어려워요", "필요한 구간의 화음과 파트 구성을 함께 정리합니다"],
      ["둘 다 녹음이 처음이에요", "파트별로 나눠 천천히 녹음한 뒤 두 목소리를 자연스럽게 합칩니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "두 분의 음역에 맞춰 곡과 키, 파트 구성을 함께 정합니다"],
      ["1대1 녹음 디렉팅", "각자 부를 부분과 함께 부를 부분을 안내하며 녹음합니다"],
      ["음정 · 박자 보정", "두 분의 목소리와 화음이 자연스럽게 들리도록 다듬습니다"],
      ["믹싱 · 마스터링", "두 목소리가 음악 안에서 자연스럽게 어우러지는 최종 음원으로 완성합니다"]
    ],
    included: ["두 사람 녹음 및 디렉팅", "파트 · 화음 구성", "음정 · 박자 보정", "믹싱 · 마스터링", "최종 음원 전달"],
    faq: [
      ["둘 다 노래를 잘 못해도 괜찮나요", "두 분의 음역과 분위기에 맞춰 파트를 나누고 필요한 부분을 자연스럽게 보정합니다"],
      ["파트 분배도 도와주시나요", "곡에 맞춰 함께 부를 부분과 나눠 부를 부분을 안내합니다"],
      ["화음도 가능한가요", "곡과 두 분의 음역에 맞춰 가능한 범위에서 화음 구성을 도와드립니다"]
    ]
  },
  wedding: {
    key: "wedding", category: "wedding", kicker: "DUET WEDDING FILM", title: "듀엣 웨딩 필름",
    sub: "신랑신부가 직접 부른 노래에 두 사람의 이야기와 편지를 더해 평생 간직할 웨딩 필름으로 제작합니다",
    normal: 290000,
    concerns: [
      ["둘 다 노래에 자신이 없어요", "파트 구성과 1대1 디렉팅, 보컬 보정으로 안정감 있게 완성합니다"],
      ["둘만의 특별한 추억을 남기고 싶어요", "두 사람의 목소리와 이야기를 한 편의 영상으로 담습니다"],
      ["직접 부르기에는 부담스러워요", "미리 녹음하고 제작한 영상으로 예식에서 편안하게 상영할 수 있습니다"],
      ["너무 오글거릴까 걱정돼요", "담백한 무드부터 감성적인 연출까지 두 분에게 맞게 조절합니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "곡과 키, 두 분이 부를 부분과 예식에서 사용할 시점을 정합니다"],
      ["1대1 녹음 디렉팅", "두 분의 음역에 맞춰 파트별로 안내하며 녹음합니다"],
      ["인터뷰 · 영상 촬영", "두 분의 이야기와 자연스러운 모습을 영상으로 담습니다"],
      ["음정 · 박자 보정", "원래 목소리는 살리고 필요한 부분을 정교하게 다듬습니다"],
      ["믹싱 · 영상 편집", "완성된 음원과 촬영본을 하나의 웨딩 필름으로 마무리합니다"]
    ],
    composition: [
      ["커플 인터뷰", "처음 만난 순간과 결혼을 앞둔 두 분의 마음을 담습니다"],
      ["커플 축가", "두 사람이 함께 부른 노래를 녹음하고 자연스럽게 완성합니다"],
      ["서로에게 전하는 편지", "노래 뒤에 오래 남을 진심을 편지 영상으로 담습니다"]
    ],
    included: ["녹음 및 1대1 디렉팅", "커플 인터뷰", "외부 스튜디오 촬영", "음정 · 박자 보정", "믹싱 · 마스터링", "영상 편집", "예식장 상영용 최종본 전달"],
    faq: [
      ["둘 다 노래를 잘 못해도 괜찮나요", "두 분의 음역과 분위기에 맞춰 파트를 나누고 음정·박자 보정과 믹싱으로 듣기 좋게 완성합니다"],
      ["촬영이 어색하면 어떡하나요", "과한 연출보다 서로 마주 보는 장면과 녹음하는 모습 등 자연스러운 분위기로 진행합니다"],
      ["결혼식 식전영상으로 사용할 수 있나요", "가능합니다 완성본은 예식장에서 상영 가능한 영상 파일로 전달합니다"]
    ]
  },
  proposal: {
    key: "proposal", category: "proposal", kicker: "PROPOSAL FILM", title: "프로포즈 / 답프로포즈",
    sub: "직접 부른 노래와 인터뷰, 전하는 편지를 하나로 엮어 가장 개인적인 고백을 한 편의 필름으로 완성합니다",
    normal: 200000,
    concerns: [
      ["노래를 잘 못해도 괜찮을까요", "1대1 디렉팅과 음정·박자 보정, 믹싱으로 자연스럽게 다듬습니다"],
      ["혼자 준비하는 것이 막막해요", "곡 선택부터 녹음과 촬영까지 필요한 모든 과정을 함께 안내합니다"],
      ["편지만으로는 부족한 것 같아요", "직접 부른 목소리와 영상으로 마음을 더 선명하게 전합니다"],
      ["프로포즈가 너무 평범할까 걱정돼요", "두 분만의 이야기로 세상에 하나뿐인 영상 선물을 완성합니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "전하고 싶은 분위기와 사용할 곡, 촬영 방향을 함께 정합니다"],
      ["1대1 녹음 디렉팅", "엔지니어가 옆에서 한 구간씩 안내하며 편하게 녹음합니다"],
      ["인터뷰 촬영", "처음 만난 순간과 고백하고 싶은 이유를 자연스럽게 담습니다"],
      ["편지 영상 촬영", "노래만으로 다 전하지 못한 마음을 편지 영상으로 남깁니다"],
      ["보컬 보정 · 영상 편집", "음정·박자 보정과 믹싱, 영상 편집 후 최종 필름으로 완성합니다"]
    ],
    composition: [
      ["인터뷰", "처음 만난 순간과 고백하고 싶은 이유를 담습니다"],
      ["노래 커버", "직접 부른 노래로 오래 기억될 마음을 전합니다"],
      ["전하는 편지", "노래만으로 다 전하지 못한 마음을 편지 영상으로 남깁니다"]
    ],
    included: ["녹음 1시간", "내부 스튜디오 촬영 1시간", "인터뷰 및 편지 촬영", "음정 · 박자 보정", "믹싱 · 마스터링", "영상 편집", "최종 필름 전달"],
    faq: [
      ["노래를 잘 못해도 가능한가요", "가능합니다 녹음 디렉팅과 음정·박자 보정, 믹싱으로 자연스럽게 다듬습니다"],
      ["혼자 준비해도 어렵지 않나요", "곡 선택과 녹음 방향, 촬영 구성까지 필요한 부분을 함께 안내합니다"],
      ["편지나 메시지도 넣을 수 있나요", "직접 쓴 편지와 전하고 싶은 말을 영상 안에 자연스럽게 담을 수 있습니다"],
      ["프로포즈 현장에서 바로 틀 수 있나요", "현장에서 상영 가능한 영상 파일로 전달하며 사용 날짜가 정해져 있다면 상담 시 먼저 확인합니다"]
    ]
  }
}

const EVENTS = [
  { key: "blog", label: "블로그 리뷰", discount: 30000, detail: "일 방문자 100명 이상 · 안내 가이드에 따라 작성" },
  { key: "reaction", label: "현장 리액션 영상", discount: 10000, detail: "본식 현장 촬영 파일 제공" },
  { key: "cafe", label: "웨딩 카페 후기", discount: 10000, detail: "300자 이상 · 관련 사진 4장 이상" },
  { key: "instagram", label: "인스타그램 후기", discount: 10000, detail: "후기 50자 이상 · 사진 4장 이상 · BGM 추가 · 공식 계정 태그 · 공개 계정" }
]

const app = document.querySelector("#app")
const modal = document.querySelector("#consultModal")
const copyButton = document.querySelector("#copyConsult")
const kakaoButton = document.querySelector("#openKakao")
let config = { referenceVideoUrl: "https://www.youtube.com/embed/pTBfPEWlyZU?rel=0", accounts: { kakao: KAKAO_FALLBACK } }
let selectedEvents = new Set()
let currentEventProduct = "wedding"
let lastFocusedElement = null
let pendingConsultText = ""

const won = value => `${value.toLocaleString("ko-KR")}원`
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char])

function choiceRow(href, number, title, description) {
  return `<a class="choice-row" href="${href}"><span class="choice-number">${number}</span><span class="choice-copy"><strong>${title}</strong><span>${description}</span></span><span class="choice-arrow" aria-hidden="true">→</span></a>`
}

function renderHome() {
  app.innerHTML = `
    <section class="hero-home" aria-label="WISTIA 웨딩 보컬 필름">
      <div class="hero-home-inner">
      <p class="eyebrow">WEDDING VOCAL FILM</p>
      <h1><span>목소리로 남기는</span><span>가장 특별한 순간</span></h1>
      <p class="lead">직접 부른 노래와 이야기를<br>결혼식과 프로포즈를 위한 하나의 작품으로 완성합니다</p>
      <a class="hero-cta" href="#/detail/wedding">우리의 이야기를 담아보세요 <span aria-hidden="true">→</span></a>
    </div></section>
    <section class="product-gateway"><div class="narrow">
      <h2>어떤 순간을 준비하고 계신가요</h2>
      <div class="choice-list">
        ${choiceRow("#/song", "01", "축가", "결혼식에서 들려줄 나의 목소리")}
        ${choiceRow("#/detail/wedding", "02", "식전영상", "두 사람의 목소리로 만드는 웨딩 필름")}
        ${choiceRow("#/detail/proposal", "03", "프로포즈", "가장 개인적인 고백을 한 편의 필름으로")}
      </div>
    </div></section>`
}

function renderSongPicker() {
  app.innerHTML = `<div class="narrow">
    <section class="page-hero"><p class="eyebrow">WEDDING SONG</p><h1>축가</h1><p class="hero-copy">결혼식에서 더 안정적으로 목소리를 전할 수 있도록<br>부르는 인원에 맞는 상품을 선택해 주세요</p></section>
    <section class="product-gateway"><h2>어떻게 부르시나요</h2><div class="choice-list">
      ${choiceRow("#/detail/solo", "01", "1인 축가", "혼자 부르는 축가 녹음")}
      ${choiceRow("#/detail/duo", "02", "2인 축가", "함께 부르는 듀엣 축가")}
    </div></section>
  </div>`
}

function sectionHead(label, title, lead = "") {
  return `<div class="section-head"><p class="eyebrow">${label}</p><div><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ""}</div></div>`
}

function renderWaveform() {
  const heights = [18,32,48,27,64,38,72,45,26,54,82,43,68,31,58,76,39,52,29,70,46,64,34,51,78,42,60,28,48,35]
  return heights.map((height, index) => `<i style="--h:${height}%" class="${index < 9 ? "active" : ""}"></i>`).join("")
}

function renderDetail(key) {
  const product = PRODUCTS[key]
  if (!product) return renderNotFound()
  app.innerHTML = `<div class="wrap">
    <section class="page-hero"><p class="eyebrow">${product.kicker}</p><h1>${product.title}</h1><p class="hero-copy">${product.sub}</p></section>
    <section class="section">${sectionHead("WHY WISTIA", "이런 걱정이 있으셨다면")}
      <div class="concern-list">${product.concerns.map(item => `<div class="concern"><div class="question">${item[0]}</div><div class="arrow">↓</div><div class="answer">${item[1]}</div></div>`).join("")}</div>
    </section>
    <section class="section">${sectionHead("PROCESS", "완성까지 이렇게 진행됩니다")}
      <div class="timeline">${product.steps.map((item, index) => `<div class="timeline-step"><span class="step-no">${String(index + 1).padStart(2, "0")}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div></div>`).join("")}</div>
    </section>
    ${product.composition ? `<section class="section">${sectionHead("FILM COMPOSITION", "영상은 이렇게 구성됩니다")}<div class="composition-list">${product.composition.map((item, index) => `<div class="composition-row"><span class="num">${String(index + 1).padStart(2, "0")}</span><h3>${item[0]}</h3><p>${item[1]}</p></div>`).join("")}</div></section>` : ""}
    <section class="section">${sectionHead("INCLUDED", "상품에 포함된 작업")}<div class="composition-list">${product.included.map((item, index) => `<div class="composition-row"><span class="num">${String(index + 1).padStart(2, "0")}</span><h3>${item}</h3><p>WISTIA의 전문 작업 과정에 포함됩니다</p></div>`).join("")}</div></section>
    <section class="section">${sectionHead("BEFORE / AFTER", "직접 들어보세요", "실제 샘플 음원이 준비되는 동안 작업 전후의 차이를 만드는 과정을 안내합니다")}
      <div class="ba-panel"><div class="ba-tabs"><button class="active" type="button" data-ba="before">녹음 원본</button><button type="button" data-ba="after">WISTIA FINAL</button></div><div class="waveform" aria-hidden="true">${renderWaveform()}</div><p class="ba-caption" id="baCaption">가공하지 않은 녹음 원본의 자연스러운 목소리</p></div>
    </section>
    ${product.composition ? `<section class="section">${sectionHead("REFERENCE FILM", "WISTIA 필름의 분위기를 확인해 보세요")}<div class="reference-frame"><iframe src="${escapeHtml(config.referenceVideoUrl)}" title="WISTIA 레퍼런스 영상" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></section>` : ""}
    <section class="section">${sectionHead("FAQ", "자주 묻는 질문")}<div class="faq-list">${product.faq.map(item => `<details><summary>${item[0]}<span aria-hidden="true">＋</span></summary><p>${item[1]}</p></details>`).join("")}</div></section>
    <div class="detail-actions"><a class="button button-dark" href="#/event/${product.key}">이벤트 적용 가격 확인하기</a><a class="button button-quiet" href="#/">다른 상품 선택하기</a></div>
  </div>`
  bindBeforeAfter()
}

function renderEvent(productKey) {
  if (!PRODUCTS[productKey]) productKey = "wedding"
  if (currentEventProduct !== productKey) selectedEvents = new Set()
  currentEventProduct = productKey
  const product = PRODUCTS[productKey]
  app.innerHTML = `<div class="narrow">
    <section class="event-intro"><p class="eyebrow">EVENT</p><h1>참여하는 만큼 혜택이 커집니다</h1><p>가능한 이벤트를 선택하면 적용 금액이 바로 바뀝니다</p></section>
    ${product.category === "song" ? `<div class="event-product-switch"><div class="choice-list">${choiceRow("#/event/solo", "01", "1인 축가", "정상가 120,000원")}${choiceRow("#/event/duo", "02", "2인 축가", "정상가 160,000원")}</div></div>` : ""}
    <section class="price-focus" aria-live="polite"><div class="product-name">${product.title}</div><div class="price-label">현재 적용 금액</div><strong class="current-price" id="currentPrice"></strong><div class="price-history" id="priceHistory"></div></section>
    <div class="event-list">${EVENTS.map((event, index) => `<button class="event-item" type="button" data-event="${event.key}" aria-pressed="${selectedEvents.has(event.key)}"><span class="num">${String(index + 1).padStart(2, "0")}</span><span class="event-copy"><strong class="event-title">${event.label}</strong><span class="event-detail">${event.detail}</span></span><span class="event-side"><strong>${won(event.discount)} 혜택</strong><span class="toggle" aria-hidden="true"></span></span></button>`).join("")}</div>
    <div class="event-cta"><button class="button button-dark" id="consultButton" type="button">이 가격으로 상담하기</button></div>
  </div>`
  updateEventPrice()
  document.querySelectorAll("[data-event]").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.event
    selectedEvents.has(key) ? selectedEvents.delete(key) : selectedEvents.add(key)
    button.classList.toggle("selected", selectedEvents.has(key))
    button.setAttribute("aria-pressed", String(selectedEvents.has(key)))
    updateEventPrice()
  }))
  document.querySelectorAll("[data-event]").forEach(button => button.classList.toggle("selected", selectedEvents.has(button.dataset.event)))
  document.querySelector("#consultButton").addEventListener("click", openConsultModal)
}

function eventCalculation() {
  const product = PRODUCTS[currentEventProduct]
  const chosen = EVENTS.filter(event => selectedEvents.has(event.key))
  const discount = Math.min(60000, chosen.reduce((sum, event) => sum + event.discount, 0))
  return { product, chosen, discount, finalPrice: product.normal - discount }
}

function updateEventPrice() {
  const { product, chosen, finalPrice } = eventCalculation()
  document.querySelector("#currentPrice").textContent = won(finalPrice)
  document.querySelector("#priceHistory").innerHTML = `<div class="history-row"><span>정상가</span><strong>${won(product.normal)}</strong></div>${chosen.map(event => `<div class="history-row"><span>${event.label}</span><strong>-${won(event.discount)}</strong></div>`).join("")}`
}

function openConsultModal() {
  const { product, chosen, discount, finalPrice } = eventCalculation()
  pendingConsultText = [
    "[위스티아 홈페이지 상담]", "", "상품", product.title, "", "정상가", won(product.normal), "", "선택한 이벤트",
    chosen.length ? chosen.map(event => `· ${event.label} -${won(event.discount)}`).join("\n") : "선택 없음",
    "", "총 적용 혜택", `-${won(discount)}`, "", "현재 적용 금액", won(finalPrice)
  ].join("\n")
  document.querySelector("#consultPreview").textContent = pendingConsultText
  copyButton.textContent = "상담 내용 복사하기"
  kakaoButton.disabled = true
  lastFocusedElement = document.activeElement
  modal.classList.add("open")
  modal.setAttribute("aria-hidden", "false")
  document.body.classList.add("modal-open")
  copyButton.focus()
}

function closeConsultModal() {
  modal.classList.remove("open")
  modal.setAttribute("aria-hidden", "true")
  document.body.classList.remove("modal-open")
  if (lastFocusedElement) lastFocusedElement.focus()
}

async function copyConsultation() {
  try {
    await navigator.clipboard.writeText(pendingConsultText)
  } catch {
    const textarea = document.createElement("textarea")
    textarea.value = pendingConsultText
    textarea.style.cssText = "position:fixed;opacity:0"
    document.body.append(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
  }
  copyButton.textContent = "✓ 복사되었습니다"
  kakaoButton.disabled = false
  kakaoButton.focus()
}

function bindBeforeAfter() {
  document.querySelectorAll("[data-ba]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-ba]").forEach(item => item.classList.toggle("active", item === button))
    document.querySelector("#baCaption").textContent = button.dataset.ba === "before"
      ? "가공하지 않은 녹음 원본의 자연스러운 목소리"
      : "음정·박자 보정과 믹싱·마스터링을 마친 WISTIA FINAL"
  }))
}

function renderNotFound() {
  app.innerHTML = `<div class="narrow"><section class="page-hero"><p class="eyebrow">404</p><h1>페이지를 찾을 수 없습니다</h1><p class="hero-copy">주소를 다시 확인하거나 홈에서 상품을 선택해 주세요</p></section><div class="detail-actions" style="margin-left:0"><a class="button button-dark" href="#/">홈으로 돌아가기</a></div></div>`
}

function updateNavigation(category) {
  document.querySelectorAll("[data-category]").forEach(link => {
    const active = link.dataset.category === category
    link.classList.toggle("active", active)
    active ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current")
  })
}

function route() {
  const path = location.hash.replace(/^#/, "") || "/"
  const parts = path.split("/").filter(Boolean)
  document.body.dataset.page = parts.length ? "inner" : "home"
  if (!parts.length) { updateNavigation(""); renderHome() }
  else if (parts[0] === "song") { updateNavigation("song"); renderSongPicker() }
  else if (parts[0] === "detail" && PRODUCTS[parts[1]]) { updateNavigation(PRODUCTS[parts[1]].category); renderDetail(parts[1]) }
  else if (parts[0] === "event" && PRODUCTS[parts[1]]) { updateNavigation(PRODUCTS[parts[1]].category); renderEvent(parts[1]) }
  else { updateNavigation(""); renderNotFound() }
  window.scrollTo({ top: 0, behavior: "instant" })
  app.focus({ preventScroll: true })
}

async function loadConfig() {
  try {
    const response = await fetch("wistia-config.json", { cache: "no-store" })
    if (response.ok) config = { ...config, ...(await response.json()) }
  } catch {}
  const accounts = config.accounts || {}
  if (accounts.instagram) document.querySelector("#instagramLink").href = accounts.instagram
  if (accounts.youtube) document.querySelector("#youtubeLink").href = accounts.youtube
  if (accounts.kakao) document.querySelector("#kakaoFooterLink").href = accounts.kakao
}

document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeConsultModal))
copyButton.addEventListener("click", copyConsultation)
kakaoButton.addEventListener("click", () => {
  if (!kakaoButton.disabled) window.open(config.accounts?.kakao || KAKAO_FALLBACK, "_blank", "noopener")
})
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeConsultModal()
  if (event.key === "Tab" && modal.classList.contains("open")) {
    const focusable = [...modal.querySelectorAll("button:not([disabled])")]
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
  }
})
window.addEventListener("hashchange", route)

loadConfig().finally(route)
