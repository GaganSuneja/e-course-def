import React, { useEffect } from 'react';
import './index.scss';
import { PrimaryButton } from '../../components/buttons';

const Navigation = (props) => {
	useEffect(()=>{
		window.scrollTo({ top: 0 });
	},[]);
	const iconDirectory = '../../assets/icons/navigation_icons/';
	const allHeading = [
		{ fileName: 'introduction-text-01.svg' },
		{ fileName: 'purpose-text-01.svg' },
		{ fileName: 'introduction-DA-text-01.svg' },
		{ fileName: 'the-inspiration-text-01.svg' },
		{ fileName: 'introduction-meditation-01.svg' },
		{ fileName: 'key-principles-text-01.svg' },
		{ fileName: 'vegetarian-diet-text-01.svg' },
		{ fileName: 'scope-0-2-text-01.svg' },
		{ fileName: 'scope-1-8-text-01.svg' },
		{ fileName: 'scope-9-12-text-01.svg' },
		{ fileName: 'introspection-text-01.svg' },
		{ fileName: 'evaluation-text-01.svg' },
		{ fileName: 'welcoming-text-01.svg' },
		{ fileName: 'teaching-techniques-text-01.svg' },
		{ fileName: 'lessons-text-01.svg' },
		{ fileName: 'complete-course-text-01.svg' }
	];

	const rowWiseLinks = [...Array(Math.ceil(allHeading.length / 4))];

	const linksRows = rowWiseLinks.map((row, index) => allHeading.slice(index * 4, index * 4 + 4));
	const links = linksRows.map((row, index) => (
		<div className={'row'} style={{ marginBottom: '2%' }} key={index}>
			{row.map((r, i) => <div className={'col-3'} style={{ cursor: 'pointer' }} key={index * i + i} onClick={() => {
				props.history.push(`/module/${ index * 4 + i + 1}`);
			}}>
				<img src={iconDirectory + r.fileName}/>

			</div>)}
		</div>

	));

	return (
		<div className="ch-super-container">
			<div className="container-fluid">
				<div className="row" style={{ backgroundColor: '#09da70' }}>
					<div className="col-6" style={{ color: 'white' }}>
						<div style={{ fontSize: '50px', padding: '30px 20px 20px 31%', fontWeight: 'normal' }}>
							Train to Teach
							Generations
							of <span style={{ color: '#fffc00' }}>Peacemakers</span>
						</div>
					</div>
					<div className="col-6" style={{ textAlign: 'center', position: 'relative' }}>
						<PrimaryButton OnClick={() => {
							props.history.push('/module/1');
						}} btn_text="Begin the course" className="begin-course"/>
					</div>
				</div>

				<div className={'container pt-20'}>
					{
						links
					}

				</div>
			</div>
		</div>
	);
};
export default Navigation;
