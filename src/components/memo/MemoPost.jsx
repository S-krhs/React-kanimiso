import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const MemoPost = ({entries,setEntries}) => {
  const [title,setTitle] = useState("No Title");
  const [text,setText] = useState("");
  const navigate = useNavigate();

  const Post = () =>{
    if(title===""){ setTitle("No Title"); }
    let id = 1;
    if(entries.length>0){
      id = entries.slice(-1)[0].id+1;
    }
    const entry={
      "id":id,
      "title":title,
      "text":text
    }
    setEntries([...entries,entry]);
    navigate("../");
  }

  return (
    <>
      <h2>新規投稿</h2>
      <div>タイトル</div>
      <div>
        <input type="text" size="50"
          value={title}
          onChange={(event) => setTitle(event.target.value)}/>
      </div>
      <div>本文</div>
      <div>
        <input type="text" size="50"
          value={text}
          onChange={(event) => setText(event.target.value)}/>
      </div>
      <div><button onClick={ () => Post() }>投稿する</button></div>
      <Link to="../" >一覧に戻る</Link>
    </>
  )
}

export default MemoPost