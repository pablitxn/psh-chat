// Types
import { IChatData } from "interfaces";

export const calculatePeriod = (days: number) => {
	const today = new Date();
	const aWeekInMilliSeconds = 1000 * 60 * 60 * 24 * days;
	const aWeekLess = today.getTime() - aWeekInMilliSeconds;

	const periord = new Date(aWeekLess);

	return periord;
};

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
		avatar:
			"https://uc9641f3d9f0d729e6bb2ed3c231.previews.dropboxusercontent.com/p/thumb/AA9rGKOpBj5qIqpQKtIIT2OJ9VTSxKgVJ60rD5oqSIi9RcccLq5OcNNJ3gpBNQLAHjm--b6NZl96RLugi_LfqW20bpm0uYgyRZvwgkAOvOMOI6rs5JyEpXbwxBR1epFq4-ooupGXG0TNT3LAYOJWWGl6WDSTHhqmd3xPg9GI3E2CZT5AoA1WJg8nweXbQ_M2MIkGhMqbVN8vfiaI-m7b3EDoqiFPjlCJ77skRr3LwJBM1COThkTTcIKRod_yYE-1c5go2L63WgMznAyO5thUKx9GfoSVY6hMP06UofwguSr4y8zFmjssjPrOJbnzxuaA23w2ews0mAQHmdtmnj_SkkWPHQxOtDhLZUP_GpvAaGVJHA/p.png?fv_content=true&size_mode=5"
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
		avatar:
			"https://ucbe69ddf4276ac83d1b8e074f1e.previews.dropboxusercontent.com/p/thumb/AA-dd9fBPw6CqIacQypaGt5v4Xt8EWDeHRrGQjyQO5yCPNdJiT3N0uWLSxIZ_2oA3dH28l0xoyTjcMEhWoLKx-rFx8IsEtbROKAMJJYt0GvEdAFnK21pL7SQK_X0a00k19oAk0XvEFw-26fQg8PLlVdQ9E8vPxeboqagxpEm0dW4AozJ-fN4gFIFFj6juVzz_uwI932Yxud8tCSYCjAJqc7XEpRZc2OywiehDe4Vi23PQJNvMrdXeicdRBv2ER2QibVtqbFvHT1HOCL3jN_0tRIHubGUyVGDHJtl_nb919Vryq_POY0pV5YUnfTsTYzuQ5TbAYVqD0B0ifUAEpeKsWNQTCHaZHdOccQd5zJcsj1wJg/p.png?fv_content=true&size_mode=5"
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
		avatar:
			"https://uc5b558f721979e73ffe1a0f87a9.previews.dropboxusercontent.com/p/thumb/AA_x4EZYmgHL7adLITiFKOuiRp5y6g0Fj2xKIWmyChLRJdlYLTCyqCla11PT3zZVOwMj1ifki4_sqkAZOzUi7fWp9WuSEvfg3Bdx43iKsY7XnBomwP1pFBN_xvVB5h11meyTFGlQj3gMzYnavjpnSEcJW1fmEuUx7Vtiqes7rz4byZxQilnKDP2ybEYYVHg77SlaH-JL329tJrjl6e0MgtqtB_-v1iDh3ioxFfQBEGeUiMNTOX1uAQSDNn-A3bZ94xeJxNeVG3KIVxJ2FpqjeRnFtmWhI1wZb-9F9jV-wNzhMGsK-PSRyiPstegW-Y4G1rjE29kn68o3QLoXB0KGLfk7vrqpKiX5nBmw_OULHsAgqQ/p.png?fv_content=true&size_mode=5"
	}
];

export const myInfo = {
	name: "John",
	avatar:
		"https://uc24c2c1f097ba3e5b16ce4da502.previews.dropboxusercontent.com/p/thumb/AA9ZMQZdBjupVmAF0t2EYva9BMibhpdqbYdMDSoZ1n6fjm39hMM5ub32LOrUJ9IN64BpWddwnb8haztmZLbndFk-7AoubawjRpxlNokgskBO8kOOHzb7XgiLZFccyjAiXPWBKPRrTzLunzv_XKcK5lfQsn_jGR_5TQKjFCN9NqVYttE28wqlF-nEUP6iSnAsQ9MZit36Cwmj6r4dIHpfgBej66ify9dmaChabn6rNRYlcDtVC41ntQOrLVRhYL_7Dnbhbc2raNYZiKyytD5XjJrmfRT4xX9yoM0pq04sNZnUI_iATFa8v78IifVDomY_x9xX6KKsr7iWuyKpL_FjgqowvN8SYrHng6SfIYV8yJh6QQ/p.png?fv_content=true&size_mode=5"
};
