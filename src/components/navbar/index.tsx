// React
import { FC } from "react";
// Next
import Image from "next/image";
// Types
import { IChatData } from "interfaces";
// Components
import ChatItem from "./chat-item";
// Styles
import "./styles.scss";

interface INavbar {
	chatData: IChatData[];
}
/** wip */
const makeBriefMsg = (messages: Array<any>) => {
	const messagesLength = messages.length;
	const lastMessage = messages[messagesLength];
	// cortar el msj por X caracteres
	const briefMessage = lastMessage;

	return "El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo...";
};

const Navbar: FC<INavbar> = ({ chatData }) => {
	return (
		<div className="navbar">
			<div className="navbar__header">
				<Image src="/images/logo.svg" alt="logo" height={100} width={100} />
				<h1 className="navbar__title">React Chat</h1>
			</div>
			<div className="navbar__chats">
				{chatData.map(({ name, messages, avatar }, i) => {
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
				<strong>+&nbsp;</strong>Create New
			</div>
		</div>
	);
};

export default Navbar;
