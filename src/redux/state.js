let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 15},
				{id: 2, message: "It`s my first post", likesCount: 20},
			],
			newPostText: [
				''
			],
		},
		dialogsPage: {
			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'How are you?'},
				{id: 3, message: 'Hia'},
			],
			newMessageText: [
				''
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
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log('state changed')
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	addMessage() {
		let newMessage = {
			id: 3,
			message: this._state.dialogsPage.newMessageText,
		};
		this._state.dialogsPage.messages.push(newMessage)
		this._state.dialogsPage.newMessageText = '';
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	updateNewMessageText(newText) {
		this._state.dialogsPage.newMessageText = newText;
		this._callSubscriber(this._state)
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
}

export default store;
window.store = store;
