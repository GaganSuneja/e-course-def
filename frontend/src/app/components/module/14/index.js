import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import { FILL_IN_BLANK } from '../../../constants';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper';
class Module14 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVideo: false, isVideo1: false, isVideo2: false };
		// this.state = {isSelected:false};
		this.playVideo = this.playVideo.bind(this);
		// this.selectRadiobtn =  this.selectRadiobtn.bind(this);
	}
	// playVideo(e, param) {
	playVideo(e,param){
		switch(param){
			case '1':
				this.setState({ isVideo: !this.state.isVideo,isVideo1:false });
				break;
			case '2':
				this.setState({ isVideo:false,isVideo1:!this.state.isVideo1 });
				break;
		}
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
			videoPlayer = <VideoPlayer poster="../../../assets/chapters/14/module14-page1.png"  src={welcomeVideo.src}></VideoPlayer>;
		}
		if (this.state.isVideo1) {
			videoPlayer2 = <VideoPlayer src={secondVideo.src}></VideoPlayer>;
		}
		if (this.state.isVideo2) {
			videoPlayer3 = <VideoPlayer src={thirdVideo.src}></VideoPlayer>;
		}
		const iconStar = <i className="icon-star"></i>;
		const { showNextModule, showPrevModule } = this.props;
		const txtP1_p1="In this module you will get to know some key features of the Spiritual Curriculum workbooks that support the learning process. The teacher manuals and student workbooks are full of many engaging teaching ideas."
		const txtP1_p2= "The lessons in the Spiritual Curriculum are designed for use with an interactive teaching technique. Student involvement, class participation, discussion and cooperative learning are important in the instructional delivery of the course. The course is not designed for teachers to lecture, while students passively listen, take notes and do tests. It is designed for students to participate in the readings and discussions and to work together on projects. Some projects require individual work and reflection and then group sharing."
		 
		const txtP1_p3=`There are specific techniques and methods which may be considered when establishing this "Welcoming Environment". In the following learning segment, we will review and consider a few of the methods and interventions that may be used to facilitate a welcoming educational environment.`
		const txtP2_p1= "When a student enters a classroom, they look for signs that they are welcomed, safe and respected within the environment.  Research has shown that the human brain functions better and is more receptive to learning if the surroundings are safe and inviting.  If on the contrary, the child feels threatened, unsafe or unwelcomed, real learning is more difficult to achieve.Teachers are a major key to student learning and can welcome each student as they arrive to class and to school. Remember that our interactions and behaviours towards each student are critical components in the process.  Welcoming students with their name and a "
		const txtP2_p2= "on classroom participation (even if a student response is not exactly what is requested), will motivate students to continue to participate."
		const txtP2_p3="We can celebrate achievements by displaying assignments and pictures by the students." 
		const txtP2_p4="At certain levels, photos of students involved in different activities and a birthday class chart can be displayed on notice boards. An ice breaker game can help students get to know each other better."
		
		const txtP2_p5=" suggests and encourages collaborative activities which can promote a positive class spirit. Students look forward to social interactions with the other students. The teacher can facilitate students working in pairs and groups in order to support such interactions. Examples may include, think-pair-share activity, group discussions, group presentations, songs and role playing. Once a student feels involved in the learning experience, this may result in “long term learning retention” of the topics and material."
		const txtP2_p6="The teacher’s enthusiasm, expectations, facial expressions, gestures (body language), voice pitch, and volume may all have a direct correlation with student motivation and achievement."
		const txtP3_p1="Stories, cartoons, role plays and real-life situations in the workbooks are related to the Spiritual Curriculum topics. They help students learn the concepts and explore values and points of view in an engaging manner."
		const txtP3_p2="Stories are a wonderful way to introduce children to ideas. Students can empathise with the characters and deepen their understanding. Stories can teach students the importance of values, such as love for all or helping others."
		const txtP3_p3="Students can create their own mini books and stories. The Spiritual Curriculum Level 0 to 2 workbooks have pages with key sentences that can be cut out. Students can add their own drawings to create their own booklets.  Encourage students to be storytellers. They can tell a story with a partner or on their own."
		const txtP3_p4="The workbooks have real-life situations that students can relate to. Students can brainstorm solutions to a conflict and think through a problem."
		const txtP3_p5="The child-friendly role plays in the workbooks are fun and entertaining. They are ideal for a cultural performance and imbibing values." 
		const txtP3_p6="The follow up comprehension activities and story maps in the workbooks enhance the students’ vocabulary and understanding."
		const txtP3_p7="A spiritual topic can be brought alive through a role play or dramatization of a story.Students develop their communication and team building skills through working together on a presentation. Some drama ideas:"
		const txtP4_p1="The songs, rhymes and poems in the workbooks reinforce new vocabulary and key ideas of the lessons. They provide an enjoyable way to learn and understand concepts. Music and movement are much loved activities in the class."
		const txtP4_p2="Poetry has the ability to highlight meaning, packed into a few words. Darshan Academy organises an annual «Poetry Fest» in which students have the opportunity to recite poetry and write their own poetry. Darshan Academy is named after the spiritual Master, Sant Darshan Singh Ji Maharaj. One of India's greatest mystic poets, he infused the age-old wisdom of spirituality with a freshness and beauty.  Encourage students to create their own songs, rhymes and poems based on a theme they are studying."
		const txtP5_p1="Graphic organisers capture the essence of a theme in a picture or graphic form and are effective learning tools. The Spiritual Curriculum features attractive graphic organisers to assist students organise their thoughts and remember key points. Students are asked to identify and highlight the main aspects of a theme. The creation of graphic organisers helps students review and remember new information."
		const txtP5_p2="There are many different types of graphic organisers, such as a venn diagram, flower cluster or story map."
		const txtP6_p1="Students love to play games and solve puzzles. These activities motivate the students to participate in the learning process. The workbooks contain various board games, crossword puzzles, word searches and quizzes. They are not only engaging and fun, but also help students internalise new vocabulary, practise skills and create positive learning memories." 
		const txtP6_p2="Check out the Spiritual Curriculum workbooks and teacher manuals to find suggested games and activities to reinforce the lessons. These can include word games and movement activities."
		const txtP6_p3="You can change most traditional childhood games into a learning activity. Here are some ideas:"
		const txtP7_p1="Discussions are among the most effective learning techniques and help students to hear and talk about different points of view. Throughout the Spiritual Curriculum you can find suggested discussion questions."
		const txtP7_p2="During discussions students learn communication skills and to be respectful to each other’s ideas. Another activity is for students to conduct interviews with friends and family to find out their views."
		const txtP7_p3="There are a variety of ways to get all children participating during the lesson. Asking children to raise their hand is not always the best approach because the same children raise their hands over and over. One alternative is to pair children and have them share with a partner before sharing their best answers with the group."
		const txtP8_p1="Every topic has activities and readings to engage the students in the learning process. From grade one onwards, the student workbooks have a «Let’s Recall» section at the end of every topic. This helps the students remember and deepen their understanding.  Students are encouraged to reflect on how they can apply the new concepts in their own lives. Have a short review of key points at the end or beginning of a lesson."
		const txtP8_p2="Remember to include enough practice time in your lessons. Every activity is supposed to help reinforce the concepts taught in the Spiritual Curriculum. One effective way to remember material in a lesson is to teach it to someone else. Students can teach other students through presentations, a quiz or a role play. Even at young ages, you can begin having children share what they learn. You can ask them to share something they learn with a partner or you can structure partner responses with a sentence starter related to the topic of the lesson such as, One way I can show kindness is…"
		const iconCircle = <img className="check-circle" src='../../../../assets/chapters/15/check-circle.svg'/>
		return (
			<div className="ch-container_14">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 14</span>
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
						onClick={() => showPrevModule('13')}
					>
					<span className="carousel-previous-icon"></span>
					</a>
					<a
						className="carousel-container-next"
						href="#demo"
						data-slide="next"
						onClick={() => showNextModule('15')}
					>
					<span className="carousel-next-icon"></span>
					</a>
					<a
						className="carousel-container-prev-bottom"
						href="#demo"
						data-slide="prev"
						onClick={() => showPrevModule('13')}
					>
					<span className="carousel-previous-icon"></span>
					</a>
					<a
						className="carousel-container-next-bottom"
						href="#demo"
						data-slide="next"
						onClick={() => showNextModule('15')}
					>
					<span className="carousel-next-icon"></span>
					</a>

					
					{/* <div id="demo" className="carousel slide" data-interval="false"> */}
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Teaching Techniques"
								></Heading>

											
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/14/module14-page1.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								{/*  */}
								{/* <PrimaryButton
									OnClick={this.playVideo}
									btn_text={welcomeVideo.btn_text}
									className={"mt-40 mb-40"}
								></PrimaryButton> */}

								
								<div className="text-black pt-10">
									<p className="text-blue-bold"> Welcome to the module on teaching techniques</p>
								<p>
									{txtP1_p1}
									
									<br/>
									{/* <br/> */}
									
									<br/>
									{txtP1_p2}
									
									{/* <br/> */}
									{/* <br/> */}
									
									
								</p>
								<p className="text-darkblue-bold">The teaching techniques selected for this module are:</p>
								<div className="div_table_bottom">
									<table className="list-circle_p1_m14">
										<tr>
											<td>{iconCircle}</td>

											<td>
												Picture Talk
											</td>
										</tr>
										<tr>
										<td>{iconCircle}</td>
											<td>
												Stories,Cartoons,Role Plays and Situations
											</td>
										</tr>
										<tr>
										<td>{iconCircle}</td>
											<td>
												Drama Techniques
											</td>
										</tr>
										<tr>
										<td>{iconCircle}</td>
											<td>
												Rhymes,Songs and Poems
											</td>
										</tr>
										<tr>
										<td>{iconCircle}</td>
											<td>
												Graphic Organisers
											</td>
										</tr>
										<tr>
										<td>{iconCircle}</td>
											<td>
												Games and Puzzles
											</td>
										</tr>
										<tr>
										<td>{iconCircle}</td>
											<td>
												Discussions
											</td>
										</tr>
										<tr>
										<td>{iconCircle}</td>
											<td>
												Activities and Let's Recall
											</td>
										</tr>
									</table>
								</div>
								
								<br/>
								<p>
									This module features colourful,sample pages from the child-friendly Spiritual Curriculum workbooks,highlighting different teaching techniques.
								</p>
								</div>
							</div>

							{/* Page 2 */}
							{/* To Do- horizontal line, alignment to the left, image */}
							<div className="carousel-item">
								<Heading isUp={true} heading="Picture Talk"></Heading>
								{/* <br />
								<br />
								<br /> */}
								<div className="banner-container">
										{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/14/module14-page2.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								
								<div className="text-black pt-10">
								<p>
									{txtP2_p1}
									
									<br/>
									{/* <br/> */}
									<p className="text_bottom_p2_m14">
										Here are a few questions to start a discussion about the picture and topic.
										
									</p>
									{/* <br/> */}
										These can vary according to the age group of the students.
									<div className="div_table_bottom">
										<table className="list-circle_p2_m14">
											<tr>
												<td>
													{iconCircle}
												</td>
												<td>
													What is going on in the picture?
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Describe the picture
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Have you experienced such a situation?
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													How does this topic relate to your life?
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													How does this topic related to the world? 
												</td>
												
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Can you give an example of... ?
												</td>
											</tr>
											<tr>
												<td>	
												{iconCircle}
												</td>
												<td>
													What would happen if... ?
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Why is this topic important today?
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													What is the main idea?
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Which part of the picture do you like best?
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Can you mime the posture of the character in the picture?
												</td>
											</tr>
										</table>
									</div>
									<br/>
									
									
									</p>
									<p className="text_enjoy_p2_m14">
										
										Enjoy viewing some theme pictures from the Spiritual Curriculum workbooks
									</p>
											{/* To do */}
											
									<p className="text_bottom_p2_m14">Here are a few more activities.</p>
									
									<div className="div_table_bottom">
										<table className="list-circle">
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Brainstorm words related to the topic.
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Two students can pretend to be the characters from the picture.
													<br/>
													Other students can interview them about the topic.
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													In pairs, role play a short conversation between the characters shown in the picture.
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Draw your own picture on the topic.
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Pass a ball around the class.Take turns saying one thought on the topic. 
												</td>
												
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Write your own speech bubbles for the characters in the picture.
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
													Write the discussion questions on the chits.Put the chits in a bowl and pass the bowl around the class.Play music.When the music stops, the child holding the bowl picks a chit and answers the question.
												</td>
											</tr>
											
										</table>
									</div>
                  				</div>
							</div>

							{/* Page 3 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Stories,Cartoons,Role Plays and Situations"
								></Heading>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/14/module14-page3.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>								
								<div className="text-black pt-10">
								<p>
									{txtP3_p1}
									<br/>
									<br/>
									{txtP3_p2}
									<br/>
									<br/>
									{txtP3_p3}
									<br/>
									<br/>
									{txtP3_p4}
									<br/>
									{txtP3_p5}
									<br/>
									{txtP3_p6}

								</p>
								<p>
									Enjoy looking at these sample pages of the Spiritual Curriculum related to stories, cartoons,role plays and situations.
								</p>
								{/* Video placeholder */}

								 <p>Drama Techniques</p>
								 <p>
									 {txtP3_p7}
									 <div className="div_table_bottom">
										<table className="list-circle_p1_m14">
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Create a 2 minute “television” advert to advertise a topic, such as “Nonviolence.” Divide the class into groups. Each group creates an advert related to an ethical value.
												</td>

											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Hold an “Imaginary Press Conference” with different characters out of the story or history.
												</td>

											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Perform a street play to highlight a topic.
												</td>

											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Create a mock “Radio Show” in the class with “experts” talking about different topics.
												</td>

											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Act out conflict scenarios and find peaceful solutions.
												</td>

											</tr>
										</table>
									</div>
								</p>
                  				 </div>
                  		    </div>
							{/* Page 4 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Songs,Rhymes and Poems"
								></Heading>
                				<div className="banner-container">
										{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/14/module14-page4.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
                                    <p>
                                        {txtP4_p1}
										<br/>
										{txtP4_p2}
                                    </p>
									
									<p className="text_blue2_p1_m15">
										<img className="vIcon_m15" src='../../../../assets/chapters/14/ppt.svg'/>	Enjoy viewing some sample pages of the Spiritual Curriculum workbooks related to songs, rhymes and poems.
									</p>
                                    
                				</div>
          
               			</div>
								
							{/* Page
]*							
							
                                    {/* Page 6		 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Games and Puzzles"
								></Heading>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/14/module14-page6.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>	
								<div className="text-black pt-10">
									<p>
										{txtP6_p1}
										<br/>
										{txtP6_p2}
										<br/>
										{txtP6_p3}
									</p>
									<div className="div_table_bottom">
										<table className="list-circle_p1_m14">
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												
											
											Draw a word from a text or story on the board or describe it.Can the class guess which word it is??	
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Matching games
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Board games with dice
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Races and movement games where students have to find and share information.
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Team games
												</td>
											</tr>
											<tr>
												<td>
												{iconCircle}
												</td>
												<td>
												Quiz shows
												</td>
											</tr>
										</table>
									</div>
								</div>
								
						</div>
                                        {/* Page 7 */}
                        <div className="carousel-item">
								<Heading
									isUp={true}
									heading="Discussions"
								></Heading>
						
                        <div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/14/module14-page7.png" />
									{/* )} */}
									{/* {videoPlayer} */}
						</div>	
                        <div className="text-black pt-10">
                            <p>
								{txtP7_p1}
								<br/>
								{txtP7_p2}
								<br/>
								{txtP7_p3}
							</p>
							<p>
								Some discussion formats are:
							</p>
								<div className="div_table_bottom">
								<table className="list-circle_p7_m14">
								<tr>
								<td>{iconCircle} </td>
								<td>
								Pair/small group/whole class discussions
								</td>
								{iconCircle}
								
								</tr>
								<tr>
								<td>{iconCircle}</td>
								<td>
									From pairs to fours
								</td>
								
								</tr>
								<tr>
								<td>{iconCircle} </td>
								<td>
								Fishbowl discussion:
								<br/>
								The class is divided into two groups. Only one group discusses the topic at a time. The second group watches the circle discussion. Then swap over.
								</td>
								
								</tr>
								</table>
							</div>
							The benefit of small group discussions is that more students are engaged and get a chance to talk and participate.  An effective format  is «Think Pair Share»:
							<div className="div_table_bottom">
								<table className="list-circle_p7_m14">
								<tr>
								<td>{iconCircle} </td>
								<td>
									The teacher poses a question.
								</td>
								
								</tr>
								<tr>
								<td> {iconCircle}</td>
								<td>
									Each student jots down some ideas on their own.
								</td>
								
								</tr>
								<tr>
								<td> </td>
								<td>
									Then students gets into pairs to discuss their ideas.
								</td>
								
								</tr>
								<tr>
								<td>{iconCircle} </td>
								<td>
									Finally, each pair shares some of their ideas with the whole class.
								</td>
								
								</tr>
							
								</table>
							</div> 
							<p className="Reflect_color">
								Reflect:
							</p>
							<p className = "text_color_blue2_p7_m14">Are all my students engaged in the lessons? Do all students have an opportunity to talk?</p>

                        </div>
						</div>

						{/* page 8 */}
						<div className="carousel-item" data-id-next="101">
								<Heading
									isUp={true}
									heading="Activities and Let's Recall"
								></Heading>
                				<div className="banner-container">
										{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/14/module14-page8.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
                                    <p>
                                        {txtP8_p1}
										<br/>
										{txtP8_p2}
                                    </p>
									<p className="text_blue2_p1_m15">
									<img className="vIcon_m15" src='../../../../assets/chapters/14/ppt.svg'/>	Enjoy viewing some sample pages of the Spiritual Curriculum workbooks related to Activities and Let's Recall.
									</p>
									<ActivityWrapper 
											activityInfo={{ moduleId: 14, chapter: 8, activityKey: 1 }} activityType={FILL_IN_BLANK} 
												/>
                				</div>
												
                			</div>
						</div>
				</div>
			</div>

		</div>

);

    }
}
export default Module14;
