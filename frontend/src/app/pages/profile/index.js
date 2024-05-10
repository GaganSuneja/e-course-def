import React, { useEffect, useState } from 'react';
import moduleApi from '../../api/moduleApi';
import { useSelector } from 'react-redux';
import './profile.scss';
import { _ID, USER, USER_PROFILE, COMPLETE, DAY_IN_SECONDS, override, LOCKED, PROGRESS } from '../../constants';
import ModuleBox from './ModuleBox';
import { PuffLoader } from 'react-spinners';

const Profile = (props) => {
	const userProfile = useSelector((state) => state[USER]?.[USER_PROFILE]);
	const [module, setModules] = useState([]);
	const [progress, setProgress] = useState('');
	const [daysLeft, setDaysLeft] = useState(0);
	const [loader, setLoader] = useState(true);
	let totalModules = [...Array(16).keys()].map((x) => ++x);
	let moduleStatus = {};
	let completedModules = 0;
	useEffect(() => {
		(async () => {
			try {
				const allModules = await moduleApi.getModule(totalModules, userProfile[_ID]);
				for (let m of allModules) {
					moduleStatus[m['moduleId']] = m;
					if (m.status === COMPLETE) {
						++completedModules;
					}
				}
				setLoader(false);
				let elem = document.getElementById('progressBar');
				setProgress(Math.ceil(completedModules / 15 )* 100);
				elem.style.width = ((completedModules / 15) * 100) + '%';
				const noOfDaysLeft = Math.ceil(((userProfile.startTime + (90 * DAY_IN_SECONDS)) - Math.floor(Date.now() / 1000)) / DAY_IN_SECONDS);
				setDaysLeft(noOfDaysLeft);
				elem = document.getElementById('daysLeftBar');
				elem.style.width = (noOfDaysLeft / 90) * 100 + '%';
				setModules(modules());
			} catch (exception) {
				console.log(exception);
			} finally {
				setTimeout(()=>{
					setLoader(false);
				},1000);
			}
		})();
	}, []);


	const modules = (() => {
		let rowWiseModules = [...Array(Math.ceil(totalModules.length / 8))];
		const moduleLinks = rowWiseModules.map((row, index) => totalModules.slice(index * 8, index * 8 + 8));
		return moduleLinks.map((row, index) => {
				return (<div className='module-container' style={{ marginBottom: '2%' }} key={index}>
					{
						row.map((r, i) => {
							const moduleIndex = index * 8 + i + 1;
							let status = (moduleIndex === 1) ? (moduleStatus[moduleIndex]?.status || PROGRESS) : moduleStatus[moduleIndex]?.status;
							return <ModuleBox key={index * i + i}
																moduleData={{
																	onClickAction: () => {
																		if (status !== undefined)
																			props.history.push(`/module/${index * 8 + i + 1}`);
																	}
																	, status: status
																}}/>;
						})
					}
				</div>);
			}
		);
	});

	return (
		<div className={'container-fluid ch-super-container'}>
			{
				(loader) ? (<PuffLoader css={override} size={300} color={'#18afe6'} loading={loader}/>) : (
					<div className={'row'} style={{ backgroundColor: '#5426e9' }}>
						<div className={'col-6 col-xs-12'} style={{ paddingLeft: '50px' }}>
							<div style={{ backgroundColor: 'white', padding: '20px 10px 10px 10px' }}>
								<div style={{ padding: '10px' }}>
									{userProfile.gender === 'M' ?
										<img className="profile-image"
												 src="../../../assets/icons/Mprofile-01.svg"/> :
										<img className="profile-image"
												 src="../../../assets/icons/female_profile-01.svg"/>}
								</div>
								<div className="profile-block">
									<p style={{ fontSize: '30px', color: '#ffffff' }}>{userProfile.name}</p>
									<p style={{ fontSize: '20px', color: '#ebdf23' }}>{userProfile.designation}</p>
								</div>
								<div className="row" style={{ padding: '80px' }}>
									<div className={'col-12'}>
										<div className={'detail'}>
											School: {userProfile.school}
										</div>
										<div className={'detail'}>Email: {userProfile.email}</div>
										<div className={'detail'}>Contact: {userProfile.contact}</div>
									</div>
								</div>
							</div>
						</div>
						<div className={'col-6 col-xs-12'} style={{ padding: '50px' }}>
							<div className={'row user-progress'} style={{ fontWeight: 'bold' }}>
								<div style={{ width: '100%' }}>
									<span style={{ float: 'left' }}>Achievement Progress</span>
									<span style={{ float: 'right' }}>{progress + '%'}</span>
								</div>
								<br/>
								<div id="myProgress">
									<div id="progressBar"/>
								</div>
							</div>
							<div className={'row user-progress'} style={{ fontWeight: 'bold' }}>
								<p>Modules</p>
								{
									module
								}
							</div>
							<div className={'row user-progress'} style={{ fontWeight: 'bold' }}>
								<div style={{ width: '100%' }}>
									<span style={{ float: 'left' }}>Remaining Time</span>
									<div style={{ float: 'right', display: 'inline-block' }}>
										<span style={{ lineHeight: '0.5', fontSize: '40px', float: 'left' }}>{daysLeft}&nbsp;</span>
										<span style={{ float: 'right' }}>Days</span>
									</div>
								</div>
								<div id="daysLeft">
									<div id="daysLeftBar"/>
								</div>
							</div>
						</div>
					</div>)
			}
		</div>
	);
};


export default Profile;
