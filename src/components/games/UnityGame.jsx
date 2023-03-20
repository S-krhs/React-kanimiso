import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../unity-build/Build/Breakout.loader.js",
    dataUrl: "../unity-build/Build//Breakout.data.unityweb",
    frameworkUrl: "../unity-build/Build//Breakout.framework.js.unityweb",
    codeUrl: "../unity-build/Build//Breakout.wasm.unityweb",
    streamingAssetsUrl: "../unity-build/StreamingAssets",
  });

  useEffect(() => () => {
      window.location.reload();
    }, []);

  return (
    <Unity
        unityProvider={unityProvider}
        style={{ width: 800, height: 600 }}
      />
  );
};

export default UnityGame;
