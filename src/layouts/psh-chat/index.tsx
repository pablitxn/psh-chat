// React
import { FC } from "react";
// Types
import { IChatData } from "interfaces";
// Components
import Navbar from "components/navbar";
import Chat from "components/chat";
// Styles
import "./styles.scss";

interface IPshChatLayout {
	chatData: IChatData[];
}

const PshChatLayout: FC<IPshChatLayout> = ({ chatData }) => {
	const chatSelected = chatData[1];

	return (
		<div className="psh-layout">
			<div className="psh-layout__navbar">
				<Navbar chatData={chatData} />
			</div>
			<div className="psh-layout__chat">
				<Chat chatSelected={chatSelected} />
			</div>
		</div>
	);
};

export default PshChatLayout;
