# noteの見出し画像を作る

    node tools-note/make-header.js spec.json out.png

spec.json の例:

    {"tags":[{"text":"Excelテンプレ"},{"text":"無料","price":true}],
     "title":["有給の残日数を","自動で計算"],
     "sub":"入社日を入れるだけ・自分用"}

- title は2行、1行9文字くらいまで（はみ出すなら "size":70 などで小さく）
- 有料記事のタグは {"text":"有料版","price":true}
- できたPNGは色数を減らしてから assets/note/<英数字名>.png に置く（Pythonの PIL で quantize(colors=48)）
- noteのエディタからは https://by8k98rff4-gif.github.io/shokuba-tools/assets/note/<名前>.png を fetch して見出し画像に設定する
