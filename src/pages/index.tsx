// React
import { FC } from "react";
// Next
import Head from "next/head";
// Layouts
import PshChatLayout from "layouts/psh-chat";
// Utils
import { mockData } from "utils";

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>PSH - React Chat</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<PshChatLayout chatData={mockData} />
		</>
	);
};

export default Home;
