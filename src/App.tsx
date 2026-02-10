import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useCard } from "./hooks/useCard";
import Text from "./components/Text";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
	const { cards } = useCard();

	return (
		<>
			<Header />
			<main>
				<Hero>Seu hub de eventos de tecnologia</Hero>
				<section className="flex justify-center items-center py-15 bg-dark-green">
					<Form />
				</section>
				<section className="bg-dark-green flex items-center justify-center py-15">
					<ol className="max-w-300 flex flex-col gap-16 sm:pl-8">
						{cards.map((arrCard, arrICard) => (
							<li key={`category-${arrICard}-${arrCard[0].tag}`}>
								<Text as="h3" className="text-white text-body-md uppercase pb-8">
									{arrCard[0].tag}
								</Text>
								<ol className="flex flex-col gap-6 flex-wrap sm:flex-row">
									{arrCard.map((card, iCard) => {
										const { tag, date, title, text, img } = card;
										return (
											<li key={`card-${iCard}-${tag}`}>
												<Card img={img} tag={tag} date={date} title={title}>
													{text}
												</Card>
											</li>
										);
									})}
								</ol>
							</li>
						))}
					</ol>
				</section>
			</main>
			<Footer/>
		</>
	);
}

export default App;
