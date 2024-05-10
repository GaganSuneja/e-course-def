import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import { PrimaryButton } from '../../buttons';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper';
import { TRUE_FALSE,FILL_IN_BLANK } from '../../../constants';

class Module10 extends React.Component {


	constructor(props) {
		super(props);
		this.state = { isVideo: false, isVideo1: false, isVideo2: false };
		// this.state = {isSelected:false};
		this.playVideo = this.playVideo.bind(this);
		// this.selectRadiobtn =  this.selectRadiobtn.bind(this);
	}
	// playVideo(e, param) {
	playVideo() {
		this.setState({ isVideo: !this.state.isVideo });
	}
	render() {
		const welcomeVideo = {
			btn_text: 'Video',
			src: '../../../../assets/chapters/8/8.mp4',
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
		if (this.state.isVideo) {
			videoPlayer = <VideoPlayer src={welcomeVideo.src}></VideoPlayer>;
		}
		if (this.state.isVideo1) {
			videoPlayer2 = <VideoPlayer src={secondVideo.src}></VideoPlayer>;
		}
		if (this.state.isVideo2) {
			videoPlayer3 = <VideoPlayer src={thirdVideo.src}></VideoPlayer>;
		}
		const iconStar = <i className="icon-star"></i>;
		const { showNextModule, showPrevModule } = this.props;
		const txtP1_p1 = "Students can study the Spiritual Curriculum at high school level, in Grades 9 to 12. At this level the student workbook and teacher manual are merged into one book. Students study some of the same topics they already know, but in greater depth. Some new topics are introduced, such as Leadership and Spirituality, and Peace Studies."
		const txtP1_p2 = "The topics are taught in an activity-based manner. Cooperative learning and team building techniques help prepare students for entry into their future professions. It is helpful for students to keep a personal journal, in which they can note down ideas and thoughts about discussion questions and what they are learning. There are many opportunities for pair and group discussions and personal projects."
		const txtP1_p3 = "Research shows that students retain information longer when it can be applied to everyday life situations. When students see a practical application for what they are learning, their motivation increases and they retain information longer. Therefore, in each lesson, students apply their knowledge to their everyday life or to its practical use in today's world. "
		const txtP3_p1 = "The topic Meditation is repeated in every grade level. The Spiritual Curriculum introduces students to a simple meditation technique, as taught by Sant Rajinder Singh Ji Maharaj.  Meditation is at the core of experiencing spirituality."
		const txtP3_p2 = "When we meditate, we discover a way to reduce stress, develop concentration, experience personal transformation and find peace and joy.  Students learn more techniques to improve their meditations and to keep focused during meditation. They also learn about the benefits of meditation and references to meditation in different backgrounds. In Darshan Academy, students start the school day with ten minutes of meditation."
		const txtP3_p3 = "In the Introspection topic students learn the importance of introspection and study an overview of the ethical virtues. Introspection helps us develop the qualities of nonviolence, truthfulness, humility and selfless service, which form the basis of our spiritual life when combined with regular meditation. Introspection creates a greater sense of self-awareness by focusing our attention on our patterns of behaviour at school, home or play. We learn to take more responsibility of our words, thoughts and deeds."
		const txtP6_p1 = "Although people may desire harmonious, friendly and supportive relationships, we often are not aware of how to achieve them, of how to encourage them and of how our feelings and actions can influence our perception of an event or situation. In the topic Conflict Resolution students learn about the power of choice we have in how we use our speech and actions. Students learn what behaviour makes a conflict worse or helps it be resolved. They become aware of peer pressure. They learn how to express their feelings and needs without blaming, attacking or criticizing others, which are effective conflict resolution strategies."
		const txtP6_p1_2 = "Students become aware of the different types of conflicts that can happen in a family, community or at a global level and examine successful ways of resolving these. They develop a greater understanding of the different cultures and faiths in their communities. They learn to understand not only themselves but also others, and the importance of understanding other people’s point of view in conflict resolution."
		const txtP6_p1_3 = "“Conflict Resolution in the Global Community” in grade 12 relates to studies of peace. Lessons focus on an awareness of the global conflict situation, an appreciation of the complexity of issues that surround global conflict and an awareness of peace-building."
		const txtP6_p2 = "In the Leadership & Spirituality unit, students learn about spiritually centered leadership. What are the qualities of an effective leader? How have the saints set examples for us to become spiritually centered leaders? Students gain an understanding of basic decision making processes and the law of cause and effect. They learn how to apply leadership skills to effective decision making in their own lives, and to implement their decisions. They understand the importance of meditation in making us good leaders. Students learn team building, facilitation, goal setting and planning skills, and get involved in community experiences in leadership."

		const txtP7_p1 = "The “Spiritual Arts” unit covers the topics Spirituality & Drama, and Spirituality & Music. Spirituality & Poetry and Spirituality and Fine Art is under development. The topics explore how spiritual themes have been or can be explored by the various arts such as music, fine arts, poetry and drama.This unit is designed to give students an appreciation of the expression in the arts in various religions and faiths.They gain a greater understanding and appreciation for spiritual art and its role in developing devotion in the different religions and faiths. Students are encouraged to express their own spiritual ideas creatively through various art forms. Darshan Academies hold a Poetry Fest in which students express their poetic skills in poetry writing and poetry recitation."

		const txtP8_p1 = "The Spiritual Arts unit covers the topics Spirituality & Drama and Spirituality & Music. Spirituality & Poetry is under development. The topics explore how spiritual themes have been or can be explored by the various arts, such as music, poetry and drama. This unit is designed to give students an appreciation of the expression in the arts in various backgrounds. Students are encouraged to express their own spiritual ideas creatively through various art forms."
		const txtP8_p2 = "The unit Health and Nutrition explores the reasons why people choose a vegetarian diet and the benefits of being a vegetarian. It also highlights the importance of a healthy diet, exercise and the dangers of drugs and alcohol."
		const txtP8_p3 = "Through projects in community service, helping people in need and improving the ecological environment, students develop the concept of using their knowledge to make positive contributions to society. Students engage in a variety of service activities throughout the year. Darshan Academy students have participated in food drives, visits to senior citizen homes, planting trees, literacy classes and many other community service projects. Students learn to apply their knowledge to help people in need."
		const txtP8_p4 = "Students put on a play, presentation or program on one or more of the themes they learned in the Spiritual Curriculum. They work together to achieve a common goal and use dramatic, artistic and musical skills to express spiritual values."
		const txtP8_p5 = "Students put on a play, presentation or program on one or more of the themes they learned in the Spiritual Curriculum. They work together to achieve a common goal and use dramatic, artistic and musical skills to express spiritual values."
		return (
			<div className="ch-container_10">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 10</span>
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
							onClick={() => showPrevModule('9')}
						>
							<span className="carousel-previous-icon"></span>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('11')}
						>
							<span className="carousel-next-icon"></span>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('9')}
						>
							<span className="carousel-previous-icon"></span>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('11')}
						>
							<span className="carousel-next-icon"></span>
						</a>


