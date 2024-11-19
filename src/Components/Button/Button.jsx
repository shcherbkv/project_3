import React from 'react';
import './Button.scss';

export default function Button(props) {

	for (let i = 0; i < props.propsActiveBtn.length; i++) {
		if (props.propsActiveBtn[i]) {
			var vremPerem = true;
			break;
		} else {
			var vremPerem = false;
		}
	}

	if (vremPerem) {
		return (
			<button className="btn btnActive" onClick={() => props.propsFun2()}>ответить</button>
		)
	} else {
		return (
			<button disabled className="btn" onClick={() => props.propsFun2()}>ответить</button>
		)
	}
}