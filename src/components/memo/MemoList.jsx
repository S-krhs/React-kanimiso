import React from 'react'
import { Link } from "react-router-dom"

const MemoList = ({entries}) => {
	return (
		<>
			<div>MemoList</div>
			<nav>
				<ul>
					{
						entries.map((value,index)=>{
							return(
								<li className='row' key={index}>
									<Link to={"entry/"+value.id} >{value.title}</Link>
								</li>
							)
						})
					}
          <li className='row'>
						<Link to="post">新規エントリを投稿する</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default MemoList