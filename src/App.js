import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './components/PhotoCard';
import './App.css';
import { CardContainer } from './components/styles';

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
		<CardContainer className="App">
			<PhotoCard className="photoCard" title={data.title} url={data.url} explanation={data.explanation} />
		</CardContainer>
	);
}
export default App;
