import React from 'react';
import './OneAnswer.scss';

export default function OneAnswer(props) {

	if (props.isActive) {
		return (
			<li className="OneAnswerContainer activeAnswer" onClick={() => props.fun1(props.number)} >
				{props.propsAnswer}
			</li>
		)
	} else {
		return (
			<li className="OneAnswerContainer" onClick={() => props.fun1(props.number)} >
				{props.propsAnswer}
			</li>
		)
	}

	
}