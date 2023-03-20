import React from 'react'
import { Link } from "react-router-dom"

const MemoList = ({entries}) => (
		<>
			<div>MemoList</div>
			<nav>
				<ul>
					{
						entries.map((value)=>(
								<li className='row' key={value.id}>
									<Link to={`entry/${value.id}`} >{value.title}</Link>
								</li>
							))
					}
          <li className='row'>
						<Link to="post">新規エントリを投稿する</Link>
					</li>
				</ul>
			</nav>
		</>
	)

export default MemoList