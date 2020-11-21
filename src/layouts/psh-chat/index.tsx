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
			<Navbar chatData={chatData} />
			<Chat chatSelected={chatSelected} />
		</div>
	);
};

export default PshChatLayout;
