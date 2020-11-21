// React
import { FC } from "react";
// Styles
import "./styles.scss";

interface IChatItem {
	username: string;
	briefMessage: string;
	avatar: string;
}

const ChatItem: FC<IChatItem> = ({ username, briefMessage, avatar }) => {
	return (
		<div className="chat-item">
			<div className="chat-item__avatar">
				<img src={avatar} />
			</div>
			<div className="chat-item__content">
				<h3 className="chat-item__user-name">{username}</h3>
				<p className="chat-item__brief-msg">{briefMessage}</p>
			</div>
			<small className="chat-item__hour">10:20 AM</small>
		</div>
	);
};

export default ChatItem;
