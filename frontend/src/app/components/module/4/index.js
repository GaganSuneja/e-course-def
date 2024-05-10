import React from 'react';
import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper/ActivityWrapper';
import { TRUE_FALSE } from '../../../constants';

class Module4 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false, isVideo1: false, isVideo2: false
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
			src: '../../../../assets/videos/Module4.mp4'
		};
		const secondVideo = {
			btn_text: 'CNN Video',
			src:
				'../../../../assets/chapters/3/Understanding_The_Science_Behind_Spirituality_CNN_News.mp4'
		};
		let videoPlayer = '';
		if (this.state.isVideo) {
			videoPlayer = <VideoPlayer src={welcomeVideo.src}/>;
		}
		let videoPlayer2 = <VideoPlayer src={secondVideo.src}/>;
		videoPlayer = <VideoPlayer poster="../../../assets/chapters/3/module3-page1-copy.png" src={welcomeVideo.src}/>;
		const { showNextModule, showPrevModule } = this.props;

		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 4</span>
					</div>
					<div id="demo" data-wrap="false" className="carousel slide parent-padding" data-interval="false">
						<a
							className="carousel-container-prev"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('3')}
						>
							<div className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('5')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('3')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('5')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<div id="demo" className="carousel slide" data-interval="false">
							<div className="carousel-inner">
								<div className="carousel-item active" data-id-prev="101">
									<Heading isUp={true} heading="The Inspiration"/>

									<div className="text-black pt-10">
										<p>
											Welcome to the next section of the online Spiritual
											Curriculum Teacher Training Course. In this section, you
											will be introduced to the luminary force behind the
											Spiritual Curriculum, Sant Rajinder Singh Ji Maharaj.
										</p>
									</div>
									<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
										 {videoPlayer}
									</div>
									<PrimaryButton
										btn_text={welcomeVideo.btn_text}
									/>
									<div className="text-black pt-10">
										<p>
											It is an honour to introduce <span
											style={{ fontWeight: 'bold' }}>Sant Rajinder Singh Ji Maharaj</span>,
											founder chairman of <span style={{ fontWeight: 'bold' }}>Darshan Education Foundation</span>. An
											IIT
											Madras graduate, Sant Rajinder Singh Ji Maharaj also holds a
											Master of Science degree in Electrical Engineering from the
											Illinois Institute of Technology in Chicago. He has had a
											successful career in the field of computers and
											communication.
										</p>
										<br/>
										<p>
											Today, many are searching for answers to the mystery of the
											purpose of our lives. And many are seeking an experience of
											the soul and of the divine. Sant Rajinder Singh Ji Maharaj
											reminds us the answers lie within ourselves and can be
											uncovered through meditation. He has mastered the inner
											spiritual journey and can share with you the techniques to find the bliss, peace,
											and joy within. His unique background in both <span style={{ fontWeight: 'bold' }}>
                      science and spirituality </span>helps him make the meditation practice simple
											and clear. As head of Science of Spirituality
											internationally and Sawan Kirpal Ruhani Mission in India, he
											has been traveling worldwide teaching a meditation practice
											that brings profound inner peace.
										</p>
										<br/>

										<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
											{
												<img src="../../../assets/chapters/4/banner-m4.png"/>
											}
										</div>
										<p>
											{' '}
											His efforts at forging <span style={{ fontWeight: 'bold' }}>global peace </span> have been
											recognized by
											religious, social, and civic leaders. He has been bestowed
											with numerous well renowned awards and has received Honorary
											Doctorate Degrees from five prestigious universities and a
											distinguished Leadership Award from I.I.T. Chicago for his work in the fields of peace and
											spirituality. He serves as an inspiring example to others in
											the fact that he lives the principles he teaches in his own
											life.
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<div>
										<Heading
											isUp={true}
											heading="Interview"
										/>
										<div className={'mt-10'}>
											<p className={'text-black'}>
												Sant Rajinder Singh Ji Maharaj is internationally recognized for his work toward promoting inner
												and outer peace through spirituality and meditation.
											</p>

										</div>
										<div className="text-black pt-10 text-center" style={{ color: '#8623eb', fontWeight: 'bold' }}>
											<p>
												{/*<IconVideo size={"icon-20"}/>*/}
												In this interview "The Science of Spirituality" Sant Rajinder Singh Ji Maharaj
												explains that the purpose of our existence is to know ourselves and know God.
											</p>
										</div>
										<br/>
										<div style={{ textAlign: 'center' }}>
											{videoPlayer2}
											<div className={'mt-10'}>
												{/* <PrimaryButton
                          isActive={true}
                          className="pinkBtn"
                          btn_text="After watching the video, answer the following questions."
                        /> */}
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="text-black padding-t-20">
										<ActivityWrapper activityInfo={{
											moduleId: 4,
											chapter: 3,
											activityKey: '1'
										}} activityType={TRUE_FALSE}/>
									</div>
								</div>
								<div className="carousel-item" data-id-next="101">
									<Heading isUp={true} heading="Resources"/>
									<div className="text-black pt-10">
										<p style={{ fontWeight: 'bold' }}>
											For beautiful articles and uplifting videos by Sant Rajinder Singh Ji Maharaj, please see:
										</p>
										<ul className="list-circle text-blue-bold">
											<li>
												1) <a className={'text-blue-bold'} target="_blank" href="https://www.sos.org">
												www.sos.org
											</a>
											</li>
											<li>
												2) <a
												className={'text-blue-bold'} target="_blank"
												href="https://www.youtube.com/user/SantRajinderSingh"
											>
												www.youtube.com/user/SantRajinderSingh
											</a>
											</li>
											<li>
												3) <a
												className={'text-blue-bold'} target="_blank"
												href="https://www.facebook.com/SantRajinderSinghJiMaharaj"
											>
												www.facebook.com/SantRajinderSinghJiMaharaj
											</a>
											</li>
											<li>
												4) <a
												className={'text-blue-bold'} target="_blank"
												href="https://www.instagram.com/sant.rajinder.singh.ji.maharaj"
											>
												www.instagram.com/sant.rajinder.singh.ji.maharaj
											</a>
											</li>
										</ul>
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

export default Module4;
