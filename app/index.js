import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = 'f6c4fd1b4965352b66def79d62a7f787';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: 'San Diego'
		}
	}
	componentDidMount() {
		this.grabWeather(this.state.city);
	}
	grabWeather(city) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
		.then(response => response.json())
		.then(json => {
			this.setState({description: json.weather[0].description})
		});
	}
	render() {
		return (
			<div>
				<h1>Weather Report</h1>
				<div>Weather Report for {this.state.city}!</div>
				<span> {this.state.description}</span>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));