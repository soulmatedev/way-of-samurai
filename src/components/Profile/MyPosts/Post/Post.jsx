import React from "react";
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div className={style.item}>
			<img
				src="https://img02.rl0.ru/afisha/e400x400p349x0f1330x1330q85i/s.afisha.ru/mediastorage/23/79/ecd35e13c3354634910786a17923.jpeg"/>
			{ props.message }
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post;
