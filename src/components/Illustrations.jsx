import React, {useState} from 'react'

const Illustrations = () => {
  const [imgPath, setImgPath] = useState('default');

  fetch("/pics")
  .then(res=>res.json())
  .then(json=>{
    setImgPath(json[0].path);
  })
  .catch(error => {
    console.error('通信に失敗しました', error);
  })

  return (
    <div>
      <img src={imgPath}/>
    </div>
  )
}

export default Illustrations