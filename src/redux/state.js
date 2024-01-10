import {rerenderEntireTree} from "../render";

export let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 15},
			{id: 2, message: "It`s my first post", likesCount: 20},
		],
	},
	dialogsPage: {
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Hia'},
		],
		dialogs: [
			{id: 1, name: 'Dimych'},
			{id: 2, name: 'Andrey'},
			{id: 3, name: 'Sveta'},
			{id: 4, name: 'Sasha'},
			{id: 5, name: 'Viktor'},
			{id: 6, name: 'Valera'},
		],
	}
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
}
