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
- React 18.2.0
- Vite 4.0.4
    
### 使用ライブラリ
- react-router-dom 6.6.2
- react-helmet-async 1.3.0
- react-unity-webgl 9.4.0
- react-responsive 9.0.2

### サーバーサイド
- Amazon Linux 2
- Nginx 1.22.1
- Express 4.18.2
- Node.js 16.19.1
- PM2 5.2.2 
- Prisma Client 4.10.1
- PostgreSQL 13.7

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
- もっとモダンなUIへの切り替えが出来るようにする（+Tailwindを使ってみる）。
- REST APIの実装。
- RDSはプライベートサブネットに置き直したいけどEC2を踏み台にするのは面倒くさいな。

## おまけ
- 昔Unityで作った怪しい物理演算のブロック崩しをビルドし直して埋め込んでいる。
- 前に作ったLive2Dのアニメーションアプリを埋め込む予定。（未実装）
- 隠しページがあったりなかったりするらしい。

<br>

## やったこと　※日記的要素
覚書も兼ねて。今後勉強したい人の参考にもなるとうれしい。

### HTML/CSSについて知る
HTMLの構文に関しては、知人の作ったホームページをデベロッパーツールで見たりしていると大体分かってくるので勉強という勉強をしたわけではないです。ちょっとは調べましたがHTML = HyperText Markup Languageは読んで字のごとくハイパーテキストをマークアップするための言語で、HTTP = HyperText Transfer Protocolから察するにhttpでやり取りするためのHTMLという言語なんだなという感じで理解しました。要はホームページにアクセスすることでhttpリクエストを送信しており、返ってきたHTMLをブラウザ側で解釈して表示してるんだな～ぐらいが分かったので次に進みました。なおリクエストを送信するにあたりヘッダーの重要性に気づくのは[まだ先の話……](#corscross-origin-resource-sharing)。<br>
HTMLに関連して必ず登場するのがCSSで、HTMLの見た目を決める要素を記述する言語です。このときはまだCSSについてはそこまでちゃんと分かっておらず、実装をしながら覚えていった形です。というかまだ全然覚えてはないので毎回検索しています。理解が必要な部分としてはレイアウトの概念と親子関係の意識が必要だということぐらいでしょうか。手続き型のプログラミング言語なんかと比べるとCSSは暗記ゲーなので検索と慣れが本質な気がします。

### JavaScriptについて知る
これまで主にC++で競技プログラミングをしていたので、まずは競プロの問題をJavaScriptで解いてみるところから始めました。C++とJavaScriptで基本的な文法は近いのでそのあたりは取っつきやすく感じました。ただアロー関数の書き方だけは慣れるまでかなり違和感がありました。D問題(8問ABC)ぐらいまでは書けるようになったのでコーディングの練習はそのあたりで一段落してます。しかし本当の恐ろしさは文法は似ていても静的型付け言語と動的型付け言語という根本的な違いがあることで……後々[結構イライラすること](#動的型付け言語に苦労)もあったりなかったり。<br>
実際コードを書くようになると、プログラムがどのように動いているのかというのを考えないといけない場面が多く出てきます。JavaScriptはブラウザ側あるいはサーバ側での処理であるというのを意識する、というか常にそれを前提に考えておくのが必要だなと思います。今回はフロントでReact.js、バックでNode.jsを使ったので、基本的な書き方とフレームワーク特有の書き方両方に慣れることができたのは良かったかなと思います。<br>
それと最初に苦労するのは非同期処理かなと思います。これに関しては[プロミスの使用 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises)を熟読することで頑張りました。ある程度分かると書いてるうちに少しずつ体感的に分かってくる部分があります。自分のコードでは`Promise`よりも`async`+`await`を使うことの方が多いですが、`await`での書き方がまだ身体に染みついてないので私自身もう少し精進が必要かなと思います。

### Reactについて知る
「Reactとは何ぞや」「フレームワークとは何ぞや」というところからですが、まずは動画で雰囲気を知ることから始めました。この動画が基本的な部分から始まって大まかな流れが良く分かるので非常に参考になりました。<br>
https://www.youtube.com/watch?v=nRCNL9T3J98&t=304s
<br>
後はコーディングとGoogle検索とchatGPTを往復しながら掴んでいった感じです。フレームワークとしてはかなり分かりやすいもの、というと語弊があるかもしれないですが、思考リソースを機能部分に集中して開発しても全体としてスパゲッティーになりにくいのは、C#.NETのようなクラス型言語でのアプリ開発と比較してうれしいなと思いました。<br>
逆に難しい部分としては、JavaScriptの特性にもなるかもしれませんが、書き方が複数通りあるのでどれを採用するべきか（どう書けばESLintに怒られずに済むのか）が分かりにくいとは感じました。そこに関連して`export`や`props`周りの記述には直感的ではない部分があり、そこは慣れが必要だなと感じました。あと反省点があるとすれば最初は`create-reach-app`でプロジェクト作成を行うべきであり、`vite`のようなツールを使うのはまだ早かったという部分でしょうか。

### Express + Node.js + Nginx
ホームページを作るにあたって絵を載せるページを作りたいと思っていました。しかしReactアプリはビルドが必要なので後から絵を追加するたびにビルドしなおすのは嫌だなと思い、バックにイラスト一覧を取得するためのサーバーを設置することにしました。（まあ実際はPublicにjsonでも置いて管理すればフロントだけでも良かったのですが。）そこで調べたところJavaScriptベースで一般的な構成がExpress + Node.jsということでそれを採用することにしました。<br>
Expressフレームワークで最初に躓きそうな部分はRoutingの概念だと思いますが、手前のReactで`react-router-dom`を使った経験が早速生きることとなり理解しやすかったです。あとExpress部分のコーディングに関してはほとんどgeneratorとchatGPTに生成してもらったものなので、全て自力で書くとなるともう少し時間がかかったかなと思います。今回ここのミドルウェア部分ではそこまで難しい処理はしていないのでひな形を少し弄る程度のコードになっています。<br>
WebサーバとしてはNginxを採用しています。選定理由としてNginxとApacheの比較ですが、少し調べたところこの程度の規模の個人開発ならどっちでも良さそうな感じでしたので、流行ってそうな方を選んだだけです。ちなみにローカルの開発環境では以前XAMPPを入れていた名残でApacheを使っています、揃えたほうが良い気がする……。Nginxを使うにあたってはnginx.confを適切に弄ることが必要です。QiitaやZennを漁りつつ出来るだけ壊さないように見よう見まねでやっていくうちにコンフィグの意味、ひいてはネットワークの基礎が分かるようになりました。ちなみに一回意味が分からなくなってEC2のインスタンスを破壊して作成しなおしました。（そのときの原因は別にNginxではなかった。）個人で試行錯誤するときにやらかしてもリセットしやすいのはクラウドVMの利点かもしれません。

### gitの導入
todo - まとめる / .envについて書く

### linuxコマンドに慣れる
todo - まとめる

### サーバー周りの基礎知識をつける
todo - まとめる

### O/Rマッパーについて
todo - まとめる

### S3 + RDS をLambdaで連携させる
todo - まとめる

### CloudFrontを設定
todo - まとめる / corsについてのリンク

### Reactアプリの作成
インターネットに情報がたくさん上がっているので調べながらアプリを作ります。モジュールの分割についてあまり考えなくても結構きれいな設計になるのでうれしい。（Reactを使うことが主目的だったはずなのに正直ここで話すことがあんまりない）

### 管理画面の実装
レンタルサーバー側にBasic認証機能が付いていたので利用しました。この程度の規模感ならそれでも大丈夫かなと思いましたが、ちゃんとやるならもっといろいろ調査したほうが良いかもしれない。今後の課題。

## こぼれ話（ハマったこと / 紆余曲折 など）
ありがちなエラーからなかなか情報が見つからなかったものまでいろいろ。

### そもそもなんでお名前.com？
友人がお名前ドットコムでドメインを取得して個人サイトを作っていたため。当時はドメインとかレンタルサーバーとかもよくわからないままに同じところで契約してしまったので1年間はお名前.comのレンタルサーバー上で動かすことになりそうです。

### Viteまわり
最初に調べて参考にしたプロジェクトがViteで作られていたため何も分からない状態で`create vite`を使っていた。検索で出てくるものは大抵`create-react-app`で作られているためpackage.jsonやvite.config.jsまわりの書き方で躓いた。例えばproxyの設定とか。通常のnpmコマンドのデフォルト設定との違いもあり`npm run dev`とか`npm run start`とかで書き間違えが出たりするのも注意。（最初にまとめてコマンドを設定したほうが楽でいいのかもしれない）

### npm/npx/yarnって何？
Node.jsで動作するパッケージマネージャーのこと。JavaScript/Node.jsを扱いなれていなかったためこの辺りのコマンドについてイマイチ理解していなかった。`npm`と`yarn`は似たようなもので`npx`を使うことで未インストールのモジュールを使えるらしい。今でも完璧に理解しているとは言い難いが、一応使える程度にはなったと思う。今回は基本的に`npm`しか使っておらず、Prisma studioのみ`npx`を使っている。`pnpm`は知らん。

### BrowserRouterとHashRouter
`react-router-dom`を使うにあたって、ホームからの遷移は可能だがリロードすると読み込んでくれないという問題にハマった。結論として[.htaccessでリダイレクト設定をすればよい](https://stackoverflow.com/questions/57852786/htaccess-rewrite-for-react-using-react-router)（ホームからURLのpathを参照してRoutesの分岐を行う）ということだったが、別の解決策としてHashRouterを使う方法もあるようだ。HashRouterを使うとURLに`/#/`が入って見栄えが好きじゃないので採用しなかった。ちなみにお名前.comのレンタルサーバーには.htaccessを設定するGUIがある。

### 動的型付け言語に苦労
JavaScriptとかいう言語、型がうまく合ってないっぽいから`typeof()`で確認しようとしたら`object`って返ってくるの発狂しそうになる。やっぱり時代はﾀｲｽｸかもしれない。

### Node.jsとReact.jsのモジュール化の書き方の違い
Expressサーバー側のコードで、`require`すべきところで`import`を使おうとして小一時間ハマった。ちょくちょく微妙な違いで「あれ？」と思うことがあるし今後もあると思うので、そういうこともあるというのを知れたというのが大きかったと思う。問題を解決してくれるものではないが、オーバービューとして[このQuoraの質問](https://jp.quora.com/react%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8Cnode-js%E3%81%A0%E3%81%A8%E8%81%9E%E3%81%84%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%81%8B-)が分かりやすかった。

### お名前.com関連
todo - ここはやばい/いろいろある

### pemキーの権限設定にchmodが使えない
win環境だとchmodは使えないらしいので代わりに~~icaclsを使いましょう~~……と思っていたけど普通にエクスプローラー上で設定できますね、これ。ファイルを右クリックして出てくるプロパティのセキュリティタブで編集すればよろし。

### SQL方言の違い
以前SQL Serverを触ったことがあったが、今回はPostgreSQLということで所謂SQL方言の違いで「あれ？」と思うことがあった。あと同時並行で別のプロジェクトではMySQLを扱っていたのでそれもまた「ウ～ン？」となり……。管理ツールの方もSSMS、phpMyAdmin、pgAdminなどいろいろあってそれぞれ微妙に使い勝手が違うのもちょっとしたストレスになったり。途中からはORMとしてPrismaを使うようになり、特にPrisma StudioのシンプルなUIがかなり分かりやすくてよかった。基本生のSQLを書かなくて済むのは本当にうれしい。

### AWSの構築関連
todo - セキュリティ/vpn/その辺

### AmazonLinux2でpm2を使おうとしたら使えない
nvmを入れて`nvm use 16`で常に古いバージョンを指定しないといけないみたい。ここの記事がとても参考になった。[amazonlinux2 に nodeとnpmをインスコ](https://qiita.com/ma7ma7pipipi/items/c7ee11c6036ec35a1caa)

### キャッシュについて
サーバー側で使われるキャッシュにはコンテンツキャッシュとインメモリキャッシュで違いがある。CloudFrontはコンテンツキャッシュにあたるもので、DDoS攻撃対策にもなるとのことだったので採用している。今回はアクセストークンを使うという訳でもないしRDSへの負荷はあまりないのでインメモリキャッシュに相当するElastCacheは見送った。あと高いので。

### CORS（Cross-Origin Resource Sharing）
todo - まとめる / 一番苦労したのでていねいに

### EsLintとPrettier
とりあえず入れて見よう見まねで設定したもの。ビルドしたReactアプリのコードは整形されて分かりやすくなったが、実は使い方がイマイチよく分かっていない。~~今後ちゃんと調べます。~~<br>
調べたところ今までちゃんと働いていないことが判明したので動くように修正(2023/03/20)。気に入らないルールをいくつか無効にしてしまったが良かったのだろうか。

### webGLアプリのメモリリーク
todo - メモリリークの経緯と調べたこと<br>
結局`useEffect()`の[副作用フック](https://takamints.hatenablog.jp/entry/cleanup-an-async-use-effect-hook-of-react-function-componet)を使って[明示的にリロードを挟む](https://morioh.com/p/f228a0a3f3a6)という力技で誤魔化したが、chatGPTくんには本質的な解決になってないと怒られた。Unityアプリ側でメモリ解放のためのフックを作るとかすればいいのだろうか。何かいい方法があれば教えてください。<br>

#### 追記(2023/03/20)
~~loader.jsを検索していたら~~ <-[別の方法](#追記20230324)で解決しました。
```
e.destroyInstance = function () {
return a ? a.close().then(function () {
    a = null
}) : Promise.resolve()
},
e.clearCache = function () {
return e.destroyInstance().then(function () {
    return new Promise(function (e, r) {
    var n = o.deleteDatabase(t.name);
    n.onsuccess = function () {
        e()
    }, n.onerror = function () {
        r(new Error("Could not delete database."))
    }, n.onblocked = function () {
        r(new Error("Database blocked."))
    }
    })
})
}
```
というコードを発見したのでclearCacheを実行したらいいのかも。今度やってみよう、乞うご期待。<br>

#### 追記(2023/03/24)
[`React Unity WebGL`のリファレンス](https://react-unity-webgl.dev/docs/api/unload)にアンロードについて記述がありました。`unityProvider`と同時に`unload`を宣言することで非同期関数として使用可能になるそうです。
```:App.jsx
const { unityProvider, unload } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
});
```
これを副作用フックに入れることで解決……と思ったのですがそれは上手くいきませんでした。ということで今回は`react-router-dom`の`Link`タグの`onClick`属性に対して以下の関数をアサインしています。これでエラーが出なくなります。
```:App.jsx
const unityUnload = async(navigate,location,event) =>{
    // '/games'からの遷移に限り実行する
    if(location.pathname === "/games"){
        event.preventDefault();
        await unload();
        navigate(event.target.pathname);
    }
}
```
`event.preventDefault()`で一次的に遷移をキャンセルして`unload()`を行ったのち、`react-router-dom`の`useNavigate()`を用いて改めて遷移を実装しています。`event.preventDefault()`を行わないと先に`Link`タグの遷移処理が行われてしまうため、終了先を見失った関数がグルグルしてしまってかわいそうなことになるので注意。（もしかしたらonClickは先に走ってはいるものの、awaitが意味を成さなくなることが原因かもしれない。）`Link`タグ側は次のような形。
```:LinkMenu.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
const LinkMenu = ({ unityUnload }) => {
    const location = useLocation();
    const navigate = useNavigate();
    return
        <Link
            to="hoge"
            onClick={(e)=>unityUnload(navigate,location,e)}>
            ホゲのページ
        </Link>
}
```
`unityUnload()`関数はpropsとして親のApp.jsxから渡しています。気持ちとしてはGame.jsxのコンポーネント内で上手いこと解決したかったのですが、Link側の処理をする必要があったためこういった形になりました。

### chatGPTくんについて
todo - 感想 / 便利、割と大嘘をつく、なんとなく「あ～これはダメなやつだな……」っていうのが分かってくる。

### 2000年代風サイトデザインについて
ここのサイトを参考にしました。<br>
[2000年代風ホームページの作り方](https://shota11.stars.ne.jp/net/04/)<br>
あとここも<br>
[90年代ホームページの作り方 - Y氏は暇人](https://y-ta.net/homepage90/)<br>
それとこの記事（READMEのことを記事と言うな）を書いている時にこんなサイトも見つけた。<br>
[BADオープンデータ供養寺](https://bad-data.rip/)

### AWSの無料枠とその後
todo - まとめと予定

## あとがき
Reactを使うのが主目的だったはずなのに気づいたらほとんどインフラ周りを触ってる時間だった気がする。次からはmicroCMSみたいなヘッドレスCMSをつかってバックの構築を楽にしたい。あるいはdockerを使うなどしてデプロイを簡単にできるようにしたい。最初なので別に反省はしていないが後悔はちょっとある。<br>
あとこれREADMEじゃなくてQiitaとかZennに書いたほうが良かったのでは？<br><br>
<p align="center">
    <img alt="tohoho" width="240" src=./github/nekopara_ahiru.png><br>
    とほほ・・・・・・
<p align="center">
