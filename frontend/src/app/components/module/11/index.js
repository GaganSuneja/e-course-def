import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper';
import { MCQ_QUESTION } from '../../../constants';
class Module11 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVideo: false, isVideo1: false, isVideo2: false };
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
			btn_text: 'Welcome Video',
			src: '../../../../assets/chapters/8/8.mp4'
		};
		// const secondVideo = {
		// 	btn_text: 'Watch a video on 10 Benefits of Meditation.',
		// 	src: '../../../../assets/chapters/4/WM-10 Reasons of Meditation.mp4'
		// };
		// const thirdVideo = {
		// 	btn_text: 'Great Indian Schools, by India Today Video',
		// 	src: '../../../../assets/chapters/1/2.mp4'
		// };
		let videoPlayer = '';
		// let videoPlayer2 = '';
		// let videoPlayer3 = '';
		if (this.state.isVideo) {
			videoPlayer = <VideoPlayer src={welcomeVideo.src}></VideoPlayer>;
		}
		// if (this.state.isVideo1) {
		// 	videoPlayer2 = <VideoPlayer src={secondVideo.src}></VideoPlayer>;
		// }
		// if (this.state.isVideo2) {
		// 	videoPlayer3 = <VideoPlayer src={thirdVideo.src}></VideoPlayer>;
		// }
		const txtP2_p1 = "Sant Kirpal Singh Ji Maharaj said that an ethical life is a stepping stone to spirituality. Introspection helps students follow the ethical virtues of nonviolence, humility, love for all and truthfulness."
		const txtP2_p1_2 = "It helps us reflect on our behaviour and become more aware about the way we act and communicate. Introspecting our behaviour is a tool to keep track of our daily thoughts, words and deeds and become conscious of our responses. It helps us gain a deeper understanding of ourselves."
		const txtP2_p1_3 = "To progress in meditation, we need to have certain qualities or virtues. Introspection helps us see where we stand. We can think about our behaviour during the day and find out what faults we have and start to remove them. We can reflect on our behaviour, communication and reactions."
		const txtP2_p1_4 = "Students can use the journal in the Spiritual Curriculum workbook for introspection. The journal does not get checked by the teacher in the class. It is a personal self-reflection exercise for the student. There is a simple weekly journal form for children and a more advanced one for older students."
		const txtP3_p1_1 = "It is not difficult to fill out the introspection journal. At the end of the day we take the journal and think about the whole day from morning until evening. We reflect on different situations we encountered and how we reacted, what we said, thought and did. Did we have any failures in nonviolence, humility, truthfulness and selfless service during the day? Were we angry, proud, dishonest and selfish in different situations?"
		const txtP3_p1_2 = "For example, if we stumbled over a shopping bag in front of the door, we might have had an angry thought about the person who left it there. In that case, this was a failure of nonviolence in thought. If we shouted at the person who left the bag, that is a failure of nonviolence in words."
		const txtP3_p1_3 = "If we got physically aggressive with the person, that is a failure of nonviolence in deed. For any failure we did during the day, we mark this  in different columns. We count how many failures we had in each column during the day and write the number there. If a person was dishonest three times during the day, they write the number 3 in the column. The purpose is to recognize our failures in behaviour so that we can improve them in the future.  The idea is not to feel bad about ourselves. The aim is to make an effort to do better the next day. We can think of the opposite virtue to the failure we have. For instance, if we recorded a mark for being dishonest, we can focus more on the quality of honesty in our lives."
		const txtP3_p1_4 = "If a child chooses to be vegetarian, there is an option to write down whether a vegetarian diet was followed during the day."
		const txtP3_p1_5 = "At the bottom of the journal there is space to note down how much time we spent in selfless service and how much time was spent in meditation. This way we can follow our spiritual progress."
		const txtP4_p1 = "This is the season of spring, and we have finally said goodbye to cold weather. The weather has warmed up, the flowers have bloomed and the trees are covered with their finest greenery. At this time of year, we tend to want to clean our house and rid ourselves of anything that reminds us of the long, cold winter. We want to open our windows to let in the clean, fresh air. We want to toss out anything that clutters our house. We usually refer to this as spring cleaning. We want to get rid of anything that reminds us of the cold, dark months of winter so we can allow in the beauty of spring."
		const txtP4_p1_2 = "Just as we have spring cleaning, we can also use this time as one of spiritual spring cleaning. It is a time to clear out our spiritual house, so we become receptive to God’s love and bring joy and happiness into our lives."
		const txtP4_p1_3 = "Our spiritual house is our body and mind in which our soul resides. So, how can we clean our spiritual house? We must free ourselves of the clutter of mind and matter so that spirit can flow in."
		"Before we spring clean, we typically take a good, hard look at what is cluttering our house. We do a walk through first to see how much cleaning needs to be done. We evaluate what we want to keep and what we want to throw away. We decide if there is anything too difficult for us to remove ourselves, and we call upon someone to help us."
		const txtP4_p1_4 = "Similarly, in spiritual spring cleaning, we need to do a walk through of our own interior makeup to decide what we want to keep and what we want to throw away. We need to evaluate what aspects of ourselves we want to cleanse. We need to understand what is cluttering our minds and hearts and keeping us from opening up to God’s love."
		const txtP4_p1_5 = "For example, some basic impediments that clutter us are anger and ego. Let us examine how we can remove these from our lives."
		const txtP4_p2 = "Anger is usually aimed toward another person. When we are angry, what are we doing? We are thinking about the other person. We are thinking about what that person did or said, reviewing in our mind what has happened, replaying the scenario just like replaying a DVD of a movie. Then, we start inventing scenarios of what we want to do to get back at that person. We start creating new movies of future actions or words we will express to get even. How does this help us?"
		const txtP4_p2_2 = "The way to clean our house of anger is to say, “Do I want to spend my time thinking about this other person or interacting angrily with this other person through my words and deeds, or would I rather experience the joy and happiness that comes from experiencing God’s love?” We have to actively choose to focus our thoughts away from the other person and redirect them towards God."
		const txtP4_p3 = "When we are filled with ego, we are filled with thoughts of our own selves. We compare ourselves to others, and make judgments that we are better than everyone else. We think we are more powerful than others. We may feel we are entitled to whatever we want. We may feel we are intellectually superior to everyone else, or that we are smarter than others."
		const txtP4_p4 = "The remedy for ego is selfless service. If we spend our time engaged in activities that are helpful to others, we are serving others instead of ourselves. If we serve without any desire for gains for ourselves, then we are not thinking of ourselves. We are thus eliminating our ego."
		const iconStar = <i className="icon-star" />;
		const { showNextModule, showPrevModule } = this.props;

		return (
			<div className="ch-container_11">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 11</span>
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
							onClick={() => showPrevModule('10')}
						>
							<span className="carousel-previous-icon" />
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('12')}
						>
							<span className="carousel-next-icon" />
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('10')}
						>
							<span className="carousel-previous-icon" />
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('12')}
						>
							<span className="carousel-next-icon" />
						</a>
						<div id="demo" className="carousel slide" data-interval="false">
							<div className="carousel-inner">
								<div className="carousel-item active" data-id-prev="101">
									<Heading isUp={true} heading="Welcome to the module on Introspection" />
									<div className="sub_head_p9_m10">
										<p>
											<img className="img_Activity_p4_m13" src="../../../../assets/chapters/11/video-icono-01.svg" />	Listen to this inspiring audio talk "The First Step:Ethical Living" by Sant Rajinder Singh Ji Maharaj.
										</p>
									</div>

									<video className="video_p1_m11" src="../../../../assets/chapters/11/11.mp4" controls autoplay />


								</div>
								<div className="carousel-item">
									{/* <div className="carousel-item active" data-id-prev="101"> */}
									<Heading
										isUp={true}
										heading="Introspection"
									/>
									<div className="banner-container">
										{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/11/module11.png" />
										{/* )} */}
										{/* {videoPlayer} */}
									</div>
									<div className="text-black pt-10">
										<p className="text-blue-bold">Introduction</p>
										<p>
											{txtP2_p1}
											<br />
											{txtP2_p1_2}
										</p>
										<br />
										<p>
											{txtP2_p1_3}
										</p>
										<br />
										<p>
											{txtP2_p1_4}
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<Heading
										isUp={true}
										heading="Keeping a Journal"
									/>
									<div className="banner-container">
										{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/11/module11-page1.png" />
										{/* )} */}
										{/* {videoPlayer} */}
									</div>
									<div className="text-black pt-10">
										<p>
											{txtP3_p1_1}
											<br />
											{txtP3_p1_2}
											<br />
											{txtP3_p1_3}
											<br />
											{txtP3_p1_4}
											<br />
											{txtP3_p1_5}
										</p>

									</div>
									<div className="sub_head_p9_m10">
										<p>
											How does introspection help us?
										</p><table className="list-circle">
											<tr>
												<td>{iconStar}</td>
												<td>
													Identifies our reaction to situations or people and what we could do better next time
										</td>
											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Help us realize the behaviours we want to do differently in the future.
										</td>
											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Help us form a plan for better choices tommorow and in the future.
										</td>

											</tr>
											<tr>
												<td>{iconStar}</td>
												<td>
													Identifies the things we don't like , so we can make different choices in the future.
										</td>

											</tr>

										</table>
										<br />
										<p>
											{'Reflection Question:'}
											<br />
											{'Think of your life.Is there a behaviour you would like to weed out of your life?'}
										</p>
										<br />
										<div className="button_introspectionDiary_p1_m11">
											<span>Introspection Journal</span>
										</div>
									</div>
								</div>

								<div className="carousel-item">
									<ActivityWrapper activityInfo={{
										moduleId: 11,
										chapter: 2,
										activityKey: '1'
									}} activityType={MCQ_QUESTION} />
								</div>

								{/* Page 4 */}
								<div className="carousel-item">
									<Heading
										isUp={true}
										heading="Read this beautiful article on Spiritual Spring Cleaning, By Sant Rajinder Singh Ji Maharaj"
									/>
									<div className="banner-container">
										{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/11/module11-page3.png" />
										{/* )} */}
										{/* {videoPlayer} */}
									</div>
									<div className="text-black pt-10">
										<p className="text-blue-bold">Spiritual Spring Cleaning</p>
										<p className="text-blue-bold-m11">by Sant Rajinder Singh Ji Maharaj</p>
										<p>
											{txtP4_p1}
											<br />
											{txtP4_p1_2}
											<br />
											{txtP4_p1_3}
											<br />
											{txtP4_p1_4}
											<br />
											{txtP4_p1_5}
										</p>
										<br />
										<div className="text-blue-bold">Anger</div>
										<br />
										<p>
											{txtP4_p2}
											<br />
											{txtP4_p2_2}
										</p>
										<br />
										<div className="text-blue-bold">Ego</div>
										<br />
										<p>
											{txtP4_p3}
											<br />
											{txtP4_p4}
											<br />
											{'Source:www.sos.org'}
										</p>
									</div>
								</div>
								{/* Page 5 */}
								<div className="carousel-item" data-id-next="101">
									<Heading
										isUp={true}
										heading="Spring Cleaning Excercise:"
									/>
									<div className="text-black pt-10">
										<div className="text-blue">Reflect on these questions</div>
										{/* <p className="text-blue-bold">Spring Cleaning Excercise:</p>
								<p className="text-blue-light">Reflect on these questions</p> */}
										<div className="div_table_bottom">
											<table className="list-circle">
												<tr>
													<td>{iconStar}</td>
													<td>
														Is your heart clear of any hatred and prejudice for others who are different from you?
										</td>


												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														Do your words express tolerance and appreciation for all your students?
										</td>

												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														Are you an example of sweet and loving speech?
										</td>

												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														Do your actions tear people apart or bring people together?
										</td>

												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														Do your actions promote peace?
										</td>

												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														What are some key behaviours you would like to strengthen?
										</td>

												</tr>
											</table>
										</div>
										<br />
										<div className="text-blue-bold">
											Additional points to remember:
										</div>
										<div className="div_table_bottom">
											<table className="list-circle">
												<tr>
													<td>{iconStar}</td>
													<td>
														Tracking progress helps build awareness for areas that we can improve.
										</td>


												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														Negative thoughts, words and deeds are like coverings over our soul and make it more difficult

														to experience our true selves.
										</td>

												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														Reviewing our lapses is like looking in a mirror. We should not use this as fuel for self-criticism.
										</td>

												</tr>
												<tr>
													<td>{iconStar}</td>
													<td>
														Take small steps and keep persevering.
										</td>

												</tr>

											</table>
											<br />
										</div>
										<br />
										<br />
										<div className="m11_bottom_blue">
											<p>As we develop ethical virtues , our mind becomes calmer and more peaceful and that makes it easier to meditate</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* </div> */}
			</div>
		);
	}
}
export default Module11;
