export type Message = {
	user: string;
	msg: string;
	date: Date;
};

export interface IChatData {
	name: string;
	info: string;
	messages: Message[];
	avatar: any;
}
