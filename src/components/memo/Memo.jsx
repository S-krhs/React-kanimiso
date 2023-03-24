import React from 'react'
import { useParams , Link, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import { useRecoilState } from "recoil"
import { memoAtom } from "../../Atom"


const Memo = () => {
  const navigate = useNavigate();
  const param = useParams();
  const entryId = parseInt(param.id,10);

  const [memos,setMemos] = useRecoilState(memoAtom);
  const entry = memos.find((v)=>v.id === entryId);

  const Delete = (id_) =>{
    setMemos(
      memos.filter((v) => (v.id !== id_))
    )
    navigate("../");
  }

  return (
    <>
      <h2>{entry.title}</h2>
      <div>{parse(entry.text)}</div>
      <div>
        <button type="button" onClick={()=>Delete(entryId)}>エントリを削除する</button>
      </div>
      <Link to="../" >一覧に戻る</Link>
    </>
  )
}

export default Memo