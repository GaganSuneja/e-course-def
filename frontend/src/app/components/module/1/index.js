import React from 'react';
import { PrimaryButton } from '../../buttons';
import FullBanner from '../../fullBanner/FullBanner';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper/ActivityWrapper';
import { RATING } from '../../../constants';
import ModuleModal from '../../../util/modal/ModuleModals';

class Module1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false
		};
		this.playVideo = this.playVideo.bind(this);
	}

	playVideo() {
		this.setState({ isVideo: !this.state.isVideo });
	}

	render() {
		const welcomeVideo = {
			btn_text: 'Video',
			src: 'https://ik.imagekit.io/f6j6vkn9fu/Introduction_5HWjRpt2H.mp4'
		};
		let videoPlayer = '';
		videoPlayer = <VideoPlayer poster="../../../assets/chapters/intro/module1.png" src={welcomeVideo.src}/>;
		const { showNextModule } = this.props;
		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 1</span>
					</div>
					<div
						id="demo"
						className="carousel slide parent-padding"
						data-interval="false"
						data-wrap="false">
						<a
							className="carousel-container-prev"
							href="#demo"
							data-slide="prev"
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('2')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('2')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Introduction To The Darshan Academy Teacher Training Online Course"
								/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									{videoPlayer}
								</div>

								<PrimaryButton
									OnClick={this.playVideo}
									btn_text={welcomeVideo.btn_text}
								/>
								<div className="text-black pt-10">
									<p className="text-blue-bold">
										Welcome to the Darshan Academy Spiritual Curriculum Teacher
										Training Online Course.
									</p>
									<br/>
									<p>
										The online course will help you to teach the Spiritual
										Curriculum which is run from Level 0 to Class 12. It will
										enable you to understand the philosophy of the Spiritual
										Curriculum, and integrate spiritual education in a school.
										Each course module provides specially designed videos,
										exercises, readings and essays on the topics.
									</p>
									<br/>
									<p>
										This self-paced, well-structured course includes modules for
										you to engage with, and is like an interactive textbook. You
										will become more familiar with how to teach the Spiritual
										Curriculum, and how to use effective teaching techniques.
										You will also learn how to implement a positive behavior
										program in your classroom, and the importance of a welcoming
										environment. The course highlights the scope and sequence
										and major topics of the Spiritual Curriculum, such as
										vegetarian diet, key principles of spirituality, ethical
										living and introspection.
									</p>
									<br/>
									<p>
										Our focus in developing the online training course is to
										help you gain confidence in teaching this subject and give
										you a platform to explore the topics in more depth. You will
										find resources and techniques that will help you teach the
										Spiritual Curriculum in an interactive way. We hope you
										enjoy this learning experience.
									</p>
									<br/>
									<p className="text-blue-bold">
										This course is for: <br/> Teachers who are or will be
										teaching in a school using the Spiritual Curriculum.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Self Assessment"/>
								<p className="sub_heading">Here are the key objectives of the course</p>
								<div style={{ marginTop: '22px' }}>
									<FullBanner data={{
										iconStar: false,
										textItem: [{
											text: 'Rate your current level of confidence related to each objective from 1 to 5',
											style: 'heading_white fs-10 text-center'
										},
											{
												text: '5 is high and 1 is low (Write a number in each box) ',
												style: 'heading_yellow fs-12 text-center'
											}
										]
									}}/>
									<div className={'container-fluid text-black'} style={{ marginTop: '20px' }}>
										<ActivityWrapper activityInfo={{
											moduleId: 1,
											chapter: 2,
											activityKey: '1'
										}} activityType={RATING}/>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="How the course works:"/>
								<div style={{ padding: '3% 0% 3% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/intro/module1-page3.png"/>
								</div>
								<div className="text-black pt-10">
									<p>
                    <span style={{ fontWeight: 'bold' }}>
                      This course provides
                    </span>{' '}
										specially designed exercises, readings, videos and essays on
										topics related to teaching the Spiritual Curriculum. Through
										reading, watching videos and doing the assignments in the
										course you will deepen your knowledge in how to teach the
										Spiritual Curriculum.
									</p>
									<br/>
									<p>
										You will be working at your own pace and in your own time.
									</p>
									<br/>

									<p>
										There may also be workshop programs at the school where you
										will participate in discussions, activities and demo
										lessons.
									</p>
									<br/>

									<p>
										You will also be working with a teacher trainer to help you
										with the last part of the course when you will be applying
										what you learned in the classroom.
									</p>
									<br/>

									<p>
										Once you start the course, we recommend you to browse
										through the overview of all the chapters, so that you have
										an idea of what you will be learning.
									</p>
									<br/>

									<p style={{ fontWeight: 'bold' }}>
										Entry acceptance to this course is subject to you being
										recommended by:
										<br/>- Either your school, or a member of Darshan Education
										Foundation
									</p>
									<br/>

									<p className="text-blue-bold">
										Note: <br/>
										All teachers teaching at a Darshan Academy school are
										required to take part in this online course.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Course Material"/>
								<div className="banner-container">
									<img src="../../../assets/chapters/intro/module1-page4.png"/>
								</div>
								<div className="text-black pt-80">
									<p>
										It is helpful to have access to the complete set of
										Spiritual Curriculum teacher manuals and student books, from
										Nursery to Grade 12.
									</p>
									<br/>

									<p>
										If you do not have access to the complete set, you should
										have at a minimum one Spiritual Curriculum teacher manual
										and one student workbook of any class.
									</p>
									<br/>

									<p>
										You will need access to a computer/tablet, internet
										connection support.
									</p>
									<br/>
									<br/>
									<br/>
									<p>
                    <span style={{ fontWeight: 'bold' }}>
                      For Darshan Academy teachers:
                    </span>
										<br/>
										Darshan Academy schools will provide access to a computer,
										the internet and the computer teacher will be available for
										technical support if needed. Each school also has a local
										teacher trainer, who can be consulted if there are
										questions.
									</p>
								</div>
							</div>
							<div className="carousel-item" data-id-next="100">
								<Heading isUp={true} heading="Progress"/>
								<div className="banner-container">
									<img src="../../../assets/chapters/intro/module1-page5.png"/>
								</div>
								<div className="pt-10">
									<Heading isUp={true} heading="Expectations"/>
									<div className="text-black pt-10">
										<div
											style={{
												textAlign: 'center',
												margin: '6% auto',
												width: '60%'
											}}
										>
											<p className="pt-10 text-center">
												You are expected to complete the course within{' '}
												<span className="text-blue-bold">90 days.</span>
												<br/>
												You can check your progress on your profile page.
											</p>
										</div>
										<h2
											style={{ textAlign: 'center' }}
											className="text-blue-bold"
										>
											We wish you a wonderful learning experience.
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ModuleModal/>
			</div>
		);
	}
}

export default Module1;