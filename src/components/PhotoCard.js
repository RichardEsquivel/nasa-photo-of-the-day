import React from 'react';
import { Header, Description, Image, ImageContainer, TextContainer } from './styles';

//all components can take props even if not used
function PhotoCard(props) {
	console.log(props);
	return (
		<div>
			<Header>{props.title}</Header>
			<ImageContainer>
				<Image src={props.url} />
			</ImageContainer>
			<TextContainer>
				<p>{props.explanation}</p>
			</TextContainer>
		</div>
	);
}

export default PhotoCard;
