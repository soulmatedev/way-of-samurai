import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	const DIALOG_PATH = `/dialogs/${props.id}`;

	return <div className={style.dialog}>
		<NavLink to={DIALOG_PATH}>{props.name}</NavLink>
	</div>
}

const Message = (props) => {
	return <div className={style.message}>{props.message}</div>
}

let dialogs = [
	{id: 1, name: 'Dimych'},
	{id: 2, name: 'Andrey'},
	{id: 3, name: 'Sveta'},
	{id: 4, name: 'Sasha'},
	{id: 5, name: 'Viktor'},
	{id: 6, name: 'Valera'},
]

let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'Hia'},
]

let dialogsElements = dialogs.map(dialog =>
	<DialogItem name={dialog.name} id={dialog.id}/>)

let messagesElements = messages.map(message =>
	<Message message={message.message}/>)

const Dialogs = () => {
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
			</div>
		</div>
	)
}

export default Dialogs;
