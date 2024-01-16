const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
			newMessageBody: [
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
	_callSubscriber() {
		console.log('state changed')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch (action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		if (action.type === ADD_MESSAGE) {
			let newMessage = {
				id: 3,
				message: this._state.dialogsPage.newMessageBody,
			};
			this._state.dialogsPage.messages.push(newMessage)
			this._state.dialogsPage.newMessageBody = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		}
	}
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
window.store = store;
