import React, {useState, useEffect} from 'react'


const Illustrations = () => {
  const [illustsData,setIllustsData]=useState([]);
  const [illustsPath,setIllustsPath]=useState('default');

  useEffect(()=>{
    fetch("/pics")
    .then(res=>res.json())
    .then(json=>{
      setIllustsData(json);
      setIllustsPath(json.slice(-1)[0].path);
    })
    .catch(error => {console.error('Expressサーバーとの通信に失敗しました。', error);})
  },[])

  
  return (
    <div className='MainContents'>
      <h1 className='MainTitlePos'>Works</h1>
      <div className='IllustButtonsPos'>
        {illustsData.map((data,index)=>(
            <span key={index} className='likeA' onClick={()=>setIllustsPath(data.path)}>■</span>
        ))}
      </div>
      <div className='IllustPos'>
        <img className='IllustImg' src={illustsPath}/>
      </div>
    </div>
  )
}

export default Illustrations