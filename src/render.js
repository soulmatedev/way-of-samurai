import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";

let root;

function createRoot() {
	root = ReactDOM.createRoot(document.getElementById('root'));
}

export function rerenderEntireTree(state) {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</React.StrictMode>
	);
}

createRoot();
