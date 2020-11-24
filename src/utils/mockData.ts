// Types
import { IChatData } from "interfaces";
// Utils
import { setPeriod } from "utils";

/** Mock Data */
export const mockData: IChatData[] = [
	{
		name: "Luciana Gutierrez",
		info: "Fullstack Developer",
		messages: [
			{
				user: "me",
				msg: "Hola Luciana, pudieron comprar los afiches?",
				date: setPeriod(0, 10, 0)
			},
			{
				user: "luciana",
				msg: "Si tengo alguna otra novedad te comento. Gracias!",
				date: setPeriod(0, 0, 0)
			}
		],
		avatar: "https://i.ibb.co/F3S9mcd/avatar-2.png"
	},
	{
		name: "Micaela Alvarez",
		info: "Marketing Manager",
		messages: [
			{
				user: "micaela",
				msg: "Hola John! Entre qué horarios podrías hoy tener la meeting?",
				date: setPeriod(0, 55, 0)
			},
			{
				user: "me",
				msg: "Hola Micaela! Muy bien. Yo puedo de 10 a 17hs",
				date: setPeriod(0, 45, 0)
			},
			{
				user: "micaela",
				msg: "Dale, agendé la meeting para hoy a las 14hs",
				date: setPeriod(0, 35, 0)
			}
		],
		avatar: "https://i.ibb.co/xhpVqxv/avatar-1.png"
	},
	{
		name: "Manuel Hoffmann",
		info: "Frontend Developer",
		messages: [
			{
				user: "manuel",
				msg: "Hola John! Le escribiste a Luciana por los afiches?",
				date: setPeriod(0, 70, 0)
			},
			{
				user: "me",
				msg:
					"Manu, aún no, hoy le escribo por la tarde. Gracias por recordarmelo!",
				date: setPeriod(0, 65, 0)
			},
			{
				user: "manuel",
				msg: "Gracias a vos!",
				date: setPeriod(0, 60, 0)
			}
		],
		avatar: "https://i.ibb.co/mFtDbSR/avatar-3.png"
	}
];

export const myInfo = {
	name: "John",
	avatar: "https://i.ibb.co/gDd71Hp/avatar-4.png"
};
