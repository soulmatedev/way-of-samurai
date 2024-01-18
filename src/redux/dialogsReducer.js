const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 3,
				message: state.newMessageBody,
			};
			state.messages.push(newMessage)
			state.newMessageBody = '';
			return state;

		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;

		default:
			return state;
	}
}
export const sendMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
