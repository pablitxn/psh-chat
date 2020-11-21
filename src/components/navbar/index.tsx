// React
import { FC } from "react";
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
				<img
					src="https://ucdca26c9736041506674fc87341.previews.dropboxusercontent.com/p/orig/AA-9jNbxiLMnHTrird8t4lwy19M-Y7HTg88e2ka__Onm7ovMgHLhQjszdEA5qNxW4XSPFIqPh-AkTIZ9vA2YdBk3QZOsHYIpGl2TSq081REaEF9eBgGP8Bfh1mcXEdzBFrOIHwuA3itqrzVLCBmnKVrDX4oZlOHFmHE5mfX69sQFFcaqOk5FzkqiGjBD_NAWIwF0OXEtCBj1HragJGsWc1A7kEHKtdUeiKu1H3Ix7myeWzjv0nTvpE3HtsJW3eSI_KLD675lEghGYe06NT4ZBpG0bsWgnVk-UfDeJpgCpODzoS2hGdgLK2pZJX5h4onOgKP60HDOTk2Ukv0OlXW23AxW7p971j6VfX4VFwrgM37f8A/p.svg?fv_content=true&size_mode=5"
					className="navbar__logo"
					alt="logo"
				/>
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
