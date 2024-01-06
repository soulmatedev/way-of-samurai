import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 15},
		{id: 2, message: "It`s my first post", likesCount: 20},
	]

	let postsElements = posts.map(post =>
		<Post message={post.message} likes={post.likesCount}/>)

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
				{
					postsElements
				}
			</div>
		</div>
	)
}
export default MyPosts;
