import React, {useState, useEffect} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import defaultImgPath from "../../assets/transparent.png"


const Works = () => {
  const [illustsData,setIllustsData] = useState([]);
  const [illustsPath,setIllustsPath] = useState(defaultImgPath);
  const [illustImgClass,setIllustsImgClass] = useState('illust-img')
  const URL=`${import.meta.env.VITE_BACK_SERVER_URL}/pics`;

  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(json=>{
      setIllustsData(json);
      setIllustsPath(json.slice(-1)[0].path);
    })
    .catch(error => console.error('Expressサーバーとの通信に失敗しました。', error))
  },[URL])

  const AspectCalc=(e)=>{
    const aspect = e.target.width/e.target.height;
    if(aspect>1){
      setIllustsImgClass("illust-img");
    }else{
      setIllustsImgClass("illust-img-port");
    }
  }

  
  return (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - イラスト</title>
        </Helmet>
        <h1 className='main-title-pos'>Works</h1>
        <div className='illust-buttons-pos'>
          {illustsData.map((data)=>(
            <span key={data.id} className='like-a' onClick={()=>setIllustsPath(data.path)}>■</span>
          ))}
        </div>
        <div className='illust-pos'>
          <img alt="img" onLoad={AspectCalc} src={illustsPath} className={illustImgClass}/>
        </div>
      </HelmetProvider>
  )
}

export default Works