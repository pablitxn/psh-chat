// React
import { FC, useState } from "react";
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
	/** Definitions */
	const [state, setState] = useState(false);
	const chatSelected = chatData[1];
	const styleNavbar = state ? "psh-layout__navbar--hidden" : "";

	/** Handlers */
	const handleNavbar = () => setState((prev) => !prev);

	return (
		<div className="psh-layout">
			<button className="psh-layout__action" onClick={handleNavbar}>
				☰
			</button>
			<div className={`psh-layout__navbar ${styleNavbar}`}>
				<Navbar chatData={chatData} />
			</div>
			<div className="psh-layout__chat">
				<Chat chatSelected={chatSelected} />
			</div>
		</div>
	);
};

export default PshChatLayout;
