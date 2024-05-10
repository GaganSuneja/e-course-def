import React from 'react';
import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import {MCQ_QUESTION} from '../../../constants';

import ActivityWrapper from '../../interactiveComponents/ActivityWrapper/ActivityWrapper';

class Module6 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false, isVideo1: false, isVideo2: false,
		};
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

	activateSubmitButton1(effectiveResult, activate) {
		this.setState({ ...this.state, activateSubmitButton1: activate, mcqResponse1: effectiveResult });
		console.log('submit button activated', this.state);
	}

	activateSubmitButton2(effectiveResult, activate) {
		this.setState({ ...this.state, activateSubmitButton2: activate, mcqResponse2: effectiveResult });
		console.log('submit button activated', this.state);
	}

	submitMcq1(e) {
		this.setState({ ...this.state, showMcqResult1: true, activateSubmitButton1: false });
		console.log('submit button activated:::', this.state);
		const progressObject = {
			moduleId: 6,
			chapter: 2,
			activityType: 'mcq',
			activityKey: '1',
			data: this.state.mcqResponse1
		};
		this.props.saveModuleProgress(5, this.state.userId, progressObject);
		// do api call here
		console.log(this.state.mcqResponse1);
	}

	submitMcq2(e) {
		this.setState({ ...this.state, showMcqResult2: true, activateSubmitButton2: false });
		console.log('submit button activated:::', this.state);
		const progressObject = {
			moduleId: 6,
			chapter: 6,
			activityType: 'mcq',
			activityKey: '1',
			data: this.state.mcqResponse2
		};
		this.props.saveModuleProgress(5, this.state.userId, progressObject);
		// do api call here
		console.log(this.state.mcqResponse2);
	}

	setMcqActivity1() {
		const userMcqActivity1 = this.state.moduleUserProgress?.['chapterProgress']?.[0]?.['data'];
		return userMcqActivity1 ? userMcqActivity1 : this.state['chapterWiseQuestion']?.['2']?.['mcqQuestion']?.['1'];
	}

	setMcqActivity2() {
		const userMcqActivity1 = this.state.moduleUserProgress?.['chapterProgress']?.[1]?.['data'];
		return userMcqActivity1 ? userMcqActivity1 : this.state['chapterWiseQuestion']?.['6']?.['mcqQuestion']?.['1'];
	}

	render() {
		const iconStar = <i className="icon-star"/>;
		const welcomeVideo = {
			btn_text: 'Video',
			src: '../../../../assets/videos/Module6.mp4'
		};
		const secondVideo = {
			btn_text: 'Watch a video on 10 Benefits of Meditation.',
			src: '../../../../assets/chapters/6/6.mp4'
		};
		const thirdVideo = {
			btn_text: 'Great Indian Schools, by India Today Video',
			src: '../../../../assets/chapters/1/2.mp4'
		};
		let videoPlayer = '';
		let videoPlayer2 = '';
		let videoPlayer3 = '';
		if (this.state.isVideo) {
			videoPlayer = <VideoPlayer poster="../../../assets/chapters/6/module6-page1.png" src={welcomeVideo.src}/>;
		}
		videoPlayer2 = <VideoPlayer src={secondVideo.src}/>;
		if (this.state.isVideo2) {
			videoPlayer3 = <VideoPlayer src={thirdVideo.src}/>;
		}
		const { showNextModule, showPrevModule } = this.props;
		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 6</span>
					</div>
					<div id="demo" data-wrap="false" className="carousel slide parent-padding" data-interval="false">
						<a
							className="carousel-container-prev"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('5')}
						>
							<div className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('7')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('5')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('7')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Key Principles of Spirituality"
								/>

								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									{videoPlayer}
								</div>

								<PrimaryButton
									OnClick={(e) => {
										this.playVideo(e, '1');
									}}
									btn_text={welcomeVideo.btn_text}
								/>
								<div className="text-black pt-10">
									<p>
										In this chapter, we will look at some key principles of
										spirituality that are taught in the Spiritual Curriculum.
										The module Key Principles of Spirituality explores questions
										related to who we really are. <span style={{ fontWeight: 'bold' }}>Are we the brain, the
										emotions, the body? Or are we in reality a soul, a part of
										God? And if we are a part of God, how can we see God? How
										can we experience our real self and solve the mystery of
										life?</span>
									</p>
									<br/>
									<p>
										A spiritual guide helps us to answer many of these questions by showing us how
										to meditate and discover who we really are through the
										technique of going within and tapping into our divine core.
										Meditation is a simple technique that helps us connect with
										the divine and find inner peace. A spiritual guide helps
										people achieve their spiritual goals by providing them with
										ongoing guidance to lead an ethical life and to perfect
										their meditations.
									</p>
									<br/>
									<p>
										A life based on ethical values is a key principle on the
										spiritual path and includes living a life of nonviolence,
										truthfulness, humility, love for all, selfless service,
										vegetarianism and avoidance of alcohol and drugs. The
										ultimate goal of this process is to take the inner journey
										back to our true spiritual home.
									</p>
									<br/>
									<p>
										The saints and mystics tell us that God is eternal, all
										conscious, all love, all Light and Sound, and all peace. God
										created all that exists. God brought creation into being. At
										the time of creation two principles emanated - the Light and
										Sound of God. The Light and Sound of God can be contacted
										within through a process of meditation. In this way we can
										experience our connection with God.
									</p>
									<br/>
									<p>
										The topic also looks at the idea of balancing our life in the world
										with our spiritual practices - how to live in the world and
										still stick to our spiritual principles when faced with
										daily life situations. Living in the world, we have
										responsibilities towards our family and community and we
										need to work to earn our livelihood. The key is to not get
										wrapped up by the world, to find time to develop
										ourselves spiritually through meditation and to live an
										ethical life.
									</p>
								</div>
							</div>
							<div className={'carousel-item '}>
								<Heading
									isUp={true}
									heading="Experiencing Our Soul"
								/>
								<div className="text-black pt-10" style={{ color: '#8623eb', fontWeight: 'bold' }}>
									<p>
										Watch the video “Putting God on Your To Do List”.
									</p>
								</div>
								<div className={'pt-10 text-black'}>
									This video is an excerpt of a spiritual discourse by <span style={{ fontWeight: 'bold' }}>Sant Rajinder Singh Ji Maharaj</span>.
									Our day-to-day
									activities can keep us so busy that we forget to make time for finding God - the real purpose of our
									lives.
								</div>
								<ActivityWrapper activityInfo={{moduleId: 6,
									chapter: 2,
									activityKey: '1'}} activityType={MCQ_QUESTION}/>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Key Principles of Spirituality"
								/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/6/module6-page3.png"/>
								</div>
								<p className={'text-blue-bold'}> At the heart of spirituality are these key principles:
								</p>
								<div className="div_table_bottom text-black">
									<table className="list-circle">
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												God is in all living beings. God created everything. We have respect for people of all faiths
												and backgrounds.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												Our true self is the soul. Within each of us is a soul, a great spiritual potential which is a
												part of the Divine.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												The true purpose of life is to reconnect with our soul. From this experience flows a peace that
												is not dependent on life's circumstances - a profound peace that is eternal. This experience is
												the true source of the happiness that we all crave. Spiritual realization is a matter of
												first-hand inner experience.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												Meditation helps us to grow spiritually. It is a natural method that can be practised by anyone,
												regardless of age, health, education or background.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												A competent teacher speeds our progress. We can get on-going guidance from a spiritual Master in
												how to progress spiritually in the shortest possible time.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												Living a life imbued with ethical values. A life of nonviolence, humility, selfless service and
												love for all helps us progress spiritually.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												A vegetarian diet is a nonviolent way of life and supports our physical health, the health of
												the planet and our spiritual progress.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												Living a balanced life in the modern world. Living in the world, we have responsibilities
												towards our family and community and we need to work to earn our livelihood. While doing so,
												however, we don’t lose sight of our spiritual goals.
											</td>
										</tr>
										<tr>
											<td>
												{iconStar}
											</td>
											<td>
												Moving from duality to unity: As we advance within through meditation and behold God's Light
												within us, we see that same Light shining in others. As a consequence of that
												realization, a natural spirit of love for all and compassion becomes the hallmark of our outer
												lives.
											</td>
										</tr>
									</table>
								</div>
							</div>
							<div className="carousel-item" data-id-next="101">
								<Heading
									isUp={true}
									heading="Nurturing the Seed of Soul"
								/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/6/module6-page4.png"/>
								</div>
								<div className={'text-black'}>
									<p className={'text-blue-bold'}>Excerpt from the article “What Gardens Teach Us about Spirituality”
										by <br/>Sant Rajinder Singh Ji Maharaj</p>
									<br/>
									<br/>
									<p><span style={{ fontWeight: 'bold' }}>In the gardens of the world</span>, seeds need fertile soil,
										water, air and sunlight to grow. The soul is
										like a spiritual seed that lies dormant within us, until we nurture it. The seed lies dormant at the
										seat of the soul, between and behind the two eyebrows.</p>
									<br/><br/>
									<p>When we learn to meditate on the inner Light and Sound of God, our soul experiences God’s love for
										itself, and the sleeping seed of our soul is awakened. Through connection with the current of Light
										and Sound, the seed of the soul is watered. This current is the divine power emanating from God that
										brought all creation into existence. It reverberates in all forms of life, from humans,
										to animals, to plants. It is lying within us, but we do not see or hear it until our sleeping soul
										is awakened.</p>
									<br/>
									<br/>
									<p>As a plant needs sunlight to grow, so does our soul need to focus on the inner Light.
										Once connected to the Light and Sound within, we need to concentrate on it to experience
										spiritual growth. Daily meditation is the daily sunlight our soul needs to grow.</p>
								</div>
								<ActivityWrapper activityInfo={{moduleId: 6,
									chapter: 4,
									activityKey: '1'}} activityType={MCQ_QUESTION}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Module6;
