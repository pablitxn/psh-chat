export type Message = {
	user: string;
	msg: string;
	date: {
		full: Date;
		brief: string;
	};
};

export interface IChatData {
	name: string;
	info: string;
	messages: Message[];
	avatar: string;
}
