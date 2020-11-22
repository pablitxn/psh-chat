// React
import { FC, useEffect, useState } from "react";
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
	handleChatSelected: (chatSelected: string) => void;
	handleNavbar: () => void;
}
/** TODO: wip */
const makeBriefMsg = (messages: Array<any>) => {
	const messagesLength = messages.length;
	const lastMessage = messages[messagesLength];
	// cortar el msj por X caracteres
	const briefMessage = lastMessage;

	return "El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo...";
};

const Navbar: FC<INavbar> = ({
	chatData,
	handleChatSelected,
	handleNavbar
}) => {
	/** Definitins */
	const [state, setState] = useState(chatData);

	/** Effects */
	useEffect(() => {
		const orderChatData = chatData.sort(({ messages: a }, { messages: b }) => {
			// @ts-ignore
			return b[b.length - 1].date - a[a.length - 1].date;
		});
		setState(orderChatData);
	}, [chatData]);

	return (
		<nav className="navbar">
			<div className="navbar__header">
				<Image src="/images/logo.svg" alt="logo" height={100} width={100} />
				<h1 className="navbar__title">React Chat</h1>
			</div>
			<div className="body">
				<div className="navbar__chats">
					{state.map(({ name, messages, avatar }, i) => {
						const briefMessage = makeBriefMsg(messages);
						return (
							<ChatItem
								username={name}
								briefMessage={briefMessage}
								avatar={avatar}
								handleChatSelected={handleChatSelected}
								handleNavbar={handleNavbar}
								key={i}
							/>
						);
					})}
				</div>
				<div className="navbar__action-btn">
					<strong>+&nbsp;</strong>Create New
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
