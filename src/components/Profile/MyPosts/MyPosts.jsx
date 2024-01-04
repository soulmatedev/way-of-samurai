import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={style.posts_block}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={style.posts}>
				<Post message="Hi, how are you?" likes={15}/>
				<Post message="It's my first post" likes={20}/>
			</div>
		</div>
	)
}

export default MyPosts;
