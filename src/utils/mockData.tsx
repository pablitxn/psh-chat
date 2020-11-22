// Types
import { IChatData } from "interfaces";

/** Utils */
const calculatePeriod = (days: number) => {
	const today = new Date();
	const aWeekInMilliSeconds = 1000 * 60 * 60 * 24 * days;
	const aWeekLess = today.getTime() - aWeekInMilliSeconds;

	const periord = new Date(aWeekLess);

	return periord;
};

/** Mock Data */
export const mockData: IChatData[] = [
	{
		name: "Luciana Gutierrez",
		info: "Fullstack Developer",
		messages: [
			{
				user: "luciana",
				msg: "Si tengo alguna otra novedad te comento. Gracias!",
				date: calculatePeriod(1)
			},
			{
				user: "me",
				msg: "Hola Luciana, pudieron comprar los afiches?",
				date: calculatePeriod(1)
			}
		],
		avatar: "https://i.ibb.co/xhpVqxv/avatar-1.png"
	},
	{
		name: "Micaela Alvarez",
		info: "Marketing Manager",
		messages: [
			{
				user: "micaela",
				msg: "Hola John! Entre qué horarios podrías hoy tener la meeting?",
				date: calculatePeriod(1)
			},
			{
				user: "me",
				msg: "Hola Micaela! Muy bien. Yo puedo de 10 a 17hs",
				date: calculatePeriod(1)
			},
			{
				user: "micaela",
				msg: "Dale, agendé la meeting para hoy a las 14hs",
				date: calculatePeriod(1)
			}
		],
		avatar: "https://i.ibb.co/F3S9mcd/avatar-2.png"
	},
	{
		name: "Manuel Hoffmann",
		info: "Frontend Developer",
		messages: [
			{
				user: "manuel",
				msg: "Hola John! Le escribiste a Luciana por los afiches?",
				date: calculatePeriod(1)
			},
			{
				user: "me",
				msg:
					"Manu, aún no, hoy le escribo por la tarde. Gracias por recordarmelo!",
				date: calculatePeriod(1)
			},
			{
				user: "manuel",
				msg: "Gracias a vos!",
				date: calculatePeriod(1)
			}
		],
		avatar: "https://i.ibb.co/mFtDbSR/avatar-3.png"
	}
];

export const myInfo = {
	name: "John",
	avatar: "https://i.ibb.co/gDd71Hp/avatar-4.png"
};
