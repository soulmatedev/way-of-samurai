import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
		my posts
		<div>
			<textarea></textarea>
			<button>add post</button>
			<button>remove</button>
		</div>
			<div className={css.posts}>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
			</div>
		</div>
	)
}

export default MyPosts;
