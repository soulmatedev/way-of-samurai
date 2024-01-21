import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import store from "./redux/redux-store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let root;

function createRoot() {
	root = ReactDOM.createRoot(document.getElementById('root'));

	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App
						dispatch={store.dispatch.bind(store)}
						store={store}
					/>
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
}

createRoot();
