import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

	let sendMessage = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<Dialogs
			updateNewMessageBody={onNewMessageChange}
			sendMessage={sendMessage}
			dialogsPage={state}
		/>
	)
}

export default DialogsContainer;
