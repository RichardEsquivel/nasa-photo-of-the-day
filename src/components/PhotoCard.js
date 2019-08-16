import React from 'react';
import { Card } from 'semantic-ui-react';

//all components can take props even if not used
function PhotoCard(props) {
	console.log(props);
	return (
		<div>
			<Card className="photoCard">
				<h2>{props.title}</h2>
				<img src={props.url} />
				<p>{props.explanation}</p>
			</Card>
		</div>
	);
}

export default PhotoCard;
