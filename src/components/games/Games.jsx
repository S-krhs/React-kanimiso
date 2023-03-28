import { Helmet, HelmetProvider } from "react-helmet-async";
import { Unity } from "react-unity-webgl";

const Games = ({unityProvider}) => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - ゲーム</title>
        </Helmet>

        <div className='main-title-pos'>
          <h1>ブロック破壊</h1>
        </div>
        <div className="game-pos">
          <Unity
            unityProvider = { unityProvider }
            style={{ width: 800, height: 600, maxWidth: "100%" }}
          />
        </div>
        <div className="main-text-pos">
          <p>操作方法：矢印キー左右</p>
          <p>物理演算がおかしい。いちいちRを押させるなよ。</p>
        </div>
      </HelmetProvider>
  )

export default Games;
