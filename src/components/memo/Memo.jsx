import React from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { Link, useNavigate } from "react-router-dom"


const Memo = ({entries,setEntries}) => {
  const navigate = useNavigate();
  const param = useParams();
  const entryId = param.id;
  const entry = entries.find((v)=>v.id == entryId);

  const Delete = (id_) =>{
    setEntries(
      entries.filter((v) => (v.id != id_))
    )
    navigate("../");
  }

  return (
    <>
      <h2>{entry.title}</h2>
      <div>{parse(entry.text)}</div>
      <div>
        <button onClick={()=>Delete(entryId)}>エントリを削除する</button>
      </div>
      <Link to="../" >一覧に戻る</Link>
    </>
  )
}

export default Memo