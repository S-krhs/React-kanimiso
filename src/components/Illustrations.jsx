import React, {useState, useEffect} from 'react'


const Illustrations = () => {
  const [illustsData,setIllustsData]=useState([]);

  useEffect(()=>{
    fetch("/pics")
    .then(res=>res.json())
    .then(json=>{setIllustsData(json)})
    .catch(error => {console.error('通信に失敗しました', error);})
  },[])

  return (
    <div className='MainContents'>
      <div>Illustrations</div>
      {illustsData.map((data,index)=>(
        <div key={index}>
          <p>{data.path}</p>
          <img src={data.path}/>
        </div>
    ))}
    </div>
  )
}

export default Illustrations