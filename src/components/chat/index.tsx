// React
import { FC, useState, FormEvent } from "react";
// Types
import { IChatData, Message as IMessage } from "interfaces";
// Components
import Message from "./message";
// Utils
import ScrollToBottom from "react-scroll-to-bottom";
// Styles
import "./styles.scss";

interface IChat {
	chatSelected: IChatData;
	handleSendMessage: (message: IMessage) => void;
}

const Chat: FC<IChat> = ({ chatSelected, handleSendMessage }) => {
	/** Definitions */
	const [inputValue, setInputValue] = useState("");
	const { name, info, avatar, messages } = chatSelected;

	/** Handlers */
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		handleSendMessage({
			msg: inputValue,
			user: "me",
			date: new Date()
		});
		setInputValue("");
	};

	const handleChange = ({ target: { value: inputValue } }) => {
		setInputValue(inputValue);
	};

	return (
		<div className="chat">
			<div className="chat__header">
				<img src={avatar} alt="avatar" />
				<div className="chat__header--name">
					<h2>{name}</h2>
					<h3>{info}</h3>
				</div>
			</div>
			<ScrollToBottom className="chat__body">
				{messages.map((message, i) => (
					<Message message={message} avatar={avatar} key={i} />
				))}
			</ScrollToBottom>
			<form
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
				className="chat__input-area"
			>
				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
					placeholder="Type your message..."
				/>
				<button onClick={handleSubmit}>SEND</button>
			</form>
		</div>
	);
};

export default Chat;
