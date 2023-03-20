# React.jsで個人サイトを作る
モダンなフレームワークであるReactを使って2000年代風デザインの個人サイトを作ってみる。<br>
Expressサーバーのリポジトリは[こちら](https://github.com/S-krhs/kanimiso-server-test)。<br>
S3とRDSの連携に使うLambda関数は[こちら](https://github.com/S-krhs/Lambda-RDS-S3)

## URL
https://kanimisoknuckle.com

<img alt="tohoho" src=./github/screenshot_01.png><br>

## 動機
友人がレンタルサーバー上にHTMLサイトを作っていてそれに触発された。初めてのweb開発なのでせっかくなら流行りの技術を作ってみようということでReactを採用。経緯がそれなので基本的なコンセプトとして動的な要素をあまり前面には押し出さないが、内部では積極的に使用する。

## 使用技術
フロント部分はレンタルサーバーのファイルマネージャー上にビルドしたReactアプリを直接アップロードし、バック部分はAWS EC2上にAPサーバーを立ち上げる形で構成しています。どうしてこの構成になったのかなど詳しい経緯は[こちら](#そもそもなんでお名前com)。

### フロントエンド
- React.js 18.2.0
- Vite 4.0.4

### サーバーサイド
- Amazon Linux 2
- Nginx 1.22.1
- Express 4.18.2
- Node.js 16.19.1
- PM2 5.2.2 
- Prisma Client 4.10.1
- PostgreSQL 13.7
    
### 使用ライブラリ
- react-router-dom 6.6.2
- react-helmet-async 1.3.0
- react-unity-webgl 9.4.0

### インフラ
- AWS EC2
- AWS RDS
- AWS S3
- AWS Lambda
- AWS CloudFront
- お名前.comレンタルサーバー


### その他
- EsLint 8.33.0
- Unity 2019.4.4f1 -> 2021.3.8f1
- Live2D SDK for Web

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
todo - 図の作成

## 機能
todo - ページ/コンポーネント一覧の作成

## ToDo
- アクセスカウンタをちゃんと動かす。
- 管理画面を実装しブログ投稿を行えるようにする。
- レスポンシブなUI設計を行う。
- もっとモダンなUIへの切り替えが出来るようにする。
- RDSはプライベートサブネットに置き直したいけどEC2を踏み台にするのは面倒くさいな。

## おまけ
- 昔Unityで作った怪しい物理演算のブロック崩しをビルドし直して埋め込んでいる。
- 前に作ったLive2Dのアニメーションアプリを埋め込む予定。（未実装）
- 隠しページがあったりなかったりするらしい。

<br>

## やったこと　※日記的要素
覚書も兼ねて。今後勉強したい人の参考にもなるとうれしい。

### HTML/CSSについて知る
todo - まとめる

### JavaScriptについて知る
todo - まとめる

### Reactについて知る
todo - まとめる

### Express + Node.js + Nginx
todo - まとめる

### gitの導入
todo - まとめる / .envについて書く

### linuxコマンドに慣れる
todo - まとめる

### サーバー周りの基礎知識をつける
todo - まとめる

### ORマッパーについて
todo - まとめる

### S3 + RDS をLambdaで連携させる
todo - まとめる

### CloudFrontを設定
todo - まとめる / corsについてのリンク

## こぼれ話（ハマったこと / 紆余曲折 など）
ありがちなエラーからなかなか情報が見つからなかったものまでいろいろ。

### そもそもなんでお名前.com？
友人がお名前ドットコムでドメインを取得して個人サイトを作っていたため。当時はドメインとかレンタルサーバーとかもよくわからないままに同じところで契約してしまったので1年間はお名前.comのレンタルサーバー上で動かすことになりそうです。

### Viteまわり
最初に調べて参考にしたプロジェクトがViteで作られていたため何も分からない状態で`create vite`を使っていた。検索で出てくるものは大抵`create-react-app`で作られているため`package.json`や`vite.config.js`まわりの書き方で躓いた。通常のNode.jsでのデフォルト設定との違いもあり`npm run dev`とか`npm run start`とかでもたまに書き間違えるので注意（最初にまとめて設定してもいいのかもしれない）。

### npm/npx/yarnって何？
Node.jsで動作するパッケージマネージャーのこと。JavaScript/Node.jsを扱いなれていなかったためこの辺りのコマンドについてイマイチ理解していなかった。`npm`と`yarn`は似たようなもので`npx`を使うことで未インストールのモジュールを使えるらしい。今でも完璧に理解しているとは言い難いが、一応使える程度にはなったと思う。今回は基本的に`npm`しか使っておらず、Prisma studioのみ`npx`を使っている。`pnpm`は知らん。

### BrowserRouterとHashRouter
`react-router-dom`を使うにあたって、ホームからの遷移は可能だがリロードすると読み込んでくれないという問題にハマった。結論として[.htaccessでリダイレクト設定をすればよい](https://stackoverflow.com/questions/57852786/htaccess-rewrite-for-react-using-react-router)（ホームからURLのpathを参照してRoutesの分岐を行う）ということだったが、別の解決策としてHashRouterを使う方法もあるようだ。HashRouterを使うとURLに`/#/`が入って見栄えが好きじゃないので採用しなかった。ちなみにお名前.comのレンタルサーバーには`.htaccess`を設定するGUIがある。

### 動的型付け言語に苦労
JavaScriptとかいう言語、型がうまく合ってないっぽいから`typeof()`で確認しようとしたら`object`って返ってくるの発狂しそうになる。やっぱり時代はﾀｲｽｸかもしれない。

### Node.jsとReact.jsのモジュール化の書き方の違い
Expressサーバー側のコードで、`require`すべきところで`import`を使おうとして小一時間ハマった。ちょくちょく微妙な違いで「あれ？」と思うことがあるし今後もあると思うので、そういうこともあるというのを知れたというのが大きかったと思う。問題を解決してくれるものではないが、オーバービューとして[このQuoraの質問](https://jp.quora.com/react%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8Cnode-js%E3%81%A0%E3%81%A8%E8%81%9E%E3%81%84%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%81%8B-)が分かりやすかった。

### お名前.com関連
todo - ここはやばい/いろいろある

### pemキーの権限設定にchmodが使えない
win環境だとchmodは使えないらしいので代わりにicaclsを使いましょう。

### SQL方言の違い
todo - まとめる / ORMを使うことで生のSQLを書かなくて済むので本当にうれしい。

### AWSの構築関連
todo - セキュリティ/vpn/その辺

### AmazonLinux2でpm2を使おうとしたら使えない
nvmを入れて`nvm use 16`で常に古いバージョンを指定しないといけないみたい。ここの記事がとても参考になった。[amazonlinux2 に nodeとnpmをインスコ](https://qiita.com/ma7ma7pipipi/items/c7ee11c6036ec35a1caa)

### キャッシュについて
サーバー側で使われるキャッシュにはコンテンツキャッシュとインメモリキャッシュで違いがある。CloudFrontはコンテンツキャッシュにあたるもので、DDoS攻撃対策にもなるとのことだったので採用している。今回はアクセストークンを使うという訳でもないしRDSへの負荷はあまりないのでインメモリキャッシュに相当するElastCasheは見送った。あと高いので。

### CORS（Cross-Origin Resource Sharing）
todo - まとめる / 一番苦労したのでていねいに

### EsLintとPrettier
とりあえず入れて見よう見まねで設定したもの。ビルドしたReactアプリのコードは整形されて分かりやすくなったが、実は使い方がイマイチよく分かっていない。今後ちゃんと調べます。

### webGLアプリのメモリリーク
todo - メモリリークの経緯と調べてこと<br>
useEffectの副作用フックを使って明示的にリロードを挟むという力技で誤魔化したが、chatGPTくんには本質的な解決になってないと怒られた。Unityアプリ側でフックを作るとかすればいいのだろうか。何かいい方法があれば教えてください。

### chatGPTくんについて
todo - 感想 / なんとなく「あ～これはダメなやつだな……」っていうのが分かってくる。

### AWSの無料枠とその後
todo - まとめと予定

## あとがき
Reactを使うのが主目的だったはずなのに気づいたらほとんどインフラ周りを触ってる時間だった気がする。次からはmicroCMSみたいなヘッドレスCMSをつかってバックの構築を楽にしたい。あるいはdockerを使うなどしてデプロイを簡単にできるようにしたい。最初なので別に反省はしていないが後悔はちょっとある。<br>
あとこれREADMEじゃなくてQiitaとかZennに書いたほうが良かったのでは？<br><br>
<p align="center">
    <img alt="tohoho" width="240" src=./github/nekopara_ahiru.png><br>
    とほほ・・・・・・
<p align="center">
