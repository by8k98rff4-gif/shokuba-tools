// 見出し画像（1280x670）を作る: node make.js spec.json out.png
const { chromium } = require('playwright');
const fs = require('fs');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const out = process.argv[3];
const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const lines = spec.title.map(esc).join('<br>');
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;box-sizing:border-box}
body{width:1280px;height:670px;background:#1f6f7a;font-family:"Noto Sans CJK JP",sans-serif;color:#fff;position:relative;overflow:hidden}
.bg{position:absolute;right:-120px;top:-140px;width:620px;height:620px;border-radius:50%;background:#2a7f8a}
.wrap{position:absolute;left:110px;top:0;bottom:0;width:660px;display:flex;flex-direction:column;justify-content:center}
.tag{display:inline-flex;gap:12px;margin-bottom:26px}
.tag span{font-size:28px;font-weight:700;padding:6px 18px;border-radius:999px;background:#e2f0f1;color:#1f6f7a}
.tag span.price{background:#ffe27a;color:#3d3200}
h1{white-space:nowrap;font-size:${spec.size || 78}px;line-height:1.22;font-weight:900;letter-spacing:.01em}
.sub{margin-top:24px;font-size:32px;font-weight:500;color:#cfe9ec}
.brand{position:absolute;left:110px;bottom:46px;font-size:24px;font-weight:700;color:#a9d6db;letter-spacing:.08em}
.sheet{position:absolute;right:110px;top:150px;width:330px;height:370px;background:#fff;border-radius:22px;box-shadow:0 18px 40px rgba(0,0,0,.18);padding:22px;display:grid;grid-template-columns:1.3fr 1fr 1fr;grid-auto-rows:1fr;gap:8px}
.sheet i{border-radius:6px;background:#eef2f4}
.sheet i.h{background:#d5dee4}
.sheet i.y{background:#ffe27a}
.sheet i.t{background:#1f6f7a}
</style></head><body>
<div class="bg"></div>
<div class="wrap">
  <div class="tag">${spec.tags.map(t => `<span class="${t.price ? 'price' : ''}">${esc(t.text)}</span>`).join('')}</div>
  <h1>${lines}</h1>
  <div class="sub">${esc(spec.sub)}</div>
</div>
<div class="sheet">
  <i class="h"></i><i class="h"></i><i class="h"></i>
  <i></i><i class="y"></i><i></i>
  <i></i><i class="y"></i><i></i>
  <i></i><i class="y"></i><i></i>
  <i></i><i></i><i></i>
  <i></i><i></i><i class="t"></i>
</div>
<div class="brand">職場のテンプレ係</div>
</body></html>`;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 670 }, deviceScaleFactor: 1 });
  await p.setContent(html);
  await p.screenshot({ path: out });
  await b.close();
  console.log('saved', out);
})();
