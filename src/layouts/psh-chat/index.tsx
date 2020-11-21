// React
import { FC } from "react";
// Types
import { IChatData } from "interfaces";
// Components
import Navbar from "components/navbar";
// Styles
import "./styles.scss";

interface IPshChatLayout {
	chatData: IChatData;
}

const PshChatLayout: FC<IPshChatLayout> = ({ chatData }) => {
	return (
		<div className="psh-layout">
			<Navbar chatData={chatData} />
			<div
				style={{
					backgroundColor: "aquamarine",
					width: "100%",
					height: "100%"
				}}
			/>
		</div>
	);
};

export default PshChatLayout;
