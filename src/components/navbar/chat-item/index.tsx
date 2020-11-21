// React
import { FC } from "react";

interface IChatItem {
	username: string;
	briefMessage: string;
	avatar: string;
}

const ChatItem: FC<IChatItem> = ({ username, briefMessage, avatar }) => {
	return (
		<div>
			<div>
				<img src={avatar} />
			</div>
			<div>
				<h3>{username}</h3>
				<p>{briefMessage}</p>
			</div>
		</div>
	);
};

export default ChatItem;
