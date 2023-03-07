import React, {useState, useEffect} from 'react'
import defaultImgPath from "../assets/transparent.png"


const Illustrations = () => {
  const [illustsData,setIllustsData] = useState([]);
  const [illustsPath,setIllustsPath] = useState(defaultImgPath);
  const [illustImgClass,setIllustsImgClass] = useState('IllustImg')

  useEffect(()=>{
    fetch("/pics")
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
      setIllustsImgClass("IllustImg");
    }else{
      setIllustsImgClass("IllustImgPort");
    }
  }

  
  return (
    <>
      <h1 className='MainTitlePos'>Works</h1>
      <div className='IllustButtonsPos'>
        {illustsData.map((data,index)=>(
            <span key={index} className='likeA' onClick={()=>setIllustsPath(data.path)}>■</span>
        ))}
      </div>
      <div className='IllustPos'>
        <img onLoad={AspectCalc} src={illustsPath} className={illustImgClass}/>
      </div>
    </>
  )
}

export default Illustrations