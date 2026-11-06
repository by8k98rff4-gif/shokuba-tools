# shokuba-tools（職場の計算ツール）

全自動株式会社のWebツール事業部が運営する静的サイト。GitHub Pages（main ブランチのルート）で公開。

## 構成
- `index.html` … トップ。`<!-- TOOLS:START -->` と `<!-- TOOLS:END -->` の間にツール一覧
- `<slug>/index.html` … 1ツール1フォルダ（例: `yukyu/`）。ローマ字の短いslug
- `assets/style.css` … 共通スタイル。各ツールは `../assets/style.css` を読む
- `sitemap.xml` … ツールを足したら `<url>` を1行追加し lastmod を更新
- `.nojekyll`, `robots.txt`

## ツールの作り方（yukyu/index.html を手本にする）
- 外部ライブラリなし。JSは同じファイル内。入力内容は送信しない
- title / h1 / meta description / canonical（https://by8k98rff4-gif.github.io/shokuba-tools/<slug>/）
- 入力は3〜5項目、結果は大きく。結果の下に「Excel版はテンプレ係（https://note.com/shokuba_tenpure）」の一文
- 「計算のしかた」「よくある質問」3つ。年度は「令和8年（2026年）時点」
- 計算関数は `window.xxxCalc` として出し、node で検算してからコミット
- 文体は柔らかく、AIっぽい定型句を使わない

## 公開
`git add -A && git commit -m "..." && git push origin main` で数分後に反映。

## Google Search Console
`index.html` の google-site-verification の meta タグは消さないこと（消すと所有権の確認が外れる）。

## 無料テンプレの配布
- 無料テンプレの .xlsx は `files/<英数字名>.xlsx` に置く（例: files/yukyu-check-free.xlsx）
- ダウンロードURL: https://by8k98rff4-gif.github.io/shokuba-tools/files/<名前>.xlsx （noteの無料記事にこのURLを貼る）
- 有料テンプレはここに置かない（リポジトリが公開なので誰でも取れてしまう）
