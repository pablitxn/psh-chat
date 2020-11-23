// React
import { FC } from "react";
// Styles
import "./styles.scss";

interface IChatItem {
	username: string;
	briefMessage: string;
	hourLastMessage: string;
	handleChatSelected: (chatSelected: string) => void;
	avatar: string;
	handleNavbar: () => void;
}

const ChatItem: FC<IChatItem> = ({
	username,
	briefMessage,
	hourLastMessage,
	avatar,
	handleChatSelected,
	handleNavbar
}) => {
	/** Definitions */
	// TODO: mejorar esto
	const Avatar = avatar;

	/** Handlers */
	const handleClick = () => {
		handleChatSelected(username);
		handleNavbar();
	};

	return (
		<div className="chat-item" onClick={handleClick}>
			<div className="chat-item__avatar">
				<img src={avatar} alt="avatar" />
			</div>
			<div className="chat-item__content">
				<h3 className="chat-item__user-name">{username}</h3>
				<p className="chat-item__brief-msg">{briefMessage}</p>
			</div>
			<small className="chat-item__hour">{hourLastMessage}</small>
		</div>
	);
};

export default ChatItem;
