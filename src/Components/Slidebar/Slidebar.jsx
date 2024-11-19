import React from 'react';
import './Slidebar.scss';

export default function Slidebar(props) {

	const slideArr = [];

	for (let i = 0; i < props.quantity; i++) {
		if (props.obj.arrayAnswers[i]){
			slideArr.push(<div className="slide slideActive" key={i}></div>);
		} else {
			slideArr.push(<div className="slide" key={i}></div>);
		}
	}

	return (
		<div className="slidebarContainer">
			{slideArr}
		</div>
	)
}