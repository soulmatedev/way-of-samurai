import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

let root;

function createRoot() {
	root = ReactDOM.createRoot(document.getElementById('root'));
}

function rerenderEntireTree(state) {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				addMessage={addMessage}
				updateNewPostText={updateNewPostText}
				updateNewMessageText={updateNewMessageText}
			/>
		</React.StrictMode>
	);
}

createRoot();

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
