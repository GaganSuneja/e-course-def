import React from 'react';
import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import './index.scss';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper';
import { MCQ_QUESTION, TRUE_FALSE, FILL_IN_BLANK } from '../../../constants';
class Module9 extends React.Component {
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
          isVideo2: false,
        });
        break;
      case '2':
        this.setState({
          isVideo: false,
          isVideo1: !this.state.isVideo1,
          isVideo2: false,
        });
        break;
      case '3':
        this.setState({
          isVideo: false,
          isVideo1: false,
          isVideo2: !this.state.isVideo2,
        });
        break;
    }
  }

  render() {
    const iconStar = <i className="icon-star"></i>;
    const iconCircle = <img className="check-circle" src='../../../../assets/chapters/15/check-circle.svg'/>
		const { showNextModule, showPrevModule } = this.props;
    const txtP1_p1="There is a different Spiritual Curriculum course for each level, from grade 1 – 8. The same major units are covered in each grade level but with new topics and at a higher level of understanding. While the broad major units are repeated, there are no repetitions of individual topics or lessons from grade level to grade level."
    const txtP1_p2="The unit on Key Principles of Spirituality focuses on the underlying teachings and similarities found in different faiths and traditions. These topics teach the students that we have not only a body and a mind, but also a soul, and that meditation helps us find who we are as a soul. The topics explore views about the soul, God, meditation, the spiritual teacher, saints, ethical living and how to lead a spiritual life in the modern world or how to balance one’s physical, mental and spiritual activities in life."
    const txtP1_p3="The topic in this unit deals with how to get along with other people and learning to have respect for all people, irrespective of differences, and having respect for our planet and all life."
    const txtP3_p1="Projects give students an opportunity to explore a variety of personal and group projects in which they can go into more depth on some of the Spiritual Curriculum topics learned in the course";
    const txtP3_p2 = "Through selfless service, helping people in need and improving the ecological environment,students develop the concept of using their knowledge to make positive contributions to society. Students can put on a cultural program related to a theme they learned in the Spiritual Curriculum. They work together to achieve a common goal and use dramatic, artistic and musical skills to express spiritual values.";
    const txtP3_p3 = "During special weeks based on love, service, kindness, human unity and peace, students engage in various activities, such as a quiz, presentations, debates, cultural programs and community service.";
    const txtP4_p1= "The meditation topic in the Spiritual Curriculum deals with the theoretical aspect of meditation, how to meditate, why we should meditate and the benefits of meditation.At Darshan Academy, students meditate for ten minutes at the beginning of the school day."
    const txtP4_p2="The meditation instructions by Sant Rajinder Singh Ji Maharaj can be found at the back of every Spiritual Curriculum teacher manual. This is a simple technique of meditation which can be practised by people of all ages and faiths."
    const txtP4_p3="The practical experience of meditating is an important component of the Spiritual Curriculum.It is while meditating that we can experience the peace and bliss of our soul. Please do not ask students about their inner experiences. These are personal experiences. Teachers in the class should follow the meditation instructions given in the Spiritual Curriculum teacher manual and avoid mixing it with any other techniques. The teacher can read the instructions from the teacher manual once per week in class to remind the students how to meditate."
    const txtP4_p4="Introspection helps us develop the qualities of nonviolence, truthfulness, humility and selfless service, which form the basis of our spiritual life when combined with regular meditation."
    const txtP4_p5="Introspection creates a greater sense of self-awareness by focusing our attention on our patterns of behaviour at school, home or play. We learn to take more responsibility of our behaviour."
    const txtP5_p1="The nonviolence topic focuses on not hurting anyone with words, thoughts and deeds. Students learn how to act in situations at home and school, and deal with them nonviolently. They learn about great people who practised nonviolence. They learn about using nonviolence to make a peaceful world."
    const txtP5_p2="The topic truthfulness deals with the various failures of falsehood, stealing, lying, gossip, hypocrisy and deceit. Students learn about the importance of honesty and earning our livelihood honestly. The topic illustrates how developing truthfulness accelerates our spiritual journey. In grade eight the students learn how various people have searched for spiritual truth."
    const txtP5_p3="The topic humility explores the many faces of the ego: Pride of knowledge, pride of power and pride of wealth. Students learn about the importance of our thoughts and words and that we should not think that we are better, smarter or richer than others. They learn how to talk to and deal with others with humility and how to use humility in everyday situations. Gratitude is a by-product of humility. Students study examples of humility throughout history and current events."
    const txtP5_p4="Students learn that we are all one family and are connected. They learn the importance of loving others in our life. The topic focuses on how to act lovingly in daily situations and how to chart our progress in love for all. It might be easy to love our friends, but this topic also focuses on how to have love for people who are different from us or who do not agree with us. In grade seven students study examples in history and current events of love for God and love for all."
    const txtP7_p1="Selfless service means acting without any desire for a reward or recognition. It is given out of love and a desire to help others. We break out of our own comfort zone to reach out to others. Students explore opportunities that arise for selfless service in our daily life, in the family, classroom, community and at a global level. They learn about the different categories of selfless service: physical, financial, intellectual, and spiritual. Students study examples of selfless service through history and current events. They not only study the topic, but also engage in service related to helping people in need and in improving the ecological environment."
    const txtP7_p2="The Spiritual Curriculum introduces students to the topic Compassionate Diet. They learn about the benefits of a vegetarian diet and vegetarian cooking. Vegetarians eat fruits, grains, vegetables, dairy products, legumes, pulses and nuts. They do not eat meat, fish or eggs. Students learn how to eat when they are with non-vegetarian friends and at parties. They learn the health benefits of being a vegetarian, as well as the emotional and spiritual benefits that involve nonviolence and compassion for animals. Students study examples of famous vegetarians through history and in current events. Darshan Academy only permits vegetarian food in the school premises. Students are requested to bring only vegetarian food for their lunch and snacks."
    const txtP7_p3="The topic Personal Goal Setting helps students set goals for themselves, for their personal and spiritual growth. They learn how to set goals and design an action plan for their health, school work and for meditation. They learn how to track their progress over a set period of time. Students also learn to set goals for a group level and for team efforts. In grade eight students learn how to set goals for their career plans and learn about examples from history of people who set goals and attained them."
    const txtP7_p4="Key Principles of Spirituality focuses on the teachings of the saints of various backgrounds. The word saint encompasses a variety of terms including saints, mystics, enlightened beings, spiritual Masters and realized souls. It is the study of the essence of the spiritual teachings. The topic starts by teaching that we have not only a body and a mind, but also a soul, and that meditation helps us find who we are as a soul."
    const txtP8_p1="The topic of “The Role of a Spiritual Master” introduces students to how a spiritual teacher helps us, by teaching us how to meditate, lead a good life and by helping us with our questions and problems. Students study the lives of various spiritual  Masters."
    const txtP8_p2="“Living a Spiritual Life in the Modern World” means that we remain in the world, in our own society, culture, faith and family and fulfill our duties and responsibilities along with developing spiritually. We have obligations towards our family, our jobs, our education, career, community and the world. However it is also important to find time to meditate, do selfless service and progress spiritually. Living a spiritual life in the modern world means finding a balance between our spiritual and worldly life. The symbol used to show this balance is the lotus flower. It grows in the muddy water (the world), but its flower remains dry and faces the light. Students learn how to attend to worldly responsibilities and keep spiritual goals in their daily life."
    const txtP8_p3="Students learn how to resolve conflicts in a peaceful way. The topic Conflict Resolution teaches cooperation and communication skills as building blocks to resolving conflicts peacefully. It also teaches tolerance and being able to see other people’s points of view, as important skills and attitudes in conflict resolution. Students learn how to brainstorm solutions to a conflict."
    const txtP8_p4="They learn to express their feelings and needs and recognize these in other people. Students learn how to solve conflicts at home, on the playground and in the community peacefully. They explore conflicts in current events and models of conflict resolution. They actively use conflict resolution in student government and leadership positions to help make the world a better place."

    const welcomeVideo = {
      btn_text: 'Video',
      src: '../../../../assets/chapters/8/8.mp4',
    };
    const secondVideo = {
      btn_text: 'Watch a video on 10 Benefits of Meditation.',
      src: '../../../../assets/chapters/4/WM-10 Reasons of Meditation.mp4',
    };
    const thirdVideo = {
      btn_text: 'Great Indian Schools, by India Today Video',
      src: '../../../../assets/chapters/1/2.mp4',
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
    return (
      <div className="ch-container_9">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 9</span>
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
            onClick={() => showPrevModule('8')}
					>
					<span className="carousel-previous-icon"></span>
					</a>
					<a
						className="carousel-container-next"
						href="#demo"
						data-slide="next"
						onClick={() => showNextModule('10')}
					>
					<span className="carousel-next-icon"></span>
					</a>
					<a
						className="carousel-container-prev-bottom"
						href="#demo"
						data-slide="prev"
            onClick={() => showPrevModule('8')}
					>
					<span className="carousel-previous-icon"></span>
					</a>
					<a
						className="carousel-container-next-bottom"
						href="#demo"
						data-slide="next"
            onClick={() => showNextModule('10')}
					>
					<span className="carousel-next-icon"></span>
					</a>

			
          <div id="demo" className="carousel slide" data-interval="false">
            <div className="carousel-inner">
              <div className="carousel-item active"  data-id-prev="101">
                <Heading
                  isUp={true}
                  heading="Scope and Sequence Grade 1 to 8"
                ></Heading>

                <div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
                  {!this.state.isVideo && (
                    <img src="../../../assets/chapters/9/module9-page1.png" />
                  )}
                  {this.state.isVideo && videoPlayer}
                </div>

                <PrimaryButton
                  OnClick={(e) => {
                    this.playVideo(e, '1');
                  }}
                  btn_text={welcomeVideo.btn_text}
                ></PrimaryButton>
                <div className="text-black pt-10">
                  
                  <p>
                    {txtP1_p1}
                  </p>
                  

                  
                </div>
              </div>
              <div className="carousel-item">
                <Heading
                  isUp={true}
                  heading="How the Units are Divided"
                ></Heading>
                <div className="banner-container">
									{/* {!this.state.isVideo && ( */}
										<img src="../../../assets/chapters/9/module9-page2.png" />
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
                <div className="text-black" style={{ paddingTop: '20px' }}>
                  <p className="text-blue-bold">
                    There are three main units in Grade 1 to 8:
                  </p>
                  <div className="div_table_bottom">
                    <table className="list-circle">
                      <tbody>
                      <tr>
                        <td>
                          {iconStar}
                         </td> 
                         <td>
                           Personal Spiritual Development
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Key Principles of Spirituality
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Getting Along with and Respecting Others and Life
                         </td>
                      </tr>
                      </tbody>

                    </table>
                  </div>
                  <p className="text-blue-bold">
                    1. Personal Spiritual Development
                  </p>
                  <p>The topics in Personal Spiritual Development focus on ethical living, meditation and attaining one's goals</p>
                  <p className="text-blue">
                    The lessons included are:
                  </p>
                  <div className="div_table_bottom">
                    <table className="list-circle">
                    <tbody>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Meditation
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 

                         <td>
                           Introspection
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Nonviolence
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Truthfulness
                         </td>
                      </tr>
                      <tr>
                        <td>{iconStar}
                         </td> 
                         <td>
                           Humility
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Love for All and Love for God
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Selfless Service
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Compassionate Diet
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Personal Goal Setting
                         </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-blue-bold">
                    2. Understanding Key Principles of Spirituality
                  </p>
                  <p>
                    {txtP1_p2}
                  </p>
                  <div className="div_table_bottom">
                    <table className="list-circle">
                    <tbody>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           Key Principles of Spirituality
                         </td>
                      </tr>
                      <tr>
                        <td>
                        {iconStar}
                         </td> 
                         <td>
                           The Role of a Spiritual Master
                         </td>
                      </tr>
                      <tr>
                        <td>
                          {iconStar}
                         </td> 
                         <td>
                           Living a Spiritual Life in the Modern World
                         </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                 <div className="text-black">
                  <ActivityWrapper activityInfo={{
											moduleId: 9,
											chapter: 2,
											activityKey: '1'
										}} activityType={TRUE_FALSE}/>
                  </div>
                  {/* //To do True and False */}
                  <p className="text-blue-bold">
                    3. Getting Along with and Respecting Others and Life
                  </p>
                  <p>
                    {txtP1_p3}
                    </p>
                    <div className="div_table_bottom">
                    <table className="list-circle">
                    <tbody>
                    <tr>
                        <td>
                          {iconStar}
                         </td> 
                         <td>
                           Conflict Resolution
                         </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <Heading
                  isUp={true}
                  heading="Projects"
                ></Heading>
                <div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
                  <img src="../../../../assets/chapters/9/module9-page3.png" />
                </div>
                <div className="text-black pt-10">
                <div className="div_table_bottom">
                  <table className="list-circle_p7_m14">
                    <tbody>
                    <tr>
                      <td>
                      {iconCircle}
                      </td>
                      <td>
                        Projects Related to Topics
                      </td>

                    </tr>
                    <tr>
                      <td>
                      {iconCircle}
                      </td>
                      <td>
                        Selfless Service Projects
                      </td>

                    </tr>
                    <tr>
                      <td>
                      {iconCircle}
                      </td>
                      <td>
                        Presentation of Cultural Program
                      </td>

                    </tr>
                    <tr>
                      <td>
                      {iconCircle}
                      </td>
                      <td>
                        Special Weeks
                      </td>

                    </tr>
                    </tbody>
                  </table>
                  </div>
                  <p className="text_p3_m9">
                    {txtP3_p1}
                  </p>
                  <p>
                    {txtP3_p2}
                    <br/>
                    <br/>
                    {txtP3_p3}
                  </p>
                {/* </div> */}

                 {/* </div> */}
                 </div>
              </div>
              <div className="carousel-item">
                <Heading
                  isUp={true}
                  heading="Scope and Sequence Grade 1 to 8"
                ></Heading>
                <div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
                  <img src="../../../assets/chapters/9/module9-page4.png" />
                </div>
                <div className="text-black pt-10">
                  <p className="text-blue-bold">Meditation</p>
                  <p>
                    {txtP4_p1}
                    <br/>
                    {txtP4_p2}
                    <br/>
                    {txtP4_p3}
                  </p>
                  <p className="text-blue-bold">Introspection</p>
                  <p>
                    {txtP4_p4}
                    <br/>
                    {txtP4_p5}
                  </p>
                  <ActivityWrapper
                   activityInfo={{ moduleId: 9, chapter: 4, activityKey: 1 }} activityType={FILL_IN_BLANK} 
                />
                </div>
              </div>
              <div className="carousel-item">
                <Heading isUp={true} heading="Scope and Sequence Grade 1 to 8"></Heading>
                <div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
                  <img src="../../../assets/chapters/9/module9-page5.png" />
                </div>
                <div className="text-black pt-10">
                  <p className="text-blue-bold">Nonviolence</p>
                  <p>
                    {txtP5_p1}
                  </p>
                  <p className="text-blue-bold">Truthfulness</p>
                  <p>
                    {txtP5_p2}
                  </p>
                  <p className="text-blue-bold">Humility</p>
                  <p>
                    {txtP5_p3}
                  </p>
                  <p className="text-blue-bold">Love for God And Love for All</p>
                  <p>
                    {txtP5_p4}
                  </p>
                </div>
              </div>
              <div className="carousel-item">
              <ActivityWrapper activityInfo={{
											moduleId: 9,
											chapter: 6,
											activityKey: '1'
										}} activityType={TRUE_FALSE}/>
              </div>
              <div className="carousel-item">
                <Heading isUp={true} heading="Scope and Sequence Grade 1 to 8"></Heading>
                <div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
                  <img src="../../../assets/chapters/9/module9-page7.png" />
                </div>
                <div className="text-black pt-10">
                  <p className="text-blue-bold">Selfless Service</p>
                  <p>
                    {txtP7_p1}
                  </p>
                  <p className="text-blue-bold">Compassionate Diet</p>
                  <p>
                    {txtP7_p2}
                  </p>
                  <p className="text-blue-bold">Personal Goal Setting</p>
                  <p>
                    {txtP7_p3}
                  </p>
                  <p className="text-blue-bold">Key Principles of Spirituality</p>
                  <p>
                    {txtP7_p4}
                  </p>
                </div>
              </div>            
              <div className="carousel-item">
                <Heading isUp={true} heading="Scope and Sequence Grade 1 to 8"></Heading>
                <div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
                  <img src="../../../assets/chapters/9/module9-page8.png" />
                </div>
                <div className="text-black pt-10">
                  <p className="text-blue-bold">The Role of a Spiritual Master</p>
                  <p>
                    {txtP8_p1}
                  </p>
                  <p className="text-blue-bold">Living a Spiritual Life in the Modern World</p>
                  <p>
                    {txtP8_p2}
                  </p>
                  <p className="text-blue-bold">Conflict Resolution</p>
                  <p>
                    {txtP8_p3}
                    <br/>
                    {txtP8_p4}
                  </p>
                   
                  <ActivityWrapper activityInfo={{
											moduleId: 9,
											chapter: 8,
											activityKey: '1'
										}} activityType={MCQ_QUESTION}/>
                </div>
              </div>
              <div className="carousel-item" data-id-next="101">
                <Heading isUp={true} heading="Spiritual Curriculum Lesson in the Classroom"></Heading>
                
                <div className="text-black pt-10">
                    <p className="sub_head_p9_m10">
                    <img className="img_Activity_p4_m13" src ="../../../../assets/chapters/9/video-icono-01.svg"/>Enjoy watching a video of a Spiritual Curriculum lesson. Write effective practices you saw demonstrated. Note if there is anything you might do differently in the lesson observed.
                    </p>
                    <video className="video_p1_m11" src="../../../../assets/chapters/9/9.mp4" controls/>
                   
                </div>
              </div>    
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Module9;
