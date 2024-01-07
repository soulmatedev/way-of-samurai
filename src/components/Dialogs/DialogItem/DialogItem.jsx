import React from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	const DIALOG_PATH = `/dialogs/${props.id}`;

	return <div className={style.dialog}>
		<NavLink to={DIALOG_PATH}>{props.name}</NavLink>
	</div>
};

export default DialogItem;
