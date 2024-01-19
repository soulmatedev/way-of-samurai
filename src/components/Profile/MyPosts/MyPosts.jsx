import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postsElements = props.posts.map(post =>
		<Post message={post.message} likes={post.likesCount}/>)

	let newPostElement = React.createRef();
	let addPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={style.posts_block}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						ref={newPostElement}
						value={props.newPostText}
						onChange={onPostChange}
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
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
