import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

	let postData = [
		{id: 1, message: 'Hi, how are you?', likesCount: 15},
		{id: 2, message: "It`s my first post", likesCount: 20},
	]

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
				<Post message={postData[0].message} likes={postData[0].likesCount}/>
				<Post message={postData[1].message} likes={postData[1].likesCount}/>
			</div>
		</div>
	)
}
export default MyPosts;
