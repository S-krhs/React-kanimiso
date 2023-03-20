import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import UnityGame from "./UnityGame";

const Games = () => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - ゲーム</title>
        </Helmet>

        <h1 className="main-title-pos">ブロック破壊</h1>
        <div className="game-pos">
          <UnityGame />
        </div>
        <div className="game-description">
          <p>操作方法：矢印キー左右</p>
          <p>物理演算がおかしい。いちいちRを押させるなよ。</p>
        </div>
      </HelmetProvider>
  );

export default Games;
