# React.jsで個人サイトを作る
モダンなフレームワークであるReactを使って2000年代風デザインの個人サイトを作ってみる。<br>
Expressサーバーのリポジトリは[こちら](https://github.com/S-krhs/kanimiso-server-test)。

## URL
https://kanimisoknuckle.com

## 動機
友人がレンタルサーバー上にHTMLサイトを作っていてそれに触発された。初めてのweb開発なのでせっかくなら流行りの技術を作ってみようということでReactを採用。経緯がそれなので基本的なコンセプトとして動的な要素をあまり前面には押し出さないが、内部では積極的に使用する。

## 使用技術
フロント部分はレンタルサーバーのファイルマネージャー上にビルドしたReactアプリを直接アップロードし、バック部分はAWS EC2上にAPサーバーを立ち上げる形で構成しています。どうしてこの構成になったのかなど詳しい経緯は->[こちら](#そもそもなんでお名前com)。

### フロントエンド
    React.js
    Vite

### サーバーサイド
    Amazon Linux 2
    Nginx
    Express
    Node.js
    Prisma
    PostgreSQL
    
### 使用ライブラリ
    react-router-dom
    react-fast-marquee
    react-helmet-async
    react-unity-webgl

### インフラ
    AWS EC2
    AWS RDS
    AWS S3
    AWS Lambda
    AWS CloudFront
    お名前.comレンタルサーバー


### その他
    Unity
    Live2D SDK for Web

採用しなかったもの
- AWS ElastCache    
    - 不採用理由：高いので
    - インメモリキャッシュはあまり使わなくても良さそう
- AWS NetworkLoadBalancer
    - 不採用理由：高いので
    - ちょっとオーバースペック感
- AWS ACL
    - 不採用理由：高いので
    - 本当はあったほうが良いと思います

## 構成図
todo

## 機能
todo

## ToDo
- 認証機能を実装して管理コンソールを作成する。
- 管理画面からブログ投稿を行えるようにする。
- モバイル向けのUI設計を行う。
- もっとモダンなUIへの切り替えが出来るようにする。
- RDSはプライベートサブネットに置き直したい。

## おまけ
- 昔Unityで作った怪しい物理演算のブロック崩しをビルドし直して埋め込んでます。
- 前に作ったLive2Dのアニメーションアプリを埋め込んでいます。
- 隠しページがあったりなかったりするらしい。

<br>

## やったこと　※日記的要素
覚書も兼ねて。今後勉強したい人の参考にもなるとうれしい。

### HTML/CSSについて知る
todo

### JavaScriptについて知る
todo

### Reactについて知る
todo

### Express + Node.js + Nginx
todo

### gitの導入
todo.env

### linuxコマンドに慣れる
todo

### サーバー周りの基礎知識をつける
todo

### ORマッパーについて
todo

### S3 + RDS をLambdaで連携させる
todo

### CloudFrontを設定
todo

## こぼれ話（ハマったこと / 紆余曲折 など）
ありがちなエラーからなかなか情報が見つからなかったものまでいろいろ。

### そもそもなんでお名前.com？
友人がお名前ドットコムでドメインを取得して個人サイトを作っていたため。当時はドメインとかレンタルサーバーとかもよくわからないままに同じところで契約してしまったので1年間はお名前.comのレンタルサーバー上で動かすことになりそうです。

### Viteまわり
最初に調べて参考にしたプロジェクトがViteで作られていたため何も分からない状態で`create vite`を使っていた。検索で出てくるものは大抵`create-react-app`で作られているため`package.json`や`vite.config.js`まわりの書き方で躓いた。Node.jsとの違いもあり`npm run dev`とか`npm run start`とかでもたまに書き間違えるので注意。

### npm/npx/yarnって何？
JavaScriptを扱いなれていなかったためコマンドについてイマイチ理解していなかった。今でも完璧に理解しているとは言い難いが使える程度にはなった。今回は基本的に`npm`しか使っておらず、Prisma関連のみ`npx`を使っている。

### BrowserRouterとHashRouter
`react-router-dom`を使うにあたって、ホームからの遷移は可能だがリロードすると読み込んでくれないという問題にハマった。結論として[.htaccessでリダイレクト設定をすればよい](https://stackoverflow.com/questions/57852786/htaccess-rewrite-for-react-using-react-router)（ホームからURLのpathを参照してRoutesの分岐を行う）ということだったが、別の解決策としてHashRouterを使う方法もあるようだ。HashRouterを使うとURLに/#/が入って見栄えが好きじゃないので採用しなかった。ちなみにお名前.comのレンタルサーバーには`.htaccess`を設定するGUIがある。

### 動的型付け言語に苦労
JavaScriptとかいう言語、型がうまく合ってないっぽいから`typeof()`で確認しようとしたら`object`って返ってくるの発狂しそうになる。やっぱり時代はﾀｲｽｸかもしれない。

### Node.jsとReact.jsのモジュール化の書き方の違い
Expressサーバー側のコードで、`require`すべきところで`import`を使おうとして小一時間ハマった。ちょくちょく微妙な違いで「あれ？」と思うことがあるし今後もあると思うので、そういうこともあるというのを知れたというのが大きかったと思う。問題を解決してくれるものではないが、オーバービューとして[このQuoraの質問](https://jp.quora.com/react%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8Cnode-js%E3%81%A0%E3%81%A8%E8%81%9E%E3%81%84%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%81%8B-)が分かりやすかった。

### お名前.com関連
やばい
いろいろある
todo

### pemキーの権限設定にchmodが使えない
icaclsを使いましょう。

### SQL方言の違い
todo
ORMを使うことで生のSQLを書かなくて済むので本当にうれしい。

### AWSの構築関連
セキュリティ
vpnその辺
todo

### AmazonLinux2でpm2を使おうとしたらバージョンが合わず使えない
nvmを入れて`nvm use 16`で常に古いバージョンを指定しないといけないみたい。ここの記事がとても参考になった。<br>[amazonlinux2 に nodeとnpmをインスコ](https://qiita.com/ma7ma7pipipi/items/c7ee11c6036ec35a1caa)

### キャッシュについて
サーバー側で使われるキャッシュにはコンテンツキャッシュとインメモリキャッシュで違いがある。CloudFrontはコンテンツキャッシュにあたるもので、DDoS攻撃対策にもなるとのことだったので採用している。今回はアクセストークンを使うという訳でもないしRDSへの負荷はあまりないのでインメモリキャッシュに相当するElastCasheは見送った。あと高いので。

### CORS（Cross-Origin Resource Sharing）
一番苦労した
ていねいに
todo

### EsLintとPrettier
とりあえず入れて見よう見まねで設定したのでビルドアプリのコードは整形されて分かりやすくなったが、実は使い方がよく分かっていない。今後ちゃんと調べます。

### webGLアプリのメモリリーク
useEffectの副作用フックを使って明示的にリロードを挟むという力技で誤魔化したが、chatGPTくんには本質的な解決になってないと怒られた。Unityアプリ側でフックを作るとかすればいいのだろうか。何かいい方法があれば教えてください。

### chatGPTくんについて
todo
なんとなく「あ～これはダメなやつだな……」っていうのが分かってくる。

### AWSの無料枠とその後
todo

### 後悔
次からはmicroCMSみたいなヘッドレスCMSをつかってバックの構築を楽にしたい。別に反省はしていないが後悔はある。
