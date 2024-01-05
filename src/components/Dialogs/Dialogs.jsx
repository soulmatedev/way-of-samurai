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

let dialogsData = [
	{id: 1, name: 'Dimych'},
	{id: 2, name: 'Andrey'},
	{id: 3, name: 'Sveta'},
	{id: 4, name: 'Sasha'},
	{id: 5, name: 'Viktor'},
	{id: 6, name: 'Valera'},
]

let messagesData = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'Hia'},
]
const Dialogs = () => {
	return (
		<div className={style.dialogs}>
			<div className={style.items}>

				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[2].id}/>
				<DialogItem name="Sveta" id="3"/>
				<DialogItem name="Sasha" id="4"/>
				<DialogItem name="Viktor" id="5"/>
				<DialogItem name="Valera" id="6"/>

			</div>
			<div className={style.messages}>
				<Message message={messagesData[0].message}/>
				<Message message={messagesData[1].message}/>
				<Message message={messagesData[2].message}/>
			</div>
		</div>
	)
}

export default Dialogs;
