// React
import { FC } from "react";
// Types
import { Message as MessageTypes } from "interfaces";
// Styles
import "./styles.scss";
// Utils
import { myInfo } from "utils";

interface IMessage {
	message: MessageTypes;
	avatar: string;
}

const Message: FC<IMessage> = ({ message, avatar }) => {
	const { user, msg, date } = message;

	const styleMessage = user === "me" ? "message--right" : "message--left";

	return (
		<div className={`message ${styleMessage}`}>
			<div className="message__content">
				{user === "me" ? (
					<>
						<div className="message__text">
							<small>9:45 AM</small>
							<p>{msg}</p>
						</div>
						<div className="message__avatar">
							<img src={myInfo.avatar} alt="avatar" />
						</div>
					</>
				) : (
					<>
						<div className="message__avatar">
							<img src={avatar} alt="avatar" />
						</div>
						<div className="message__text">
							<small>9:45 AM</small>
							<p>{msg}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Message;
