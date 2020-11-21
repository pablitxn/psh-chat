// React
import { FC } from "react";
// Layouts
import PshChatLayout from "layouts/psh-chat";
// Utils
import { mockData } from "utils";

const Home: FC = () => {
	return <PshChatLayout chatData={mockData} />;
};

export default Home;
