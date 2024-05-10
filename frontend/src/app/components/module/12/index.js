import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import { PrimaryButton } from '../../buttons';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper';
import {FILL_IN_BLANK} from '../../../constants';
class Module12 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVideo: false, isVideo1: false, isVideo2: false };
		// this.state = {isSelected:false};
		this.playVideo = this.playVideo.bind(this);
		// this.selectRadiobtn =  this.selectRadiobtn.bind(this);
	}
	// playVideo(e, param) {
	playVideo() {
		this.setSState({ isVideo: !this.state.isVideo });
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
		const iconCircle = <img className="check-circle" src='../../../../assets/chapters/15/check-circle.svg'/>
		const txtP1_p1="Welcome to the next module on Evaluation. Assessing whether students have met the goals of the lessons is essential. There are many ways to evaluate student progress towards the goals.Traditionally, written tests were the main methods used in schools, but it is suggested that various other methods be used as well. There are times when a written test is important, such as for assessing whether students know the definitions of vocabulary words or have simple recall of what they read. The written test can also have questions inviting students to be creative and apply what they learned."
		const txtP1_p2="There are participation activities and goal-setting charts in the workbooks which students can learn to user as a method of taking resposibility for their own growth."
		const txtP3_p1="The impact of the Spiritual Curriculum on the behaviour of the students can be observed throughout the year by the teacher. Students can also be asked to reflect on their own behaviour and participation and self-appraise themselves."
		const txtP3_p1_2= "The Spiritual Curriculum has activities, stories and situations that can lead to discussions on ways to behave positively. Can the students grasp why some behaviours are right or wrong? Students learn to set goals for body, mind and soul and how to apply peaceful conflict resolution techniques."
		const txtP4_p1="At Darshan Academy the written assessments for the Spiritual Curriculum are framed as per specified blueprints for different grade levels. Assessment activities and questions cover these four areas:"
		const txtP5_p1="Various projects and activities have been designed for assessing the students’ understanding of the Spiritual Curriculum at Darshan Academy. Enrichment activities used for assessment are specified in the yearly syllabus."
		return (
			<div className="ch-container_12">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 12</span>
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
						onClick={() => showPrevModule('11')}
					>
					<span className="carousel-previous-icon"></span>
					</a>
					<a
						className="carousel-container-next"
						href="#demo"
						data-slide="next"
						onClick={() => showNextModule('13')}
					>
					<span className="carousel-next-icon"></span>
					</a>
					<a
						className="carousel-container-prev-bottom"
						href="#demo"
						data-slide="prev"
						onClick={() => showPrevModule('11')}
					>
					<span className="carousel-previous-icon"></span>
					</a>
					<a
						className="carousel-container-next-bottom"
						href="#demo"
						data-slide="next"
						onClick={() => showNextModule('13')}
					>
					<span className="carousel-next-icon"></span>
					</a>

					
					{/* <div id="demo" className="carousel slide" data-interval="false"> */}
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Evaluation"
								></Heading>

											
								<div className="banner-container">
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/12/module12.png" />
									)}
									{videoPlayer}
								</div>
								{/*  */}
								<PrimaryButton
									OnClick={this.playVideo}
									btn_text={welcomeVideo.btn_text}
									className={"mt-40 mb-40"}
								></PrimaryButton>

								
								<div className="text-black pt-10">
                <p>
                      {txtP1_p1}
                      <br/>
                      <br/>
                      
                  </p>
                  <p className="text-blue-bold">
                    In addition, the following methods of evaluation can also be employed:
                  </p>
					<div className="div_table_bottom">
						<table className="list-circle">
							<tbody>
							<tr>
							<td>{iconCircle}</td>
							<td>
								Listening to students' oral reports and discussions
							</td>							
							</tr>
							<tr>
							<td>{iconCircle}</td>
							<td>
								Reviewing entries in their workbooks and notebooks
							</td>
							
							</tr>
							<tr>
							<td>{iconCircle}</td>
							<td>
								Looking at their projects, activities and group work
							</td>
							
							</tr>
							<tr>
							<td>{iconCircle}</td>
							<td>
								Observing class participation and behaviour
							</td>
							
							</tr>
							<tr>
							<td>{iconCircle}</td>
							<td>
								Students can self-evaluate their own progress
							</td>
							</tr>
							</tbody>
							</table>
							</div>
							<br/>
							<p>
							{txtP1_p2}                    
							</p>
					</div>
							</div>
							{/* Page 2 */}
							{/* To Do- horizontal line, alignment to the left, image */}
							<div className="carousel-item">
			<Heading isUp={true} heading="Evaluation Criteria"></Heading>
			{/* <br />
			<br />
			<br /> */}
			<div className="banner-container">
				{/* {!this.state.isVideo && ( */}
					<img src="../../../assets/chapters/12/module12-page2.png" />
				{/* )} */}
				{/* {videoPlayer} */}
			</div>
			
			<div className="text-black pt-10">
			<br/>
			<p className="text-blue-bold">
				At Darshan Academy the students are evaluated under four major headings:
			</p>
			<div className="div_table_bottom">
			<table className="list-circle">
					<tr>
					<td>{iconCircle}</td>
					<td>
						Written Assessment
					</td>
					
					
					</tr>
					<tr>
					<td>{iconCircle}</td>
					<td>
						Participation in Class
					</td>
					
					</tr>
					<tr>
					<td>{iconCircle}</td>
					<td>
						Class Behaviour
					</td>
					
					</tr>
					<tr>
					<td>{iconCircle}</td>
					<td>
						Enrichment Activities
					</td>
					
					</tr>
					
					</table>
					</div>
                    <br/>
                   <br/>
                   <br/>
                   <br/>
                    <img src="../../../assets/chapters/12/marks-copy.png" />
                  </div>
							</div>
							{/* Page 3 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Class Participation and Class Behaviour"
								></Heading>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/12/module12-page3.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>								
								<div className="text-black pt-10">
								<p>
									{txtP3_p1}
									<br/>
									{txtP3_p1_2}
								</p>
                  <div className="button_introspectionDiary_p3_m12">
											<span>Examples of Positive Student Behaviour:</span>
										</div>
										<div className="div_table_bottom">
                    <table className="list-circle">
										<tr>
										<td>{iconCircle}</td>
										<td>
                      Expressing ethical values, like honesty, nonviolence and humility
										</td>									
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                      Being helpful and kind
										</td>							
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                      Caring towards others and the environment
										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                      Having an attitude of respect for others and display of good manners
										</td>			
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
                     Setting realistic goals for body, mind and soul and taking responsibility for achieving targets
										</td>
										</tr>
										</table>
										</div>
                </div>
                <div className="text-black pt-10">
                  <div className="button_ClParticipation_p3_m12">
											<span>Examples of Positive Class Participation:</span>
									</div>
                  <div className="div_table_bottom">
                    <table className="list-circle">
										<tr>
										<td>{iconCircle}</td>
										<td>
                     Completing tasks assigned in workbook and other activities
										</td>
										
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                      A positive attitude to class work
										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                     Taking initiatives in activities and doing one’s share in group work

										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                    Communication: Speaking politely and listening attentively
										</td>
										
										</tr>
                   
										</table>
										</div>
                    
                    <br/>
                    
                    <p className="text-pink-bold">
                    Resources
                    </p>
                    <p>
                    There is a Class Behaviour and Participation Checklist for different grade levels in 
                    Darshan Academy. 
                    <em className="text-pink" >You can find this checklist under Resources.</em>
                    </p>
                  </div>
							</div>
							{/* Page 4 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Darshan Academy Guidelines for Framing Spiritual Curriculum Written Assessments"
								></Heading>
                <div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/12/module12-page4.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
                  <p>
                    {txtP4_p1}
                  </p>
				  <div className="div_table_bottom">
                  <table className="list-circle">
										<tr>
										<td>{iconCircle}</td>
										<td>
                     Knowledge
										</td>	
										
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                      Understanding
										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                     Application

										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                    Creative Activites
										</td>
										
										</tr>
                   
										</table>
									</div>
                </div>
                <div className="button_ClParticipation_p4_m12">
					<span>
						Example of Knowledge Questions
					</span>
				</div>
				<div className="div_table_bottom">
                <table className="list-circle">
										<tr>
										<td>{iconCircle}</td>
										<td>
                     Colombia
										</td>
										
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                      Matching
										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                     Fill in the Gap

										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                    Write a list
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
                    Can you name
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
                    Who said/did/was,etc.
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
                    Odd one out
										</td>
										
										</tr>
										</table>
                </div>
                <div className="button_ClParticipation_p4_2_m12">
					<span>
						Examples of Questions for Understanding
					</span>
				</div>
				<div className="div_table_bottom">
                <table className="list-circle">
										<tr>
										<td>{iconCircle}</td>
										<td>
                     What is the main idea of... ?
										</td>
										
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                      Can you provide an example of... ?
										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                     Can you write in your own words... ?

										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
                    What difference exists between... ?
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
                    How do you feel .....What do you think about... ?
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
                    Why... ?
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
                    Compare with
										</td>
										
										</tr>
										</table>
                </div>
				<div className="button_ClParticipation_p4_3_m12">
					<span>
						Examples of Application Questions
					</span>
				</div> 
				<p className="text-black pt-10">
					Students are described that demand a response/decision from the student.
				</p>
				<div className="div_table_bottom">
                <table className="list-circle">
										<tr>
										<td>{iconCircle}</td>
										<td>
											How would you react in this situation?		
										</td>
										
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
											How would you respond to this?
										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
											What could you say in this situation?

										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
											What do you see as other possible outcomes?
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
											What would happen if... ?
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
											Fill in a graphic organizer
										</td>
										
										</tr>
                    
										</table>
								</div>
				<div className="button_ClParticipation_p4_4_m12">
					<span>
						Examples of Creative Activities
					</span>
				</div> 
				<div className="div_table_bottom">
				 <table className="list-circle">
										<tr>
										<td>{iconCircle}</td>
										<td>
											Design a poster		
										</td>
										
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
											Design an advert
										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
											Write an alternative ending

										</td>
										
										</tr>
										<tr>
										<td>{iconCircle}</td>
										<td>
											How many ways you can think of 
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
											Brainstorm
										</td>
										
										</tr>
                    <tr>
										<td>{iconCircle}</td>
										<td>
											Plan an event
										</td>
										
										</tr>
                    
										<tr>
										<td>{iconCircle}</td>
										<td>
											Can you think of uses for
										</td>
										
										</tr>
										</table>
										</div>
										<br/>
										<div className="text-black pt-10">
										<p className="text-pink-bold">
                    						Resources
										</p>
										<p>
										You can find the Guidelines for Framing a Written Assessment under <em className="text-pink-bold">Resources</em> and download the required blueprint for the grade level you need
                    
                    					</p>
										</div>

                </div>			
							{/* Page 5		 */}
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Spiritual Curriculum Enrichment Activities"
								></Heading>
								
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/12/module12-page5.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>								
								<div className="text-black pt-10">
                 					 {txtP5_p1}
								</div>
								<div className="button_ClParticipation_p5_m12">
								<span>
									Examples of Enrichment Activities for Different Grade Levels
									</span>
							</div>		
						<div className="div_table_bottom">
							<table className="list-evaluation" >
								<tr>
									<td className="text-blue-bold">
										Grade 1  
									</td>
									<td>
										Show and Tell: Bring a picture card of any one of God’s creations you love and say a few lines about your choice.
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 2  
									</td>
									<td>
									Bring a picture of a famous personality and explain why he or she inspires you and how you can achieve your goal like him or her.	

									</td>
								</tr>
								<tr>
									<td  className="text-blue-bold">
										Grade 3  
									</td>
									<td>
									Present a story related to any ethical virtue in groups. Use props.
				
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 4 
									</td>
									<td>
									Draw a pie chart of activities you can engage in to keep your life balanced.
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 5 
									</td>
									<td>
									Group role play: Enact a given situation and show a peaceful solution.
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold" >
										Grade 6
									</td>
									<td>
									Imagine you are going to open a vegetarian restaurant. Design a menu card.

									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 7 
									</td>
									<td>
									Interview people to find out how they balance their spiritual goals and worldly responsibilities.
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 8            
									</td>
									<td>
									Interview people to find out how they balance their spiritual goals and worldly responsibilities.
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 9 
									</td>
									<td>
									Fishbowl discussion on topics, like: What are the things that prevent us from being at peace with ourselves? What can I do to bring about a sense of peace when I am involved in a conflict?

									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 10   
									</td>
									<td>
									Create a radio advert about the dangers of alcohol and drugs.
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 11 
									</td>
									<td>
									Write a poem on any topic from your Spiritual Curriculum and recite it in class.
									</td>
								</tr>
								<tr>
									<td className="text-blue-bold">
										Grade 12
									</td>
									<td>
									Organise a class conference on “Peace.”
									</td>
								</tr>
								</table>
								</div>
								<br/>
								<br/>
							<div className="bottom_p5_m12">
								<br/>
								<div className="bottom_button_p5_m12"> 
									Activity
								</div>
								<br/>
								<div className="text_bottom_button_p5_m12">
								<p>
									Discuss the method of evaluation used in your school with your teacher trainer.
								</p>
								</div>
							</div>

			  				</div>
							
							<div className="carousel-item" data-id-next="101">
							<ActivityWrapper activityInfo={{
										moduleId: 12,
										chapter: 6,
										activityKey: '1'
									}} activityType={FILL_IN_BLANK} />
								</div>
						</div>
					</div>
				{/* /* </div> */ }
			 </div>
			//  </div>
		);

	}
}
export default Module12;
