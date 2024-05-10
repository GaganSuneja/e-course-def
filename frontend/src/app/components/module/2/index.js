import React from 'react';
import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import HorizontalRule from '../../horizontalRule';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper/ActivityWrapper';
import { MCQ_QUESTION } from '../../../constants';

class Module2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false,
			isVideo1: false,
			isVideo2: false,
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
			src: '../../../../assets/videos/Module2.mp4'
		};
		let videoPlayer = '';
        videoPlayer = <VideoPlayer poster="../../../assets/chapters/2/module-2-page1.png" src={welcomeVideo.src}/>;
		const { showPrevModule, showNextModule } = this.props;
		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 2</span>
					</div>
					<div id="demo"
							 className="carousel slide parent-padding"
							 data-interval="false"
							 data-wrap="false">
						<a
							className="carousel-container-prev"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('1')}
						>
							<div className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('3')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('1')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('3')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<div id="demo" className="carousel slide"
								 data-interval="false"
								 data-wrap="false"
						>
							<div className="carousel-inner">
								<div className="carousel-item active" data-id-prev="101">
									<Heading
										isUp={true}
										heading="Philosophy and Purpose of the Spiritual Curriculum"
									/>

									<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
										{videoPlayer}
									</div>

									<PrimaryButton
										btn_text={welcomeVideo.btn_text}
									/>
									<div className="text-black pt-10">
										<p>
											The spiritual curriculum is designed to develop a strong
											ethical and spiritual foundation in students. The course is
											open to students of all faiths and backgrounds and focuses
											on how to respect others, and how to get along with others
										</p>
										<br/>
										<p>
											It also teaches meditation as a way to develop
											concentration, reduce stress, to know one’s inner self, find
											inner peace and happiness, and to bring about outer peace.
										</p>
										<br/>

										<p>
											The course teaches life skills that will help students deal
											with the pressures that might come to their life. Students
											learn communication and peaceful conflict resolution skills.
											Through projects in community service, helping people in
											need, and improving the ecological environment, students
											develop the concept of using their knowledge to make
											positive contributions to society.
										</p>
										<br/>

										<p>
											The lessons in the Spiritual Curriculum are designed for use
											with an interactive teaching technique. Student involvement,
											class participation, discussion, and cooperative learning
											are important in the instructional delivery of the course.
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<Heading
										isUp={true}
										heading="Philosophy and Purpose of the Spiritual Curriculum"
									/>
									<div className="text-black pt-10 ">
										<p>
											The following talk <span className="text-blue-bold">"Education for a Peaceful World" </span> by
											<span style={{ fontWeight: 'bold' }}> Sant
                      Rajinder Singh Ji Maharaj </span> was delivered during his visit to
											Colombia where he was awarded the Medal of Cultural Merit by
											the Ministry of Education of Colombia. In his address to the
											Cabinet of Ministers in June 1990, Maharaj Ji gave a
											landmark speech outlining his vision of how spiritual
											education of children could contribute to a peaceful world.
											The discourse was produced as a booklet. These thoughts laid
											the building blocks of the Darshan Academy schools and
											shaped the concept of a new school model.{' '}
										</p>
										<br/>
										<HorizontalRule/>
										<div className="text-black pt-10 text-center" style={{ color: '#8623eb', fontWeight: 'bold' }}>
											<p>
												Your next assignment is to read some excerpts of the talk
												“Education for a Peaceful World” and
												answer some questions related to the text at the Bottom.
											</p>
										</div>
										<HorizontalRule/>
									</div>
									<br/>
									<div className={'row'} style={{ padding: '15px', backgroundColor: '#8623eb', fontWeight: 'bold' }}>
										<div className={'col-3'}/>
										<div className={'col-6'} style={{ textAlign: 'center' }}>
											<h3 style={{ textAlign: 'right', fontWeight: 'bold', color: '#ffe400' }}>Education for a Peaceful
												World</h3>
											<p style={{ textAlign: 'right', color: '#ffffff' }}>Sant Rajinder Singh Ji Maharaj</p>
										</div>
										<div className={'col-3'}/>
									</div>
									<br/>
									<br/>
									<div className="text-black pt-10">
										<p>
											"Spirituality deals with developing the higher values of
											life and with becoming a better person. Spirituality means
											inculcating love in our hearts for all humanity,
											irrespective of skin colour, religion, or nationality,
											irrespective of whether a person is rich or poor, or from
											the East or the West. If everyone would start seeing the
											Light of God in all people, this will help bring peace and
											harmony to the world.
										</p>
										<br/>
										<p>
											{' '}
											Once we realize that our soul is a part of God, and that
											part is the same in each human being - and not only in human
											beings but in all living creatures - we will not want to
											harm anyone. We will then start to see the goodness in
											everyone. We will begin to think about the welfare of
											others.
										</p>
										<br/>

										<p>
											We will also be concerned about the ecology of the world. We
											will stop destroying our forests, our air, our water, and
											all of nature which God has given to us for our life here on
											earth. When we destroy anything that we have received, when
											we take so much from the soil for our sustenance yet pollute
											the land instead of trying to rejuvenate it, we are harming
											the whole world.{' '}
										</p>
										<br/>

										<p>
											The universes have been created in perfect harmony. There is
											so much lost when we do not take proper care of nature. And
											if we do not take proper care of ourselves, whether it be
											physically, intellectually, or spiritually, it affects our
											life in this universe.”{' '}
										</p>
										<br/>
										<p>
											“To develop our spiritual side it is important to start the
											basic moral instruction about spirituality at an early age.
											It is easy for a child to gain knowledge. Research has shown
											that children can learn faster and can learn more languages
											than grownups.
										</p>
										<br/>
										<p>
											{' '}
											If we can include some spiritual teachings in our
											educational systems throughout the world, then fifteen,
											twenty, or twenty-five years from now, we will turn out
											human beings who would have love and compassion in their
											hearts for other human beings. This would bring about an era
											in which people would try to help each other rather than
											accumulate as much as they can for themselves. We will see
											that with time we will enter into a golden age in which we
											will be concerned about the welfare of our neighbours, the
											welfare of our society, and the welfare of all life on a
											global level.”
										</p>
										<br/>
										<p style={{ fontWeight: 'bold' }}>SK Publications 1992</p>
									</div>
									<div>
										<ActivityWrapper activityInfo={{
											moduleId: 2,
											chapter: 2,
											activityKey: '1'
										}} activityType={MCQ_QUESTION}/>
									</div>
								</div>
								<div className="carousel-item">
									<Heading
										isUp={true}
										heading="Inspiring Quotes on Education"
									/>
									<p style={{ color: '#23b5eb' }}>Read these inspiring quotes on education by the spiritual Masters.</p>
									<br/>
									<div
										className="text-black padding-20"
										style={{
											backgroundColor: '#e4425a',
											color: '#ffffff',
											borderTop: '8px solid #37449e',
											paddingBottom: '40px'
										}}
									>
										<p>
											The real aim of education is to develop the character and
											individuality of a pupil, his or her mind, will and soul
											power. The best education is that which teaches us that the
											end of knowledge is service.
											<br/>
											<br/>
											<span style={{ float: 'right', fontWeight: 'bold' }}>-Sant Kirpal Singh Ji Maharaj</span>
										</p>
									</div>
									<br/>

									<div
										className="text-black padding-20 m-t-10"
										style={{
											backgroundColor: '#5caf96',
											color: '#ffffff',
											borderTop: '8px solid #fff334',
											paddingBottom: '40px'
										}}
									>
										<p>
											Irrespective of whether the children leave the schools to
											get into the arts’ fields, the sciences and become
											professionals in whatever areas their skills will take them,
											they all are going to be having to deal with life itself -
											dealing with our parents, dealing with our families, dealing
											with our neighbours, dealing with others at work. These
											skills are generally not given in an education process,
											because we do not focus that much attention on them. We just
											think that people learn by themselves. But if we take some
											time and put in some effort into that direction, then
											hopefully from a young age children would be much more
											equipped to handle the pressures that might come to their
											lives.
											<br/>
											<span style={{ float: 'right', fontWeight: 'bold' }}>-Sant Rajinder Singh Ji Maharaj</span>

										</p>
									</div>
									<br/>

									<div
										className="text-black padding-20 m-t-10"
										style={{
											backgroundColor: '#4a9edc',
											color: '#ffffff',
											borderTop: '8px solid #e3467a',
											paddingBottom: '40px'
										}}
									>
										<p>
											Sant Kirpal Singh Ji Maharaj often said that on spiritual
											health depends the health of our body and our mind. So if
											the spirit is not well, if the spirit is not enhanced, then
											all the enhancement in the intellectual realm is really not
											going to help us. As the students go through these
											Academies, we want to be sure that they recognize that their
											true self is not the body, is not the intellect, but the
											soul which is giving life to the body.
											<br/>
											<br/>
											<span style={{ float: 'right', fontWeight: 'bold' }}>-Sant Rajinder Singh Ji Maharaj</span>

										</p>
									</div>
									<br/>

									<div
										className="text-black padding-20 m-t-10"
										style={{
											backgroundColor: '#db4b97',
											color: '#ffffff',
											borderTop: '8px solid #fff334',
											paddingBottom: '40px'
										}}
									>
										<p>
											The purpose of education is not only to know Mathematics,
											English, History, Geography and Science. Those are
											necessities of life. But a focus of a good education system
											is to have the children who go through the process become
											individuals who can decide between right and wrong. Every
											day we make a decision. Should I do this, or that? Is this
											good for me? Is that good for me? If we can create an
											environment in which children learn how to pick up what is
											good and what is right, then we have created an atmosphere
											which is always going to be happy and peaceful.
											<br/>
											<br/>
											<span style={{ float: 'right', fontWeight: 'bold' }}>-Sant Rajinder Singh Ji Maharaj</span>

										</p>
									</div>
								</div>
								<div className="carousel-item" data-id-next="100">

									<Heading
										isUp={true}
										heading="Enjoy watching this presentation on the Philosophy and Purpose of the Spiritual Curriculum."
									/>
									<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
										<img src="../../../assets/chapters/2/module2-page4.png"/>
									</div>
									<p className="text-black">
										<span style={{ fontWeight: 'bold' }}> Review </span> the philosophy and purpose module. Discuss
										these questions with your teacher trainer:
									</p>
									<br/>
									<p className="text-black" style={{ fontWeight: 'bold' }}>
										. What are the different areas offered by the spiritual
										curriculum, and for each, describe the benefit you see to
										including these areas in the school curriculum.
									</p>
									<br/>

									<p className="text-black" style={{ fontWeight: 'bold' }}>
										. How would the world be different if there was spiritual
										education in schools?{' '}
									</p>
									<br/>
									<p className="text-black" style={{ fontWeight: 'bold' }}>. Why should we teach spirituality at an
										early age?</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Module2;
