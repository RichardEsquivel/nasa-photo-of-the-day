import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import PhotoCard from './components/PhotoCard.js';

function App() {
	const [ data, setData ] = useState({});
	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=QHg0nVfkhVslRRYi5lRRnCRacA6zVDpHz6yfrqzi')
			.then((response) => {
				setData(response.data);
			});
	}, []);
	return (
		<div className="App">
			<p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>
			<div className="photoCards">
				<PhotoCard title={data.title} url={data.url} explanation={data.explanation} />
			</div>
		</div>
	);
}
export default App;
