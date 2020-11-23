// Types
import { IChatData } from "interfaces";
// Utils
import { DEFAULT_LANGUAGE } from "utils";

/** Definitions */
const UNITS_IN_MILLISECONDS = {
	day: 86400000,
	hour: 3600000,
	minute: 60000,
	second: 1000
};

/** Formatters */
export const dateFormat = (timestamp: Date): string => {
	if (process.browser) {
		const date = new Date(timestamp);
		const language = navigator.language || DEFAULT_LANGUAGE;
		const options = {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric"
		};

		return new Intl.DateTimeFormat(language, options).format(date);
	}
};

/** Utils */
export const setPeriod = (hour: number, minute: number): string => {
	if (process.browser) {
		const now = Date.now();
		const language = navigator.language || DEFAULT_LANGUAGE;

		const hoursFormatted = hour * UNITS_IN_MILLISECONDS.hour;
		const minutesFormatted = minute * UNITS_IN_MILLISECONDS.minute;
		const period = now + hoursFormatted - minutesFormatted;

		const options = {
			hour: "numeric",
			minute: "numeric",
			hour12: true
		};

		return new Intl.DateTimeFormat(language, options).format(period);
	}
};

export const orderByLastMessage = (chatData: IChatData[]) => {
	const messagesOrdered = chatData.sort(({ messages: a }, { messages: b }) => {
		const lastMessageA = a[a.length - 1].date.slice(2, 4);
		const lastMessageB = b[b.length - 1].date.slice(2, 4);

		// @ts-ignore
		return lastMessageB - lastMessageA;
	});

	return messagesOrdered;
};
