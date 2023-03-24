import React from 'react'
import { useParams , Link, useNavigate } from 'react-router-dom'

import { useRecoilState } from "recoil"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
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
      <div className='entry-text'>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          remarkPlugins={[remarkGfm]}
        >
          {entry.text}
        </ReactMarkdown>
      </div>
      <div>
        <button type="button" className='delete-button' onClick={()=>Delete(entryId)}>エントリを削除する</button>
      </div>
      <Link to="../" >一覧に戻る</Link>
    </>
  )
}

export default Memo