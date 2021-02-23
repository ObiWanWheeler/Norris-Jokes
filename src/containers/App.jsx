import React from "react";
import Bible from "../components/Bible.jsx";
import Quote from "../components/Quote.jsx";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
		givingQuote: false,
		quoteReady: false,
		currentQuote: null,
		};
	}

	showQuote = async () => {
		if (this.state.givingQuote === false){
			this.setState({ givingQuote: true, quoteReady: false })
			const response = await fetch("https://api.chucknorris.io/jokes/random");
			const quote = await response.json();
			this.setState({ quoteReady: true, currentQuote: quote.value })
			await setTimeout(() => this.setState({givingQuote: false}), 2000)
		}
	};

	render() {
		const { currentQuote, quoteReady } = this.state;
		console.log(currentQuote);
		return (
		<div>
			{(() => {
				return currentQuote && quoteReady ? <Quote quote={currentQuote} /> : null;
			}
			)()}
		
			<Bible onClick={this.showQuote} />
		</div>
		);
	}
	}

export default App;
