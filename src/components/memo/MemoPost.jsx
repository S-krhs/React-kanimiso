import { Link, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import ThumbsList from "./MemoThumbsList"
import { memoAtom, draftAtom } from "../../Atom"

const MemoPost = () => {
  const navigate = useNavigate();

  const [draft, setDraft] = useRecoilState(draftAtom);
  const [memos, setMemos] = useRecoilState(memoAtom);

  const Post = () =>{
    let id = 1;
    if(memos.length>0){
      id = memos.slice(-1)[0].id+1;
    }
    const memo={
      "id": id,
      "thumbimg": draft.thumbimg,
      "title": draft.title,
      "text": draft.text,
      "texttype": draft.texttype,
    }
    if(draft.texttype === "text"){
      memo.text = memo.text.replace(/\n/g, '<br>');
    }
    if(draft.title === ""){
      memo.title = "No Title";
    }
    
    setMemos([...memos,memo]);
    setDraft({
      thumbimg: "099.png",
      title: "",
      text: "",
      texttype:"text",
    })

    navigate("../");
  }

  return (
    <>
      <div className='entry-title-pos'>
        <h2>新規投稿</h2>
      </div>
      <div className='entry-params-title-pos'>
        <h3>タイトル</h3>
      </div>
      <div className='textarea-title-pos'>
        <textarea type="text" className='textarea-title'
          value={draft.title}
          onChange={(event) => setDraft({...draft,title:event.target.value})}
          placeholder="タイトル"/>
      </div>
      <div className='entry-params-title-pos'>
        <h3>形式</h3>
      </div>
      <div className='post-type-radio-pos'>
        <label htmlFor="text" className='post-type-radio'>
          <input type="radio" name="post_type" id="text" value="text" defaultChecked 
            onChange={(event)=>{setDraft({...draft, texttype:event.target.value})}}/>
          &nbsp;Text
        </label>
        <label htmlFor="markdown" className='post-type-radio'>
          <input type="radio" name="post_type" id="markdown" value="markdown" 
            onChange={(event)=>{setDraft({...draft, texttype:event.target.value})}}/>
          &nbsp;MarkDown
        </label>
      </div>
      <div className='entry-params-title-pos'>
        <h3>本文</h3>
      </div>
      <div className='textarea-text-pos'>
        <textarea type="text" className='textarea-text'
          value={draft.text}
          onChange={(event) => setDraft({...draft,text:event.target.value})}
          placeholder="ここに本文を入力"/>
      </div>
      <div className='entry-subtitle-pos'>
        <h3>サムネイル選択</h3>
      </div>
      <div className="thumb-radios-pos">
        <div className="thumb-radios">
          {ThumbsList.map((value)=>(
            <label htmlFor={`thumb-${value}`} className='thumb-radio' key={value}>
              <span className="thumb-pos">
                <img className="thumb" alt = {`pic${value}`} src = {`../../../thumb/${value}.png`} />
              </span>
              <input type="radio" name="thumb_select" id={`thumb-${value}`}
                value={`${value}.png`} onChange={(event)=>{setDraft({...draft, thumbimg:event.target.value})}}/>
            </label>
          ))}
        </div>
      </div>

      <div><button type="button" className="submit-button" onClick={ () => Post() }>投稿する</button></div>
      <Link to="../" >一覧に戻る</Link>
    </>
  )
}

export default MemoPost