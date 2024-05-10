import * as React from 'react';
import { COMPLETE, LOCKED, PROGRESS } from '../../constants';
import './profile.scss';

export default function ModuleBox(props) {
	let src;
	let width='100%';
	if (props.moduleData.status === COMPLETE) {
		src = '../../../assets/icons/true-icon.svg';

	}
	else if (props.moduleData.status === PROGRESS) {
		src = '../../../assets/icons/in_progress.svg';

	}
	else {
		src = '../../../assets/icons/lock-yellow-01.svg';
		width='90%';
		props.moduleData.status = LOCKED
	}

	return (
		<div style={{cursor:'pointer', backgroundColor: 'white', marginRight: '5px', padding: '2%' }}>
			<img width={width} className="imgSize" src={src} onClick={props.moduleData.onClickAction}/>
		</div>
	);
}