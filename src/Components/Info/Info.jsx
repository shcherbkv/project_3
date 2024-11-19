import React from 'react';
import './Info.scss';

export default function Info(props) {
	return (
		<div className="divInfo">
			<div className="textInfo">Вопрос {props.number} из {props.quantityQuations}</div>
		</div>
	)
}