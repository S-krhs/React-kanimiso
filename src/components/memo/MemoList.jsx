import React from 'react'
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { memoAtom } from "../../Atom"

const MemoList = () =>{
  const [memos] = useRecoilState(memoAtom);

  return(
    <nav>
      <ul className='entries'>
        {
          memos.map((memo)=>(
            <li className='entry-thumb-pos' key={memo.id}>
              <Link className="non-a" to={`entry/${memo.id}`} >
                <div className='entry-thumb-box'>
                  <div className='entry-thumb-img-pos'>
                    <img className='entry-thumb-img' alt={`${memo.title} thumb`} src={`../../../thumb/${memo.thumbimg}`}/>
                  </div>
                  <div className='entry-thumb-title'>
                    {memo.title}
                  </div>
                  <div className='entry-thumb-text'>
                    {memo.text}
                  </div>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>  
      <div className='new-entry'>
        <Link to="post">新規エントリを投稿する</Link>
      </div>
    </nav>
	)
}

export default MemoList