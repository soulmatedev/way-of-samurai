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
const Dialogs = () => {
	return (
		<div className={style.dialogs}>
			<div className={style.items}>

				<DialogItem name="Dimych" id="1" />
				<DialogItem name="Andrey" id="2" />
				<DialogItem name="Sveta" id="3" />
				<DialogItem name="Sasha" id="4" />
				<DialogItem name="Viktor" id="5" />
				<DialogItem name="Valera" id="6" />

			</div>
			<div className={style.messages}>
				<Message message="Hi" />
				<Message message="How are you?" />
				<Message message="Hia" />
			</div>
		</div>
	)
}

export default Dialogs;
