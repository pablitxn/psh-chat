// React
import { FC, useState, useEffect } from "react";
// Next
import Head from "next/head";
// Layouts
import PshChatLayout from "layouts/psh-chat";
// Utils
import { mockData } from "utils";
// Types
import { IChatData, Message } from "interfaces";

const Home: FC = () => {
	/** Definitions */
	const [state, setState] = useState({
		chatData: mockData,
		contentChatSelected: mockData[0],
		chatSelected: ""
	});
	const { contentChatSelected, chatSelected, chatData } = state;

	/** Handlers */
	const handleChatSelected = (chatSelected: string) => {
		setState((prev) => ({
			...prev,
			chatSelected: chatSelected
		}));
	};

	const handleMessages = (newMessage: Message) => {
		if (newMessage.msg !== "") {
			setState((prev) => ({
				...prev,
				contentChatSelected: {
					...prev.contentChatSelected,
					messages: [...prev.contentChatSelected.messages, newMessage]
				}
			}));
		}
	};

	/** Effects */
	useEffect(() => {
		if (chatSelected !== "") {
			const [chatContent] = chatData.filter(
				(chat) => chat.name === state.chatSelected
			);
			setState((prev) => ({
				...prev,
				contentChatSelected: chatContent
			}));
		}
	}, [chatSelected]);

	useEffect(() => {
		// Filter old message data
		const newChatData = chatData.filter(
			(chat) => chat.name !== contentChatSelected.name
		);
		// Push new message data
		newChatData.push(contentChatSelected);
		setState((prev) => ({
			...prev,
			chatData: newChatData
		}));
	}, [contentChatSelected]);

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

			<PshChatLayout
				chatData={chatData}
				handleChatSelected={handleChatSelected}
				handleMessages={handleMessages}
				contentChatSelected={contentChatSelected}
			/>
		</>
	);
};

export default Home;
