import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper';
import FullBanner from '../../fullBanner/FullBanner';
import { RATING, FILL_IN_BLANK } from '../../../constants';

class Module15 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVideo: false, isVideo1: false, isVideo2: false };
		// this.state = {isSelected:false};
		this.playVideo = this.playVideo.bind(this);
		// this.selectRadiobtn =  this.selectRadiobtn.bind(this);
	}
	// playVideo(e, param) {
		// {
		// 	"name": "Suzzane L.",
		// 	"email": "suzannel@sos.org",
		// 	"role": "publisher",
		// 	"password": "suzannel_admin",
		// 	"contact": 999999999,
		// 	"gender":"F",
		// 	"school":"Darshan Academy, HQ",
		// 	"designation":"STTC Manager"
		//   },
	playVideo(e, param) {
		switch (param) {
			case '1':
				this.setState({ isVideo: !this.state.isVideo, isVideo1: false });
				break;
			case '2':
				this.setState({ isVideo: false, isVideo1: !this.state.isVideo1 });
				break;
		}
	}
	render() {
		const welcomeVideo = {
			btn_text: 'Video',
			src: '../../../../assets/videos/Module15.mp4',
		};
		const secondVideo = {
			btn_text: 'Video',
			src: 'https://darshanacademy-my.sharepoint.com/:v:/g/personal/web01_darshanacademy_org/EdTSv4d0nsRHkfEqknhxG1cBnFTJkWHae3B4LJX1OtTPew?e=w6qOcg'
		};
		const thirdVideo = {
			btn_text: 'Great Indian Schools, by India Today Video',
			src: '../../../../assets/chapters/1/2.mp4'
		};
		let videoPlayer;
		let videoPlayer2 = '';
		let videoPlayer3 = '';
		videoPlayer = <VideoPlayer poster="../../../assets/chapters/15/module15-page1.png" src={welcomeVideo.src}></VideoPlayer>;
		videoPlayer2 = <VideoPlayer src={secondVideo.src}></VideoPlayer>;
		if (this.state.isVideo2) {
			videoPlayer3 = <VideoPlayer src={thirdVideo.src}></VideoPlayer>;
		}
		const iconCircle = <img className="check-circle" src='../../../../assets/chapters/15/check-circle.svg' />
		const {  showPrevModule } = this.props;
		const txtP1_p1 = "Darshan Academy is committed to a harmonious place of learning, where students can work and play in a peaceful environment. Here are some classroom management tips."
		const txtP1_p2 = "Clear expectations help children be successful. For this reason, Darshan Academy teaches four agreements that support positive behaviour in all areas of the school. These four agreements are:"
		const txtP1_p3 = "These agreements can be posted around the school and in the classroom. At the beginning of the school year, teachers can review these agreements with their students and organise special assemblies to focus on the four behaviours."
		const txtP1_p4 = "For each agreement there is a sign language. You can use the sign language, point to a poster or use  a flashcard as a silent reminder when you see a child breaking an agreement. Sometimes it helps to provide silent reminders to children to follow the Four Agreements without disrupting the lesson."
		const txtP1_p5 = "You can take students to different areas of the school. Brainstorm and practise the expected behaviour. How can we be safe, kind, truthful and respectful in the playground, in the classroom, in the washrooms, on the bus, in the staircase, in the library or science lab? Model the expected behaviour with the students."
		const txtP1_p6 = "Students are politely reminded if they violate an agreement and students from grade 3 onwards may be asked to write a reflection sheet on their behaviour. If the student violates an agreement in a very serious way, parents can be called for a conference."
		const txtP1_p7 = "Don’t forget to reinforce expectations of positive behaviour throughout the class time. It is especially helpful to notice positive instances of behaviour that is aligned with the Four Agreements. Children pay attention to the behaviours you notice. When you notice a positive behaviour and make a remark about it, that provides information to the children about your expectations and what is important."
		const txtP2_p1 = "Before you start teaching something to children, be sure to get their attention. Teachers find it helpful to use a consistent signal for attention and something children can see if they are looking at you and hear if they are looking away. An example might be ringing a bell or holding your hand in the air and saying, “Attention, please.” It helps to practise getting quiet when children hear the attention signal and acknowledging them for getting quiet quickly. This strategy helps make the most of the time together."
		const txtP2_p2 = "One of the best ways to prevent behaviour challenges in class is to make sure you are prepared and have a good pace and a quick transition between activities. If children are engaged, then problems are less likely."
		const txtP2_p3 = "Behaviour challenges can be very difficult. Pre-corrections are reminders about how to behave and they are given before a situation that teachers anticipate may be a problem. For example, if some children are not quiet during meditation then the teacher teaches how to meditate (through modelling, guidance, and practice) and then provides pre-corrections; for instance, \" Remember, when we meditate, we are quiet and still.\"";
		const txtP2_p4 = "Pre-corrections can also be provided for tasks such as independent work. For example, when a teacher anticipates that children will mispronounce a word, the teacher can provide a pre-correction and remind children of the correct pronunciation. Pre-corrections help children be successful! After the class consider, how were pre-corrections utilized and were there situations where pre-corrections could have helped children be more successful?"
		const txtP3_p1 = "Before you start teaching something to children, be sure to get their attention. The more you prepare and the more you can think of ways to make the lessons work well, the better the lessons will be for the students. The teacher manuals and student workbooks offer numerous teaching ideas."
		const txtP3_p2 = "When planning, focus on the learning outcomes for each lesson. It is important to tell the children what you want them to learn. There is a strong benefit to learning when children know the learning outcomes you are trying to achieve. When teachers are clear they can frame activities in ways to learn important concepts. They can reinforce important concepts throughout a lesson."
		const txtP3_p3 = "Think about the important concepts in the lesson—what you want children to learn—and be sure to choose all activities based on how close they are to helping children learn the important concept. Sometimes elaborate crafts and other activities take too much attention away from the important concepts of the lesson. Children might spend more time focused on the details of the project and the important concepts might be lost. Try to tie the learning as closely as possible to the concepts or skills to be taught. Make sure that the activities you are doing in the lesson emphasize the important concepts you are trying to teach."
		const txtP3_p4 = "Think of ways to engage all students during the lesson. Plan strategies to get all students involved. How much teacher talk and student talk takes place in your lessons? Do you include practice activities and discussion time in your lesson plans? Discussions help students express ideas in their own words and hear diverse perspectives. Practice activities are important for students to gain a deeper understanding of the topic."
		const txtP3_p5 = "Partner activities and pair discussions are beneficial, because children can have more time to think. They can discuss their responses with a partner, they can hear their partner respond and they will have more opportunities to practise social and language skills. Ask students to talk quietly during partner activities, so that they don’t disturb others. Teachers can monitor responses between partners and invite some students to share responses with the whole group."
		const txtP3_p6 = "We want children to learn to think critically so how do we help foster critical thinking? Thinking involves combining information and relies on a reservoir of facts and background knowledge."
		const txtP3_p7 = "A limited number of ideas can be taught in great depth during a lesson. That is why we want to be very clear about the concepts we are trying to teach in a lesson, check for understanding and review the important concepts with children. Encourage students to reflect on how they can apply what they learn in everyday life."
		const txtP4_p1 = "Meditation time is an important part of the Spiritual Curriculum. That is why meditation time is at the beginning of the school day, after assembly."
		const txtP4_p2 = "When you meditate with young children it is better to monitor than to have your eyes closed. As children get more familiar with meditation time you can begin to meditate with them.The student workbooks and teacher manuals suggest activities to support the topic of meditation."

		return (
			<div className="ch-container_15">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 15</span>
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
							onClick={() => showPrevModule('14')}
						>
							<span className="carousel-previous-icon"></span>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
						>
							<span className="carousel-next-icon"></span>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('14')}
						>
							<span className="carousel-previous-icon"></span>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
						>
							<span className="carousel-next-icon"></span>
						</a>


						{/* <div id="demo" className="carousel slide" data-interval="false"> */}
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Lessons by Teachers"
								></Heading>
								<div className="banner-container">
									{videoPlayer}
								</div>
								{/*  */}
								<div class="text-black">
									<p className="text-blue-p1-m15">
										Welcome to the Module Lessons by Teachers
									</p>
									<p className="text-greylue-p1-m15">
										{txtP1_p1}
									</p>
								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">
										Four Agreements :
									</p>
									<p>
										{txtP1_p2}
									</p>
									<div className="div_table_bottom">
										<table className="list-circle_p7_m14">
											<tr>
												<td>
													{iconCircle}
												</td>
												<td>
													Be Safe
											</td>
											</tr>
											<tr>
												<td>
													{iconCircle}
												</td>
												<td>
													Be Kind to All
											</td>
											</tr>
											<tr>
												<td>
													{iconCircle}
												</td>
												<td>
													Be Dedicated to Truth
											</td>
											</tr>
											<tr>
												<td>
													{iconCircle}
												</td>
												<td>
													Be Respectful
											</td>
											</tr>
										</table>
									</div>
									{txtP1_p3}
									<br />
									<br />
									{txtP1_p4}
									<br />
									<br />

									{txtP1_p5}
									<br />
									<br />

									{txtP1_p6}
									<br />
									<br />
									<p className="text_blue2_p1_m15">
										<img className="vIcon_m15" src='../../../../assets/chapters/15/video-icono-01.svg' /> This video shows students demonstrating the sign language of the four agreements.
									</p>
									{/* The video */}
									<video className="video_m15" src='../../../../assets/chapters/15/13.mp4' controls />
									<br />
									<p className="text-blue-bold"> Reinforce Positive Behaviour </p>
									<p>
										{txtP1_p7}
									</p>
									<br />
									<p className="text-bluebottom-p2-m15">Check out Resources to find more material on the four agreements.</p>
								</div>

							</div>

							{/* Page 2 */}
							{/* To Do- horizontal line, alignment to the left, image */}
							<div className="carousel-item">
								<Heading isUp={true} heading="Lessons by Teachers"></Heading>
								{/* <br />
								<br />
								<br /> */}
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									{/* )} */}
									{videoPlayer}
								</div>

								<div className="text-black pt-10">
									<p className="text-blue-bold">Gaining Student Attention</p>
									<br/>
									<p>
										{txtP2_p1}
									</p>
									<br/>
									<p className="text-blue-bold">Avoid the Void</p>
									<br/>
									<p>
										{txtP2_p2}
									</p>
									<br/>
									<p className="text-blue-bold">Pre-Corrections</p>
									<br/>
									<p>
										{txtP2_p3}
										<br />
										<br/>
										{txtP2_p4}
									</p>
									<ActivityWrapper
										activityInfo={{ moduleId: 15, chapter: 2, activityKey: 1 }} activityType={FILL_IN_BLANK}
									/>
								</div>
							</div>

							{/* Page 3 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Lessons by Teachers"
								></Heading>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/15/module15-page3.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">
										Preparing for the Lessons
									</p>
									<br/>
									<p>
										{txtP3_p1}
									</p>
									<br/>
									<p className="text-blue-bold">
										Important Concepts
									</p>
									<br/>
									<p>
										{txtP3_p2}
									</p>
									<br/>
									<p className="text-blue-bold">
										Selecting the Right Activities
									</p>
									<p>
										{txtP3_p3}

									</p>
									<br/>
									<p className="text-blue-bold">
										Engaging All Students
									</p>
									<br/>
									<p>
										{txtP3_p4}
										<br />
										{txtP3_p5}
									</p>
									<br/>
									<p className="text-blue-bold">
										Critical Thinking
									</p>
									<br/>
									<p>
										{txtP3_p6}
										<br />
										{txtP3_p7}

									</p>
								</div>
								<ActivityWrapper
									activityInfo={{ moduleId: 15, chapter: 3, activityKey: 1 }} activityType={FILL_IN_BLANK}
								/>
							</div>
							{/* Page 4 */}
							<div className="carousel-item">
								<div className="text-black pt-10">
								<br/>
									<p className="text-blue-bold">
										Meditation Time
									</p>
									<br/>
									<p>
										{txtP4_p1}
										<br />
										{txtP4_p2}

									</p>
									{videoPlayer2}
									<br/>
									<p className="text-blue-bold">
										Working with a Buddy Teacher
								   </p>
									<div className="div_table_bottom">
										<table className="list-circle">
											<tr>
												<td>
													{iconCircle}
												</td>
												<td>
													Watch one or two Spiritual Curriculum lessons given by another teacher if possible. During the lesson make notes of the teaching techniques used. It is always helpful to learn from each other and share teaching tips.
												</td>
											</tr>
											<tr>
												<td>
													{iconCircle}
												</td>
												<td>
													You are now ready to apply your learning in the classroom. Plan a Spiritual Curriculum lesson and ask your teacher trainer or another teaching buddy to watch you and give you feedback.
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>

							{/* Page 5		 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Lessons by Teachers"
								></Heading>

								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/15/module15-page5.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">
										Congratulations, you have now reached the end of the Spiritual Curriculum Teacher Training Online Course. We hope you have found the course useful.
                                      </p>
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
									}} />
									<ActivityWrapper activityInfo={{
										moduleId: 15,
										chapter: 5,
										activityKey: '1'
									}} activityType={RATING} />
									<br />
									<p className="text-blue">
										Go to <span style={{ fontWeight: 'bold' }}>Next Page</span> see what marks you gave yourself related to your confidence level at the
										beginning of the course, and where you stand today.
									</p>
									<br/>
									<p>We welcome suggestions on how we can improve or modify this course. We are also interested in your feedback or suggestions regarding the <span style={{fontWeight:"bold"}}>Darshan Academy Spiritual Curriculum</span>. 
									Please send your feedback and suggestions to: <span style={{fontWeight:"bold"}}>info@darshanacademy.org</span></p>
								</div>
							</div>


							{/* Page 6 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Rate 1 and 2"
								></Heading>
								<br/>
								<div className="text-black">
									 <div style={{backgroundColor:"#4e0ab5",padding:"25px 9% 18px 9%"}}>
										<p className="heading_yellow fs-12">Rate #1</p>
									 </div>
									<ActivityWrapper activityInfo={{
										moduleId: 15,
										chapter: 5,
										activityKey: '1'
									}} activityType={RATING} showSubmit={false} notShowLines
									showMessageForUnfilled
									/>
									<br/>
									 <div style={{backgroundColor:"#4e0ab5",padding:"25px 9% 18px 9%"}}>
										<p className="heading_yellow fs-12">Rate #2</p>
									 </div>
									<ActivityWrapper activityInfo={{
										moduleId: 1,
										chapter: 2,
										activityKey: '1'	
									}} notShowLines activityType={RATING} showSubmit={false} />
								</div>
							</div>

							{/* </div> */}
						</div>
					</div>
				</div>
				{/* /* </div> */}
			</div>
			// </div>
		);

	}
}
export default Module15;
