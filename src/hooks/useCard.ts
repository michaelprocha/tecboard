import type { ImgHTMLAttributes } from "react";
import imgCard1 from "../assets/images/Imagem1.png";
import imgCard2 from "../assets/images/Imagem 2.png";
import imgCard3 from "../assets/images/Imagem 3.png";
import imgCard4 from "../assets/images/Imagem 4.png";
import imgCard5 from "../assets/images/Imagem 5.png";
import imgCard6 from "../assets/images/Imagem 6.png";
import imgCard7 from "../assets/images/Imagem 7.png";
import imgCard8 from "../assets/images/Imagem 8.png";
import imgCard9 from "../assets/images/Imagem 9.png";
import imgCard10 from "../assets/images/Imagem 10.png";
import imgCard11 from "../assets/images/Imagem 11.png";
import imgCard12 from "../assets/images/Imagem 12.png";
import imgCard13 from "../assets/images/Imagem 13.png";
import imgCard14 from "../assets/images/Imagem 14.png";
import imgCard15 from "../assets/images/Imagem 15.png";

export interface Card {
	tag: string;
	date: string;
	title: string;
	text: string;
	img: ImgHTMLAttributes<HTMLImageElement>["src"];
}

const cards: Array<Array<Card>> = [
	[
		{
			tag: "FRONT-END",
			date: "2025/05/20",
			title: "Mulheres no Front",
			text: "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
			img: imgCard1,
		},
		{
			tag: "FRONT-END",
			date: "2025/05/20",
			title: "Pixel & Code",
			text: "Meetup unindo design e desenvolvimento front-end para explorar tendências em UI.",
			img: imgCard2,
		},
	],
	[
		{
			tag: "BACK-END",
			date: "2025/05/20",
			title: "Back-End Masters",
			text: "Performance e inovação no back-end, conectando especialistas e entusiastas.",
			img: imgCard3,
		},
		{
			tag: "BACK-END",
			date: "2025/05/20",
			title: "Code to Core",
			text: "Workshop que explora a essência do back-end, escalabilidade e boas práticas.",
			img: imgCard4,
		},
		{
			tag: "BACK-END",
			date: "2025/05/20",
			title: "Server Side Summit",
			text: "Evento dedicado a tecnologias e estratégias para desenvolvimento back-end.",
			img: imgCard5,
		},
	],
	[
		{
			tag: "DEVOPS",
			date: "2025/05/20",
			title: "DevOps Evolution",
			text: "Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações.",
			img: imgCard6,
		},
	],
	[
		{
			tag: "INTELIGÊNCIA ARTIFICIAL",
			date: "2025/05/20",
			title: "Deep Learning Days",
			text: "Imersão sobre IA, redes neurais e aprendizado profundo.",
			img: imgCard7,
		},
		{
			tag: "INTELIGÊNCIA ARTIFICIAL",
			date: "2025/05/20",
			title: "IA na palma da mão",
			text: "Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis.",
			img: imgCard8,
		},
		{
			tag: "INTELIGÊNCIA ARTIFICIAL",
			date: "2025/05/20",
			title: "IA Segura e Acessível",
			text: "Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial.",
			img: imgCard9,
		},
	],
	[
		{
			tag: "DATA SCIENCE",
			date: "2025/05/20",
			title: "Data Pulse",
			text: "Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados.",
			img: imgCard10,
		},
		{
			tag: "DATA SCIENCE",
			date: "2025/05/20",
			title: "Data Revolution",
			text: "Palestra sobre últimas tendências em big data, análise e inteligência empresarial.",
			img: imgCard11,
		},
		{
			tag: "DATA SCIENCE",
			date: "2025/05/20",
			title: "Driven by Data",
			text: "Minicurso sobre como dados impulsionam decisões e inovações para o futuro.",
			img: imgCard12,
		},
		{
			tag: "DATA SCIENCE",
			date: "2025/05/20",
			title: "SQL Summit",
			text: "Ciclo de palestras com especialistas do universo dos bancos de dados SQL.",
			img: imgCard13,
		},
		{
			tag: "DATA SCIENCE",
			date: "2025/05/20",
			title: "SkyTech Summit",
			text: "Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura.",
			img: imgCard14,
		},
		{
			tag: "DATA SCIENCE",
			date: "2025/05/20",
			title: "Mundo Cloud",
			text: "Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud.",
			img: imgCard15,
		},
	],
];

const useCard = () => {
	return { cards };
};

export { useCard };
