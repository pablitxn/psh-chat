// React
import { Message as MessageTypes } from "interfaces";
import { FC } from "react";

interface IMessage {
	message: MessageTypes;
	avatar: string;
}

const Message: FC<IMessage> = ({ message, avatar }) => {
	const { user, msg, date } = message;

	const styleMessage = user === "me" ? "message--right" : "message--left";

	return (
		<div className={`message ${styleMessage}`}>
			<span>{date.toDateString}</span>
			<div className="message__content">
				<img className="message__avatar" src={avatar} />
				<p className="message__text">{msg}</p>
			</div>
		</div>
	);
};

export default Message;
