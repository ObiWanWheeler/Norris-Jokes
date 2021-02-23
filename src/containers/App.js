import React from "react";
import Bible from "../components/Bible.jsx";
import Quote from "../components/Quote.jsx";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
		questionReady: false,
		currentQuote: null,
		};
	}

	showQuote = async () => {
		this.setState({ questionReady: false })
		const response = await fetch("https://api.chucknorris.io/jokes/random");
		const quote = await response.json();
		this.setState({ questionReady: true, currentQuote: quote.value })
	};

	render() {
		const { currentQuote, questionReady } = this.state;
		console.log(currentQuote);
		return (
		<div>
			{(() => {
				return currentQuote && questionReady ? <Quote quote={currentQuote} /> : null;
			}
			)()}
		
			<Bible onClick={this.showQuote} />
		</div>
		);
	}
	}

export default App;
