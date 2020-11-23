// Types
import { IChatData } from "interfaces";

/** Definitions */
const UNITS_IN_MILLISECONDS = {
	day: 86400000,
	hour: 3600000,
	minute: 60000,
	second: 1000
};

/** Utils */

export const setPeriod = (hour: number, minute: number, second: number) => {
	if (process.browser) {
		const now = new Date().getTime();

		const hoursFormatted = hour * UNITS_IN_MILLISECONDS.hour;
		const minutesFormatted = minute * UNITS_IN_MILLISECONDS.minute;
		const secondsFormatted = second * UNITS_IN_MILLISECONDS.second;

		const period = new Date(
			now + hoursFormatted - minutesFormatted - secondsFormatted
		);

		const hh = period.getHours();
		const hours = hh > 12 ? hh - 12 : hh;
		const min = period.getMinutes();
		const minutes = min < 10 ? `0${min}` : min;
		const descrip = hh < 12 ? "AM" : "PM";

		return {
			full: period,
			brief: `${hours}:${minutes} ${descrip}`
		};
	}
};

export const orderByLastMessage = (chatData: IChatData[]) => {
	const messagesOrdered = chatData.sort(({ messages: a }, { messages: b }) => {
		const lastMessageA = a[a.length - 1].date.full;
		const lastMessageB = b[b.length - 1].date.full;

		// @ts-ignore
		return lastMessageB - lastMessageA;
	});

	console.log(messagesOrdered);
	return messagesOrdered;
};
