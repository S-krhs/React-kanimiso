import React, {useState, useEffect} from 'react'
import defaultImgPath from "../../assets/transparent.png"
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Works = () => {
  const [illustsData,setIllustsData] = useState([]);
  const [illustsPath,setIllustsPath] = useState(defaultImgPath);
  const [illustImgClass,setIllustsImgClass] = useState('illust-img')

  useEffect(()=>{
    fetch("https://d2n0vbpdmqpidn.cloudfront.net/pics")
    .then(res=>res.json())
    .then(json=>{
      setIllustsData(json);
      setIllustsPath(json.slice(-1)[0].path);
    })
    .catch(error => {console.error('Expressサーバーとの通信に失敗しました。', error);})
  },[])

  const AspectCalc=(e)=>{
    const aspect = e.target.width/e.target.height;
    if(aspect>1){
      setIllustsImgClass("illust-img");
    }else{
      setIllustsImgClass("illust-img-port");
    }
  }

  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - イラスト</title>
        </Helmet>
        <h1 className='main-title-pos'>Works</h1>
        <div className='illust-buttons-pos'>
          {illustsData.map((data,index)=>(
            <span key={index} className='like-a' onClick={()=>setIllustsPath(data.path)}>■</span>
          ))}
        </div>
        <div className='illust-pos'>
          <img onLoad={AspectCalc} src={illustsPath} className={illustImgClass}/>
        </div>
      </HelmetProvider>
    </>
  )
}

export default Works