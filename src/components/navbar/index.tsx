// React
import { FC, useEffect, useState } from "react";
// Next
import Image from "next/image";
// Types
import { IChatData } from "interfaces";
// Components
import ChatItem from "./chat-item";
// Utils
import { orderByLastMessage } from "utils";
// Styles
import "./styles.scss";

interface INavbar {
	chatData: IChatData[];
	handleChatSelected: (chatSelected: string) => void;
	handleNavbar: () => void;
}

const Navbar: FC<INavbar> = ({
	chatData,
	handleChatSelected,
	handleNavbar
}) => {
	/** Definitins */
	const [state, setState] = useState(chatData);

	/** Effects */
	useEffect(() => {
		const orderChatData = orderByLastMessage(chatData);
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
						const lastMessage = messages[messages.length - 1].msg;
						const hourLastMessage = messages[messages.length - 1].date;
						return (
							<ChatItem
								username={name}
								briefMessage={lastMessage}
								hourLastMessage={hourLastMessage}
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