						{/* <div id="demo" className="carousel slide" data-interval="false"> */}
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Scope and Sequence Grade 9 to 12"
								></Heading>


								<div className="banner-container">
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/10/module10.png" />
									)}
									{videoPlayer}
								</div>
								{/*  */}
								<PrimaryButton
									OnClick={e => this.playVideo(e, 1)}
									btn_text={welcomeVideo.btn_text}
									className={"mt-40 mb-40"}
								/>


								<div className="text-black pt-10">
									<p>
										{txtP1_p1}
									</p>
									<p>
										{' '}
										{txtP1_p2}
										{' '}
									</p>
									<p>
										{txtP1_p3}

									</p>
									<p className="text-blue">Theory and practice go hand in hand in the Spiritual Curriculum.</p>
								</div>
							</div>
							{/* Page 2 */}
							{/* To Do- horizontal line, alignment to the left, image */}
							<div className="carousel-item">
								<Heading isUp={true} heading="Scope and Sequence Grade 9 to 12"></Heading>
								{/* <br />
								<br />
								<br /> */}
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/10/module-10-image-2(800x400).png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>

								<div className="p_m10_heading">
									<Heading isUp={true} heading="Content"></Heading>
									{/* <hr></hr> */}
								</div>

								<div className="text-black pt-10">
									<span>
										<table className="list-circle">
											<tr>
												<td>{iconStar}</td>
												<td>
													Meditation
										</td>


											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Spirituality
										</td>

											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Key Principles of Spirituality
										</td>

											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Peace Studies
										</td>

											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Communication and Spirituality
										</td>

											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Conflict Resolution
										</td>

											</tr>
										</table>
									</span>
									<span>
										<table className="list-parallel">
											<tr>

												<td>{iconStar}</td>
												<td>
													Leadership & Spirituality
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Spiritual Arts
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Health and Nutrition
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Selfless Service Projects
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Cultural Presentations
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Personal Project in Spirituality
										</td>
											</tr>
										</table>
									</span>
								</div>
							</div>
							{/* Page 3 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Scope and Sequence Grade 9 to 12"
								></Heading>
								<div className="banner-container">
									<img src="../../../assets/chapters/10/module-10-image-3.png" />

								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">Meditation</p>
									{/* <br></br> */}

									<p>
										{txtP3_p1}
									</p>

									<p>
										{txtP3_p2}
									</p>
									<br></br>

									<p className="text-blue-bold">Introspection</p>
									{/* <br></br> */}

									<p>
										{txtP3_p3}
									</p>
								</div>
							</div>
							{/* Page 4 */}
							<div className="carousel-item">
								<ActivityWrapper activityInfo={{
									moduleId: 10,
									chapter: 4,
									activityKey: '1'
								}} activityType={TRUE_FALSE} />
							</div>
							{/* Page 5		 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Scope and Sequence Grade 9 to 12"
								/>

								<div className="banner-container">

									<img src="../../../assets/chapters/10/module10-page5.png" />
								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">Key Principles of Spirituality</p>
									{/* <br></br> */}

									<p>
										Here are some aspects taught in the topic Key Principles of Spirituality :

									</p>
									<div className="div_table_bottom">
										<table className="list-circle">
											<tr>

												<td>{iconStar}</td>
												<td>
													Meditation
									</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													The role ethical values play in spiritual development
									</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Living a balanced life
									</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													The role of a spiritual Master
									</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Learning a way to attain self-knowledge and God-realization
									</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Understanding nature of our soul
									</td>
											</tr>
										</table>
									</div>
								</div>

								<div className="text-black pt-10">
									<div className="text-blue-bold">Peace Studies</div>
									<div className="text-black pt-10">
										<p>
											In Peace Studies students learn that peace begins with me.Students learn how to overcome differences among people.They learn how every action has a reaction and how to deal with anger.
										</p>
									</div>
									<p className="text-blue">Peace Studies cover the topics:</p>
									<div className="div_table_bottom">
										<table className="list-circle">
											<tr>

												<td>{iconStar}</td>
												<td>
													Peace in the Family
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Peace in the Community
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Peace among Countries
										</td>
											</tr>
											<tr>

												<td>{iconStar}</td>
												<td>
													Peace in the World
										</td>
											</tr>
										</table>
									</div>

									<p>

										Students learn about the lives and activities of some important peace builders. They acquire peace building techniques they can apply in their own life. Most importantly students are encouraged to work on their own inner peace as a contribution to outer peace.
										</p>



									<p className="text-blue-bold">Communication and Spirituality</p>
									<p>
										Communication and Spirituality focuses on how we can communicate spiritual values through a variety of ways. In the topic “Communicating Spirituality through Listening and Speaking” in grade 9, students work on their own communication skills. They learn about nonverbal clues,
										presentation and discussion skills and techniques. They learn about the importance of kind words and listening as communication tools to get along with others.
										In “Communicating Spirituality through Writing” in grade 10, students improve their writing skills. They gain an appreciation for writings focused on spirituality from different backgrounds.
										They learn how to use expository prose, persuasive writing, poetry, journalistic writing and journal writing to communicate spiritual ideas.
										In grade 11 and 12 students focus on the communication of spiritual values through the media, video, radio, television, internet and new technology. They analyze their own media consumption, explore different careers in the communication field and become aware of the media’s influence on shaping our beliefs and attitudes. Students are encouraged to try out various communication tools to share their spiritual ideas and to apply their creative skills.

										</p>
									<ActivityWrapper
										activityInfo={{ moduleId: 10, chapter: 5, activityKey: 1 }} activityType={FILL_IN_BLANK}
									/>
								</div>
								{/*  */}
							</div>
							{/* Page 6 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Scope and Sequence Grade 9 to 12"
								/>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/10/module-10-image-6.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">Conflict Resolution</p>
									{/* <br></br> */}

									<p>
										{txtP6_p1}
										<br />
										{txtP6_p1_2}
										<br />
										{txtP6_p1_3}
									</p>

									<br></br>

									<p className="text-blue-bold">Leadership & Spirituality</p>
									{/* <br></br> */}

									<p>
										{txtP6_p2}
									</p>
									<br />
									<br />
									<br />
									<div className='p3_m10_bottom'>
										<p>Answer the following questions</p>
									</div>
								</div>
							</div>
							{/* Page 7 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="True or False"
								/>
								<ActivityWrapper activityInfo={{
									moduleId: 10,
									chapter: 7,
									activityKey: '1'
								}} activityType={TRUE_FALSE} />

							</div>

							{/* Page 8 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Scope and Sequence Grade 9 to 12"
								/>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/10/module10-page8.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">Spiritual Arts</p>
									{/* <br></br> */}

									<p>
										{txtP8_p1}
									</p>

									<br></br>

									<p className="text-blue-bold">Health and Nutrition</p>
									{/* <br></br> */}

									<p>
										{txtP8_p2}
									</p>
									<br></br>
									<p className="text-blue-bold">Selfless Service Projects</p>
									{/* <br></br> */}

									<p>
										{txtP8_p3}
									</p>
									<br></br>
									<p className="text-blue-bold">Cultural Presentations</p>
									{/* <br></br> */}

									<p>
										{txtP8_p4}
									</p>
									<br></br>
									<p className="text-blue-bold">Personal Project in Spirituality</p>
									{/* <br></br> */}

									<p>
										{txtP8_p5}
									</p>
									<br></br>
									<ActivityWrapper
										activityInfo={{ moduleId: 10, chapter: 8, activityKey: 1 }} activityType={FILL_IN_BLANK}
									/>
									<div className='p3_m10_bottom'>
										<span>Answer the following questions</span>
									</div>
								</div>
							</div>
							{/* Page 9 */}
							<div className="carousel-item" data-id-next="101"> 
								<Heading
									isUp={true}
									heading="Spiritual Curriculum Lesson in the Classroom"
								/>
								{/* <div className="grid_sub_head_p2_m3"> */}
								{/* <div className="sub_head_p9_m10"> */}
								<p className="sub_head_p9_m10">
									<img className="img_Activity_p4_m13" src="../../../../assets/chapters/11/video-icono-01.svg" /> Enjoy watching a demo lesson from the Spiritual Curriculum, Grade 9 to 12
										</p>
								{/* </div> */}
								{/* </div> */}
								<div>
									<video className="video_p1_m11" src="../../../../assets/chapters/11/11.mp4" controls autoplay />
								</div>
								<br />
								<br />
								<div className="div_button_p1_m3">
									<PrimaryButton
										OnClick={this.playVideo}
										btn_text={welcomeVideo.btn_text}
										className={"mt-40 mb-40"}
									></PrimaryButton>
									{/* <PrimaryButton
										OnClick={(e)	 => {
											this.playVideo(e, '1');
										}}
										btn_text={secondVideo.btn_text}
										></PrimaryButton> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* </div> */}
			</div>
			// </div>
		);

	}
}
export default Module10;
