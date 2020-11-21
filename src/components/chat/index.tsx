// React
import { FC } from "react";
// Types
import { IChatData } from "interfaces";
// Components
import Message from "./message";
// Styles
import "./styles.scss";

interface IChat {
	chatSelected: IChatData;
}

const Chat: FC<IChat> = ({ chatSelected }) => {
	const { name, info, avatar, messages } = chatSelected;

	return (
		<div className="chat">
			<div className="chat__header">
				<img src={avatar} />
				<h2>{name}</h2>
				<h3>{info}</h3>
			</div>
			<div className="chat__body">
				{messages.map((message, i) => (
					<Message message={message} avatar={avatar} key={i} />
				))}
			</div>
			<div className="chat__input-section">
				<input
					type="text"
					placeholder="type your message"
					className="chat__input"
				/>
				<button className="chat__send-btn">send</button>
			</div>
		</div>
	);
};

export default Chat;
