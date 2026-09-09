const path = require('node:path')
const fs = require('node:fs')
const sharp = require(path.join(process.env.WISTIA_NODE_MODULES, 'sharp'))
const root = path.resolve(__dirname, '..', 'assets', 'img')
async function run() {
  let before = 0, after = 0
  for (const name of fs.readdirSync(path.join(root, 'wedding'))) {
    if (!name.endsWith('.png')) continue
    const src = path.join(root, 'wedding', name)
    const dest = src.replace(/\.png$/, '.webp')
    before += fs.statSync(src).size
    await sharp(src).resize({width:1280,withoutEnlargement:true}).webp({quality:85}).toFile(dest)
    after += fs.statSync(dest).size
  }
  await sharp(path.join(root,'wistia-logo.png')).resize({width:180}).webp({quality:90}).toFile(path.join(root,'wistia-logo-small.webp'))
  console.log(JSON.stringify({originalPhotoBytes:before,optimizedPhotoBytes:after}))
}
run().catch(e=>{console.error(e);process.exit(1)})
