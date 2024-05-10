import React from 'react';
import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import { TRUE_FALSE } from '../../../constants';
import  ActivityWrapper  from '../../interactiveComponents/ActivityWrapper/index';


class Module3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false, isVideo1: false, isVideo2: false,
		};
		this.playVideo = this.playVideo.bind(this);
	}

	playVideo(e, param) {
		switch (param) {
			case '1':
				this.setState({
					isVideo: !this.state.isVideo,
					isVideo1: false,
					isVideo2: false
				});
				break;
			case '2':
				this.setState({
					isVideo: false,
					isVideo1: !this.state.isVideo1,
					isVideo2: false
				});
				break;
			case '3':
				this.setState({
					isVideo: false,
					isVideo1: false,
					isVideo2: !this.state.isVideo2
				});
				break;
		}
	}

	render() {
		const welcomeVideo = {
			btn_text: 'Video',
			src: '../../../../assets/videos/Module3.mp4'
		};
		const secondVideo = {
			btn_text: 'Video',
			src: '../../../../assets/chapters/1/2.mp4'
		};
		const thirdVideo = {
			btn_text: 'Great Indian Schools, by India Today Video',
			src: '../../../../assets/chapters/1/2.mp4'
		};
		let videoPlayer = '';
		let videoPlayer2 = '';
		let videoPlayer3 = '';
		videoPlayer = <VideoPlayer poster="../../../assets/chapters/3/module3-page1-copy.png" src={welcomeVideo.src}/>;
		if (this.state.isVideo1) {
			videoPlayer2 = <VideoPlayer src={secondVideo.src}/>;
		}
		if (this.state.isVideo2) {
			videoPlayer3 = <VideoPlayer src={thirdVideo.src}/>;
		}
		const { showNextModule, showPrevModule } = this.props;
		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 3</span>
					</div>
					<div id="demo"
							 className="carousel slide parent-padding"
							 data-interval="false"
							 data-wrap="false">
						<a
							className="carousel-container-prev"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('2')}
						>
							<div className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('4')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('2')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('4')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<div id="demo" className="carousel slide" data-interval="false">
							<div className="carousel-inner">
								<div className="carousel-item active" data-id-prev="101">
									<Heading
										isUp={true}
										heading="Introduction To Darshan Academy"
									/>

									<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
										{videoPlayer}
									</div>

									<PrimaryButton
										OnClick={e => {
											this.playVideo(e, '1');
										}}
										btn_text={welcomeVideo.btn_text}
									/>
									<div className="text-black pt-10">
										<br/>
										<p>
											<span className={'text-blue-bold'}>Darshan Academy </span> has a
											<span style={{ fontWeight: 'bold' }}>unique holistic educational system</span> that turns out
											students who are well-rounded and developed
											in all areas of life: physically, mentally, emotionally and
											spiritually. The schools offer a strong academic curriculum
											coupled with spiritual education
										</p>
										<br/>

										<p>
											They are named after the great saint, Sant Darshan Singh Ji
											Maharaj, who spread the message of human unity and peace
											throughout the world. What makes these schools unique is
											that there is a daily period at each grade level for the
											spiritual curriculum. This includes time daily for silent
											meditation. Students learn to be kind, giving and caring
											people
										</p>
										<br/>

										<p>
											Darshan Academies have received numerous prestigious awards
											for their excellence in education over the years, including
											number one CBSE school in the city, and number one school in
											holistic education from Education Today. Students also
											regularly win prizes in different fields at the national and
											international level, and staff members have been honoured
											with many awards.
										</p>
										<br/>

										<p>
											The motto of the school is <span className="text-blue-bold">
											creating generations of peacemakers</span>, highlighting the vision of the founder of
											Darshan Academy.
										</p>
									</div>
									<br/>
									<div className={'row'} style={{ padding: '15px', backgroundColor: '#23b5eb', fontWeight: 'bold' }}>
										<div className={'col-12'} style={{ textAlign: 'center' }}>
											<h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#ffffff' }}>“Each student who learns
												how to be peaceful adds one more person to
												bring peace into this world.”</h4>
											<p style={{ textAlign: 'center', color: '#ffffff' }}>Sant Rajinder Singh Ji Maharaj</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<Heading
										isUp={true}
										heading="Keynote by Sant Rajinder Singh Ji Maharaj"
									/>
									<div className="text-black pt-10 text-center" style={{ color: '#8623eb', fontWeight: 'bold' }}>
										<p>
											{/*<IconVideo size={"icon-20"}/>*/}
											Watch the keynote given by Sant Rajinder Singh Ji Maharaj at the celebration
											of Darshan Education Foundation's 20th Anniversary in New Delhi, India.
										</p>
									</div>
									<div style={{ padding: '5% 0% 0% 0%', textAlign: 'center' }}>
										{this.state.isVideo1 && videoPlayer2}
									</div>
									<PrimaryButton
										OnClick={e => {
											this.playVideo(e, '2');
										}}
										btn_text={secondVideo.btn_text}
									/>
								</div>
								<div className="carousel-item">
									<Heading
										isUp={true}
										heading="Creating Generations of Peacemakers"
									/>
									<div className="text-black pt-10 text-center" style={{ color: '#8623eb', fontWeight: 'bold' }}>
										<p>
											{/*<IconVideo size={"icon-20"}/>*/}
											Watch this video of Darshan Academy featured on the Great Indian Schools TV
											Series by India Today.
										</p>
									</div>
									<div style={{padding:'40px 50px 0 40px'}}>
									<iframe width="656" height="480" src="https://www.youtube.com/embed/iVQjkKkOC5E"
									 title="YouTube video player" frameborder="0" 
									 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" ></iframe>
									</div>
								</div>
								<div className="carousel-item" data-id-next="101">
									<div className="text-black padding-t-20">
										<br/>
										<ActivityWrapper activityType={TRUE_FALSE}
																		 activityInfo={{ moduleId: 3, chapter: 4, activityKey: 1 }}/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Module3;
