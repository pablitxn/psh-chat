// React
import { FC, useState } from "react";
// Types
import { IChatData, Message } from "interfaces";
// Components
import Navbar from "components/navbar";
import Chat from "components/chat";
// Styles
import "./styles.scss";

interface IPshChatLayout {
	chatData: IChatData[];
	contentChatSelected: IChatData;
	handleChatSelected: (chatSelected: string) => void;
	handleMessages: (newMessage: Message) => void;
}

const PshChatLayout: FC<IPshChatLayout> = ({
	chatData,
	handleChatSelected,
	handleMessages,
	contentChatSelected
}) => {
	/** Definitions */
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const styleNavbar = !isNavbarOpen ? "psh-layout__navbar--hidden" : "";

	/** Handlers */
	const handleNavbar = () => setIsNavbarOpen((prev) => !prev);

	return (
		<div className="psh-layout">
			<button className="psh-layout__action" onClick={handleNavbar}>
				☰
			</button>
			<div className={`psh-layout__navbar ${styleNavbar}`}>
				<Navbar
					chatData={chatData}
					handleChatSelected={handleChatSelected}
					handleNavbar={handleNavbar}
					chatSelected={contentChatSelected.name}
				/>
			</div>
			<div className="psh-layout__chat">
				<Chat
					handleSendMessage={handleMessages}
					chatSelected={contentChatSelected}
				/>
			</div>
		</div>
	);
};

export default PshChatLayout;
