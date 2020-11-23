export type Message = {
	user: string;
	msg: string;
	date: string;
};

export interface IChatData {
	name: string;
	info: string;
	messages: Message[];
	avatar: string;
}
