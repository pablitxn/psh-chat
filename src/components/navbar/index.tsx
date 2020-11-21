// React
import { FC } from "react";
// Types
import { IChatData } from "interfaces";
// Components
import ChatItem from "./chat-item";
// Utils
import { calculatePeriod, mockData } from "utils";
// Styles
import "./styles.scss";

interface INavbar {
	chatData: IChatData;
}

const Navbar: FC<INavbar> = ({ chatData }) => {
	const makeBriefMsg = (messages: Array<any>) => {
		const messagesLength = messages.length;
		const lastMessage = messages[messagesLength];
		// cortar el msj por X caracteres
		const briefMessage = lastMessage;

		return briefMessage;
	};

	return (
		<div className="navbar">
			<div className="navbar__header">
				<img src="logo" />
				<h1>React Chat</h1>
			</div>
			<div className="navbar__chats">
				{mockData.map(({ name, messages, avatar }, i) => {
					const briefMessage = makeBriefMsg(messages);
					return (
						<ChatItem
							username={name}
							briefMessage={briefMessage}
							avatar={avatar}
							key={i}
						/>
					);
				})}
			</div>
			<div className="navbar__action-btn">
				<button>+ create new </button>
			</div>
		</div>
	);
};

export default Navbar;
