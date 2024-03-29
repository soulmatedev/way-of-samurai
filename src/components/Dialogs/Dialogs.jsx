import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {redirect} from "react-router";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(dialog =>
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	);

	let messagesElements = state.messages.map(message =>
		<Message message={message.message} key={message.id}/>
	);

	let newMessageBody = state.newMessageBody;

	let sendMessage = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

	if (props.isAuth) return redirect("/login");

	return (
		<div className={style.dialogs}>
			<div className={style.items}>
				{
					dialogsElements
				}
			</div>
			<div className={style.messages}>
				{
					messagesElements
				}
				<div>
					<textarea
						value={newMessageBody}
						onChange={onNewMessageChange}
					/>
				</div>
				<div>
					<button onClick={sendMessage}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
