import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(dialog =>
		<DialogItem name={dialog.name} id={dialog.id} />
	);

	let messagesElements = props.state.messages.map(message =>
		<Message message={message.message} />
	);

	let newMessageElement = React.createRef();

	let sendMessage = () => {
		let text = newMessageElement.current.value;
		alert(text)
	}

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
					<textarea ref={newMessageElement}></textarea>
				</div>
				<div>
					<button onClick={sendMessage}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
