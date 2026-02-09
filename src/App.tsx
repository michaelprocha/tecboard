import AddIcon from "./assets/icons/add_circle.svg?react";
import Button from "./components/Button";
import Card from "./components/Card";
import InputDate from "./components/InputDate";
import InputText from "./components/InputText";
import Select from "./components/Select";
import Tag from "./components/Tag";
import Text from "./components/Text";
import imgCard from "./assets/images/Imagem1.png";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
	return (
		<>
			<Text as="h1">Texto</Text>
			<Button size={"md"} icon={AddIcon} variant={"primary"}>
				Adicionar evento
			</Button>
			<InputText id={"1"} name={"nome"} placeholder={"teste"} />
			<Tag>FRONT-END</Tag>
			<Select options={["carro", "moto", "barco"]} />
			<InputDate id={"2"} name={"nome2"} />
			<Card img={imgCard} tag={"Front-end"} date={"1997-01-14"} title="Mulheres no Front">
				Valorizando e impulsionando a participação feminina no desenvolvimento front-end.
			</Card>
			<Footer/>
			<Form />
			<Header/>
			<Hero/>
		</>
	);
}

export default App;
