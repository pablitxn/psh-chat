// @ts-nocheck
// React
import { useEffect, useState } from "react";
// Utils
import { DEFAULT_LANGUAGE } from "utils";

const getDateDiffs = (timestamp: Date) => {
	const DATE_UNITS = [
		["day", 86400],
		["hour", 3600],
		["minute", 60],
		["second", 1]
	];
	const now = Date.now();
	const elapsed = (timestamp - now) / 1000;

	for (const [unit, secondsInUnit] of DATE_UNITS) {
		if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
			const value = Math.round(elapsed / secondsInUnit);
			return { value, unit };
		}
	}
};

export const useTimeAgo = (timestamp: Date) => {
	const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));
	const language = navigator.language || DEFAULT_LANGUAGE;

	useEffect(() => {
		const interval = setInterval(() => {
			const newTimeAgo = getDateDiffs(timestamp);
			setTimeago(newTimeAgo);
		}, 5000);

		return () => clearInterval(interval);
	}, [timestamp]);

	const rtf = new Intl.RelativeTimeFormat(language, { style: "long" });

	const { value, unit } = timeago;

	return rtf.format(value, unit);
};
