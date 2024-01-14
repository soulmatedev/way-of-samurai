import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import store from "./redux/state";
import App from "./App";

let root;

function createRoot() {
	root = ReactDOM.createRoot(document.getElementById('root'));
}

function rerenderEntireTree(state) {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>
	);
}

createRoot();

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
