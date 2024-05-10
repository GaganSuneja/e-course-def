import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import { PrimaryButton } from '../../buttons';
import Mcq from '../../interactiveComponents/mcq/mcq';
import { MCQ_QUESTION } from '../../../constants';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper/ActivityWrapper';

class Module8 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false, isVideo1: false, isVideo2: false
		};
	}

	render() {
		const welcomeVideo = {
			btn_text: 'Video',
			src: '../../../../assets/chapters/8/8.mp4'
		};
		const secondVideo = {
			btn_text: 'Video',
			src: '../../../../assets/chapters/4/WM-10 Reasons of Meditation.mp4'
		};
		const thirdVideo = {
			btn_text: 'Great Indian Schools, by India Today Video',
			src: '../../../../assets/chapters/1/2.mp4'
		};
		let videoPlayer = '';
		let videoPlayer2 = '';
		let videoPlayer3 = '';
		videoPlayer = <VideoPlayer poster="../../../../assets/chapters/8/module8-page1.png" src={welcomeVideo.src}/>;
		const { showNextModule, showPrevModule } = this.props;
		const txtP1_p1 = 'A rich Spiritual Curriculum has been developed to establish a strong academic, moral and spiritual foundation for pre-primary children. Students learn how to get along with each other, to share and to work together in a group setting. They learn basic manners, good health habits and polite and courteous social interactions. They learn how to take care of their own belongings, those of others and to take care of the earth, animals, plants and nature. They explore these topics through games, art, music, literature, crafts, drama and role-playing.';
		const txtP1_p2 = 'There are three different courses for Nursery and Kindergarten: Level 0, 1 and 2. The lessons are the same, but with new topics and different learning objectives. There is a teacher manual and a student workbook for each grade level. The student workbook contains worksheet pages, rhymes, discussion questions, stories and activities. The teacher manual contains lesson plans, new words, questions and many ideas on how to teach the lessons.';
		const txtP1_p3 = 'The course is divided into twelve lessons, each having a variety of activities to reinforce the lesson. Each lesson is designed to include approximately two weeks of work, although the teacher can adjust the length of any lesson as needed.';
		const txtP2_p1 = 'This lesson is usually done at the beginning of the school year. Children might be new to the class or to the teacher. This lesson focuses on creating a sense of community in the class. Children should experience the class as a safe, warm and welcoming place. They should feel a sense of belonging in class. The activities focus on students getting to know each other better and creating a family feeling.';
		const txtP2_p2 = 'In this lesson, students gain respect and appreciation for each other, their own and each other’s uniqueness and differences. They learn that we are all one big family.';
		const txtP2_p3 = 'This is the first introduction to meditation for children in the Spiritual Curriculum. The teacher can introduce a short meditation period of one or two minutes and then gradually increase it throughout the year. It is good to have a set time for meditation. Meditation can be scheduled every day at the same time, at the beginning of the school day after assembly time. The meditation period in Darshan Academy is ten minutes. The last page of the teacher manual contains the meditation instructions as given by  Sant Rajinder Singh Ji Maharaj.';
		const txtP2_p4 = 'Students learn that vegetarians do not eat meat, fish or eggs for food. They learn that vegetarians do not eat any food for which any animal is killed.';
		const txtP3_p1 = 'Students learn how to treat animals and people with kindness. They learn how to use polite words and how  to show respect to  others.';
		const txtP3_p2 = 'Students learn that we are all one family in God. They also learn about how we need our family, how we can appreciate our family members and that there are different types of families. A Family Day or Grandparents Day can be organized.';
		const txtP3_p3 = 'Students learn the importance of helping others. They engage in acts of kindness.';
		const txtP3_p4 = 'They understand the term  selfless service, which means that we should not expect a reward when we help others.';
		const txtP3_p5 = 'Students learn that God created us and the world and that God is love. They learn that the way back to God is through love. They also understand that God is in all of nature and that we should have love for all.';
		const txtP4_p1 = 'Students learn to play by the rules. They understand the need to get along. They learn to cooperate. They learn to identify certain feelings within themselves and in others and to make their needs known in a non-aggressive way.';
		const txtP4_p2 = 'Students learn ways to take care of the body, mind and soul.';
		const txtP4_p3 = 'Students put on a play or program on one or more of the themes they learned  in the Spiritual Curriculum. They work together to achieve a common goal and use dramatic, artistic and musical skills to express spiritual values.';
		const txtP4_p4 = 'Students can pick a topic they enjoyed doing in the Spiritual Curriculum. They can create a picture of their choice on the topic. They can share their picture with others.';
		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 8</span>
					</div>
					<div
						id="demo"
						className="carousel slide parent-padding"
						data-interval="false"
						data-wrap="false"
					>
						<a
							className="carousel-container-prev"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('7')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('9')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('7')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('9')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Scope and Sequence of Level 0 to 2"
								/>
								<div className="banner-container">
									{videoPlayer}
								</div>
								{/*  */}
								<PrimaryButton
									OnClick={this.playVideo}
									btn_text={welcomeVideo.btn_text}
									className={'mt-40 mb-40'}
								/>
								<div className="text-black pt-10">
									<p>
										{txtP1_p1}
										<br/>
										{txtP1_p2}
										<br/>
										{txtP1_p3}
									</p>
									<br/>
									<p className="text-blue-bold">
										Content
									</p>
									<div className="div_table_bottom">
										<table className="list-evaluation">
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 1
												</td>
												<td>
													Getting to Know You and Building a Sense of Community
												</td>
												<hr/>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 2
												</td>
												<td>
													We are Alike and We are Different, but Everyone is Special
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 3
												</td>
												<td>
													Meditation
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 4
												</td>
												<td>
													Vegetarian Diet
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 5
												</td>
												<td>
													Social Behaviour:Manners
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 6
												</td>
												<td>
													God Made Families
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 7
												</td>
												<td>
													Selfless Service
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 8
												</td>
												<td>
													God is Love
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 9
												</td>
												<td>
													Nonviolence:Getting Along with Others
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 10
												</td>
												<td>
													Taking Care of Our Body,Mind and Soul
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 11
												</td>
												<td>
													Cultural Program
												</td>
											</tr>
											<tr>
												<td className="text_blue_p1_m8">
													Lesson 12
												</td>
												<td>
													Individual Project
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
							{/* Page 2 */}
							{/* To Do- horizontal line, alignment to the left, image */}
							<div className="carousel-item">
								<Heading isUp={true} heading="Scope and Sequence of Level 0 to 2"/>
								{/* <br />
								<br />
								<br /> */}
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/8/module8-page2.png"/>
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text_blue_p1_m8">Lesson 1</p>
									<p className="text-blue-bold">Getting to Know You and Building a Sense of Community
									</p>
									<br/>
									<p>
										{txtP2_p1}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 2</p>
									<p className="text-blue-bold">We Are Alike and We Are Different, but Everyone Is Special
									</p>
									<br/>
									<p>
										{txtP2_p2}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 3</p>
									<p className="text-blue-bold">Meditation
									</p>
									<br/>
									<p>
										{txtP2_p3}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 4</p>
									<p className="text-blue-bold">Vegetarian Diet
									</p>
									<br/>
									<p>
										{txtP2_p4}
									</p>
								</div>
								<ActivityWrapper activityInfo={{
									moduleId: 8,
									chapter: 2,
									activityKey: '1'
								}} activityType={MCQ_QUESTION}/>
							</div>
							{/* Page 3 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Scope and Sequence of Level 0 to 2"
								/>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/8/module8-page3.png"/>
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text_blue_p1_m8">Lesson 5</p>
									<p className="text-blue-bold">Social Behaviour: Manners
									</p>
									<br/>
									<p>
										{txtP3_p1}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 6</p>
									<p className="text-blue-bold">God Made Families
									</p>
									<br/>
									<p>
										{txtP3_p2}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 7</p>
									<p className="text-blue-bold">Selfless Service
									</p>
									<br/>
									<p>
										{txtP3_p3}
										<br/>
										{txtP3_p4}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 8</p>
									<p className="text-blue-bold">God Is Love
									</p>
									<br/>
									<p>
										{txtP3_p5}
									</p>
								</div>
								<ActivityWrapper activityInfo={{
									moduleId: 8,
									chapter: 3,
									activityKey: '1'
								}} activityType={MCQ_QUESTION}/>
							</div>
							{/* Page 4 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Scope and Sequence of Level 0 to 2"
								/>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/8/module8-page4.png"/>
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text_blue_p1_m8">Lesson 9</p>
									<p className="text-blue-bold">Nonviolence: Getting Along with Others
									</p>
									<br/>
									<p>
										{txtP4_p1}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 10</p>
									<p className="text-blue-bold">Taking Care of Our Body, Mind and Soul
									</p>
									<br/>
									<p>
										{txtP4_p2}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 11</p>
									<p className="text-blue-bold">Cultural Program
									</p>
									<br/>
									<p>
										{txtP4_p3}
									</p>
									<br/>
									<br/>
									<p className="text_blue_p1_m8">Lesson 12</p>
									<p className="text-blue-bold">Individual Project
									</p>
									<br/>
									<br/>
									<p>
										{txtP4_p4}
									</p>
								</div>
								<ActivityWrapper activityInfo={{
									moduleId: 8,
									chapter: 4,
									activityKey: '1'
								}} activityType={MCQ_QUESTION}/>
							</div>

							{/* Page 5		 */}
							<div className="carousel-item" data-id-next="101">
								<Heading
									isUp={true}
									heading="Scope and Sequence of Level 0 to 2"
								/>
								<p className="sub_head_p9_m10">
									<img className="img_Activity_p4_m13" src="../../../../assets/chapters/11/video-icono-01.svg"/>
									 Enjoy watching a demo video of a Spiritual Curriculum lesson from Level 0 to 2.
									<br/>
									<video className="video_p1_m11" src="../../../../assets/chapters/11/11.mp4" controls autoplay/>
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		);

	}
}

export default Module8;
