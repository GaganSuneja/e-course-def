import React from 'react';
import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import Mcq from '../../interactiveComponents/mcq/mcq';
import HorizontalRule from '../../horizontalRule';
import { MCQ_QUESTION } from '../../../constants';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper/ActivityWrapper';


class Module5 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false, isVideo1: false, isVideo2: false
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

	render() {
		const welcomeVideo = {
			btn_text: 'Video',
			src: '../../../../assets/videos/Module5.mp4'
		};
		const secondVideo = {
			btn_text: 'Watch a video on 10 Benefits of Meditation.',
			src: '../../../../assets/chapters/4/WM-10 Reasons of Meditation.mp4'
		};
		const thirdVideo = {
			btn_text: 'Great Indian Schools, by India Today Video',
			src: '../../../../assets/chapters/5/how_to_meditate.mov'
		};
		let videoPlayer = '';
		videoPlayer = <VideoPlayer poster="../../../assets/chapters/5/module5-page1-copy.png" src={welcomeVideo.src}/>;
		let videoPlayer2 = <VideoPlayer src={secondVideo.src}/>;
		let videoPlayer3 = <VideoPlayer src={thirdVideo.src}/>;
		const { showNextModule, showPrevModule } = this.props;
		return (

			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 5</span>
					</div>
					<div id="demo" data-wrap="false" className="carousel slide parent-padding" data-interval="false">
						<a
							className="carousel-container-prev"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('4')}
						>
							<div className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('6')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('4')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('6')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<div className="carousel-inner">
							{/*Chapter 1*/}
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Introduction To Meditation"
								/>

								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									{videoPlayer}
								</div>
								<div className="text-black pt-10">
									<PrimaryButton
										btn_text={welcomeVideo.btn_text}
									/>
									<br/>
									<br/>
									<p>
										Welcome to the next module. In this section you will learn
										about the practice of meditation. Meditation helps you
										experience refreshing moments of calm, balance, and peace at
										any time and any place. As you relax, you feel your stress
										melt away. In this section you will discover how meditation
										can improve your physical, mental, spiritual and emotional
										health.
									</p>
									<br/>
									<p>
										Students learn the art of meditation as part of the
										Spiritual Curriculum. They start the school day with
										meditation. It develops their concentration skills, which
										helps them become better students. Meditation also aids in
										creating a calm classroom atmosphere. Through meditation,
										you can grow spiritually while finding inner peace and
										tranquillity.
									</p>
									<br/>

									<p>
										The ancient practice of meditation has garnered much
										interest and support from the scientific community across
										the world. Through many scientific researches, it has been
										proven that meditation provides observable physical benefits
										such as reducing the risk of stress-related illnesses. By
										alleviating stress, meditation can improve your physical
										health. It brings about inner tranquillity and joy.
									</p>
									<br/>

									<p>
										We encourage you to not only work through this section,
										but also find time to meditate in your daily routine and
										enjoy its immense benefits. Through sitting in a comfortable
										position at home or anywhere else, you can tap into the
										gifts that lie within us.
									</p>
								</div>
							</div>
							{/*Chapter 2*/}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Embracing the Spirit "
								/>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										In this excerpt from an address given at the United Nations
										in May 2016, Sant Rajinder Singh Ji Maharaj explains the
										purpose of meditation.
									</p>
									<p className="text-blue-bold">
										<span className="pt-10 text-black" style={{ color: '#8623eb', fontWeight: 'bold' }}>
											Embracing the Spirit
										</span>
									</p>

									<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<iframe width="853" height="480" src="https://www.youtube.com/embed/1TSGmNPdjsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
										
									</iframe>
									</div>
								</div>
								<div>
									<Heading
										isUp={true}
										heading="Learning the Art of Meditation in School"
									/>
									<div className="text-black">
										<br/>
										<p>
											The <span style={{ fontWeight: 'bold' }}>Spiritual Curriculum </span>includes lessons in the art
											of
											meditation. Younger students begin with five minutes of
											meditation daily. This increases to fifteen minutes in the
											upper grades.
										</p>
										<br/>

										<p>
											Research shows that when people spend some time sitting in
											introspective silence they reach levels of physical and
											mental relaxation that foster stress reduction, increase
											their efficiency and productivity, and accelerate learning.
											By tapping into inner resources through silent meditation
											periods, students can access an inner spring of creativity,
											peace, and wisdom.
										</p>
										<br/>

										<p>
											<span style={{ fontWeight: 'bold' }}>Darshan Academy</span> schedules a schoolwide ten minute
											meditation time at the beginning of the day. A bell is rung
											to signal the beginning and end of this meditation time.
											During the meditation period all the students are expected
											to be silent and meditate in their classrooms together with
											their teachers. This meditation time occurs daily at the
											same time.
										</p>
										<br/>

										<p>
											The Spiritual Curriculum contains a chapter on meditation
											that focuses on the benefits of meditation, and how to
											improve our meditation. This is the theory side of
											meditation. The practical side of spirituality is the actual
											experience of meditation. During meditation students can tap
											into the joy and peace of their soul.{' '}
										</p>
										<br/>

										<p>
											Visitors to the schools can observe the beneficial effects
											daily meditation has on the students: concentration skills
											that help them perform better academically and increase
											their sense of peace, which fosters harmonious relations
											with others. Beginning the day with meditation relieves
											tension, which helps students work more efficiently and with
											less stress and creates a peaceful atmosphere.
										</p>
									</div>
								</div>
							</div>
							{/*Chapter 3*/}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Benefits of Meditation for the Body"
								/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module5-page3.png"/>
								</div>
								<div className="text-black">
									<p style={{ fontWeight: 'bold' }}>
										By alleviating stress, meditation can improve your physical
										health. One of the physical benefits includes reducing the
										risk of stress-related illnesses.{' '}
									</p>
									<br/>
									<br/>
									<p>
										<span style={{ fontWeight: 'bold' }}>Medical researchers and doctors</span> have reported the
										effects
										that stress has on the body. A number of illnesses are the
										result of stress. For this reason, medical practitioners
										recommend meditation to their patients to reduce stress
										levels. This includes meditating to decrease your heart
										rate and blood pressure. They even recommend meditation to
										enhance your body’s immune response. Hospitals and medical
										clinics even offer classes in meditation for patients.
									</p>
								</div>
							</div>
							{/*Chapter 4*/}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Benefits of Meditation for the Mind"
								/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module5-page4.png"/>
								</div>
								<div className="text-black">
									<p style={{ fontWeight: 'bold' }}>
										Meditation produces a deep state of relaxation and a calm
										mind, providing mental benefits.
									</p>{' '}
									<br/>
									<br/>
									<p>
										Studies have shown the positive effect meditation has on the
										brain and improving memory. It also enhances concentration,
										attention, and focus. Meditation can improve concentration,
										whether one needs to concentrate for sports, education,
										work, or hobbies. When focused, we can increase our
										effectiveness and productivity. Sports figures and champion
										athletes have reported how meditation helps them improve
										focus to prepare for competing in their sport at the highest
										level.
									</p>
								</div>
							</div>
							{/*Chapter 5*/}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Benefit of Meditation for the Emotions"
								/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module5-page5.png"/>
								</div>
								<div className="text-black">
									<p>
										{' '}
										Your emotional wellness can also be enhanced through
										meditation. It brings about inner tranquillity and joy.
										Through meditation, you can reduce anxiety and depression
										caused by hopelessness and disappointments in life. When
										these are the result of emotions, such as feeling isolated
										or lonely, or sadness dealing with losses in life,
										meditation can supplement the support we receive from
										professionals.{' '}
									</p>
									<br/>
									<p>
										When you meditate, you tap into a place of happiness and
										peace within. This increases a sense of positivity. You
										realize that beyond your daily problems that cause emotional
										pain, there is a pool of joy within that you can tap into
										and feel more joyous. Meditation helps you to recharge,
										refresh and rejuvenate.
									</p>
									<br/>
									<p>
										{' '}
										When you feel happier, you are calmer and more balanced.
										This creates a ripple effect that will radiate to others.
										Meditation can improve your relationships with family,
										friends, partners, co-workers, and even our neighbors and
										community.
									</p>
								</div>
							</div>
							{/*Chapter 6*/}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading=" Meditation for Spiritual Growth"
								/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module5-page6.png"/>
								</div>
								<div className="text-black">
									<p>
										With the stress and rapid pace of life in this technological
										age, many people stop and wonder about their purpose in
										life. Did you ever stop to consider questions at times, such
										as: who am I, why am I here, what is my life’s purpose, and
										what will bring me fulfilment? One way people reflect on
										such questions is by sitting in silence in meditation.
										Spending some time in meditation opens the doors to finding
										answers to these questions about your purpose and how to
										find fulfilment in life.
										<br/>
										<span style={{ fontSize: '10px' }} className='text-blue-bold'>(Text Source:
											<a className='text-blue-bold' href={'https://sos.org'}>www.sos.org)</a></span>
									</p>

								</div>
								<ActivityWrapper activityInfo={{
									moduleId: 5,
									chapter: 6,
									activityKey: '1'
								}} activityType={MCQ_QUESTION}/>

								<div className="text-black pt-10 text-center" style={{ color: '#8623eb', fontWeight: 'bold' }}>
									<p>
										Watch these three inspiring Spiritual Pearls videos featuring some of the
										benefits of meditation.
									</p>
								</div>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									{videoPlayer2}
								</div>
								<HorizontalRule/>
								<div style={{ backgroundColor: '#32166a', padding: '20px' }}>
									<div className={'row'} style={{ margin: '0px' }}>
										<div className={'col-3'}
												 style={{
													 backgroundColor: ' #6a32eb',
													 padding: '10px',
													 borderRadius: '5px',
													 color: '#ffffff'
												 }}>
											1. How can Meditation Increase
											Our Productivity?
										</div>
										<div className={'col-1'} style={{ flex: '0 0 11.3333%', maxWidth: 'none' }}/>
										<div className={'col-3'}
												 style={{
													 backgroundColor: ' #6a32eb',
													 padding: '10px',
													 borderRadius: '5px',
													 color: '#ffffff'
												 }}>
											2. What Are The Benefits
											of Meditation? Part I
										</div>
										<div className={'col-1'} style={{ flex: '0 0 13.3333%', maxWidth: 'none' }}/>
										<div className={'col-3'}
												 style={{
													 backgroundColor: ' #6a32eb',
													 padding: '10px',
													 borderRadius: '5px',
													 color: '#ffffff'
												 }}>
											3. What Are The Benefits
											of Meditation ? Part II
										</div>
									</div>
								</div>

							</div>
							{/*Chapter 7*/}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="How You Can Attain Spiritual Consciousness"
								/>
								<div className="text-black pt-10" style={{ color: '#8623eb', fontWeight: 'bold' }}>
									<p>
										{/*<IconVideo size={"icon-20"}/>*/}
										Watch this video talk “How You Can Attain Spiritual Consciousness.”
									</p>
								</div>
								<br/>
								<p className="text-black">
									In this video Sant Rajinder Singh Ji Maharaj explains how to
									shift your attention away from the physical senses and focus
									on the spiritual world within by accessing “the channel of
									God.” (Excerpt from an address at Malcolm X College, April 22,
									2018)
								</p>

								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>

								</div>
								<ActivityWrapper activityInfo={{
									moduleId: 5,
									chapter: 7,
									activityKey: '1'
								}} activityType={MCQ_QUESTION}/>

							</div>
							{/*Chapter 8*/}
							<div className="carousel-item">
								<Heading isUp={true} heading="How to Meditate"/>
								<div className="text-black pt-10">
									<p> Here are the meditation instructions, as taught by Sant Rajinder Singh Ji Maharaj.
										The meditation technique involves sitting in a pose most comfortable, one in which you can sit the
										longest without moving, and that is not conducive to falling asleep. Any movement keeps the
										attention on the body. No part of your body should be touching anyone, since if they move, it will
										disturb you.
									</p>
									<br/>
									<p>
										1. Close your eyes very gently, in a relaxed way, as you do when we go to sleep;
										your attention should be fully alert.
										<br/>
										2. Try not to look up or put any strain on your eyes.
										<br/>
										3. Focus your eyes 8-10 inches into the field of darkness in front of you.
										<br/>
										4. Repeat any word of God you love or calming word in thought.
										<br/>
										5. Sit lovingly and calmly to see what comes up, as if you were watching a movie screen.
									</p>
									<div className="text-black pt-10" style={{ color: '#8623eb', fontWeight: 'bold' }}>
										<p>Watch this short cartoon to review the meditation technique.</p>
									</div>
									<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
										{videoPlayer3}
									</div>
									<Heading isUp={true} heading="Note"/>
									<p>
										Please stick to these meditation instructions in the school, and do not mix them with any other
										practices. You can find the full meditation instructions at the back of every Spiritual Curriculum
										teacher manual.

									</p>
									<Heading isUp={true} heading="Activity"/>
									<p>
										<br/>
										- Meditate daily.
										<br/>
										- Read the full meditation instructions at the back of the Spiritual Curriculum teacher manual.
									</p>
								</div>
							</div>
							{/*Chapter 9*/}
							<div className="carousel-item" data-id-next="101">
								<Heading isUp={true} heading="FAQ: Questions related to Meditation in the Classroom "/>
								<div className={'pt-10'}>
									<p className={'text-black text-blue-bold'}>Q. What to do if a student sleeps during meditation time,
										or lays
										their head on the desk?</p>
									<br/>
									<p className={'text-black'}>A. You can gently lift up the child to a sitting position. Remind the
										students after meditation to
										keep awake during meditation. Avoid pointing out a particular student for an error but rather,
										remind the whole group.</p>
									<br/>
									<br/>
									<p className={'text-black text-blue-bold'}> Q. What if a student does not want to close his eyes
										during meditation?</p>
									<br/>

									<p className={'text-black'}>A. We cannot force a student to meditate. But the student must keep
										quiet, so as not to disturb any other students meditating. Eventually the student might try to
										meditate, especially if you show
										enthusiasm for meditation.</p>
									<br/>
									<br/>

									<p className={'text-black text-blue-bold'}>Q. How to meditate with young children?</p>
									<br/>
									<p className={'text-black'}>A. Initially when you start meditating with young children, you can
										start with one minute of
										meditation, and gradually build it up to ten minutes as their concentration skills improve.</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Module5;
