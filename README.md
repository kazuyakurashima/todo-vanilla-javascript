# ToDoアプリ（Vanilla JavaScript版）

## 📘 概要
Udemy講座「モダンJavaScriptの基礎から始めるReact入門」内のステップとして、Reactを使う前に純粋なJavaScript（Vanilla JS）でToDoアプリを実装しました。それをこれから、モダンJavaScriptを使って書き換えます。

## 🛠 使用技術
- HTML
- CSS
- JavaScript（ES6）

## 🎯 機能
- ToDoの追加
- 完了済みへの移動
- 戻す
- 削除

---

## ✨ 学び・気づき（JavaScript超入門〜ToDoアプリ構築）

このToDoアプリは、以下の流れで学んだJavaScriptとCSSの知識を総動員して作りました。

---

### 📗 JavaScript（JS）の基礎構文を理解

- **const / let の使い分け**
- **テンプレート文字列**：`${変数}` で柔軟に文字列を組み立てられる
- **アロー関数の基礎と省略記法**
- **分割代入**（Destructuring）：配列・オブジェクトから値を直接取り出す
- **デフォルト引数**：未定義の引数に初期値を設定できる
- **オブジェクトの省略記法**：`{ name, age }` でスッキリ記述
- **スプレッド構文 / rest構文**：配列・オブジェクトの展開や残余取得が自由自在に
- **map / filter / forEach**：ループ処理の進化形を使ってデータを処理

---

### 📘 HTML / CSSとの連携

- `<script type="module">` を使って、ES6モジュールの `import / export` を可能に
- HTML要素を `document.createElement` で動的に生成・追加
- `nextElementSibling`・`closest()` などのDOM操作メソッドで兄弟・親要素を操作
- `addEventListener` を使って、クリックイベントを各ボタンに適用
- `className` を操作して、スタイルクラスを付け替え

---

### 🎨 CSSスタイリング

- 擬似クラス `:hover` を使ってホバー時の変化を表現
- `display: flex; align-items: center;` でリスト内の要素を整列
- `min-height` でボックスが潰れないよう安心設計
- `border-radius`, `padding` など、見た目の洗練も意識
- セレクターの使い分け（タグ・クラス・ID・擬似）でスコープ制御を理解

---

### 💡 気づき・成長ログ（X投稿の振り返りより）

Reactを学ぶぞと意気込んで始めたけれど、まさかのJavaScriptの復習からスタート。でも正直、知らないこともたくさんあった。
新しいことを学ぶのはやっぱり楽しい。

- アロー関数が数学の関数に見えて、なんだか嬉しかった
- 一方で、論理和・論理積などを「数学のまま」理解しようとすると逆に難しいこともあって、背景から学ぶと面白いと感じた
- 日本語の用語がピンとこない時は、英語（Destructuring assignmentなど）で見ると理解が深まることもあった
- 実際にToDoアプリを作ってみると、今まで学んできたJavaScriptが「単語や文法」だったものから、「使う言語」に変わったような感覚があった。
- DOM操作が手に馴染んできた
- イベントリスナー、関数、変数、レイアウト、CSSがつながって動くのを見ると、理解が身体に落ちてくる

また、CSSもちゃんと基礎からやろうと決めた。
G's Academy時代は締め切りに追われ、CSSはChatGPT任せにしていたことをちょっと反省してる。
今はmosyaでコツコツ学び直し中。これから少しずつ積み上げていくつもりです。

---

## 🔜 次のステップ
🧭 これらの理解を経て、次は **React版ToDoアプリ** に挑戦します！
`todo-react-conversion` フォルダに記録予定。

---

## 📂 フォルダ構成
index.html
index.js
styles.css
README.md


---

## 🙏 参考講座
- [Udemy講座](https://www.udemy.com/course/react_js_beginner/)「モダンJavaScriptの基礎から始めるReact入門」
- 講師：じゃけぇ（Takumi Okada）さん

---

## 🚀 目的
Reactを学ぶ前に、JavaScriptの理解を深め、構造と動作の原理を自分の手で体感すること。