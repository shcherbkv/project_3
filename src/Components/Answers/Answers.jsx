import React from 'react';
import './Answers.scss';
import OneAnswer from '../OneAnswer/OneAnswer.jsx';

export default function Answers(props) {
	return (
		<ul className="answersContainer">
			<OneAnswer propsAnswer={props.propsObj.currentObject.currentAnswer1} isActive={props.propsObj.isActive[0]} number={1} fun1={props.fun1} />
			<OneAnswer propsAnswer={props.propsObj.currentObject.currentAnswer2} isActive={props.propsObj.isActive[1]} number={2} fun1={props.fun1} />
			<OneAnswer propsAnswer={props.propsObj.currentObject.currentAnswer3} isActive={props.propsObj.isActive[2]} number={3} fun1={props.fun1} />
			<OneAnswer propsAnswer={props.propsObj.currentObject.currentAnswer4} isActive={props.propsObj.isActive[3]} number={4} fun1={props.fun1} />
		</ul>
	)
}