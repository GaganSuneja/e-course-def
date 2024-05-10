import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper';
import { FILL_IN_BLANK, MCQ_QUESTION, TRUE_FALSE } from '../../../constants';

class Module13 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideo: false,
      isVideo1: false,
      isVideo2: false,
      showMatchingActivityResult: false,
      chapterWiseQuestion: props.chapterWiseQuestion,
      matchingActivityResult: null,
      activateSubmitButton: false,
      moduleUserProgress: props.moduleUserProgress,
      userId: this.props.userId
    };

    this.playVideo = this.playVideo.bind(this);
    this.activateSubmitButton = this.activateSubmitButton.bind(this);
    this.submitMatchingActivity = this.submitMatchingActivity.bind(this);
  }

  activateSubmitButton(results, activate) {
    this.setState({ ...this.state, activateSubmitButton: activate, matchingActivityResult: results });
  }

  submitMatchingActivity(e){
    this.setState({ ...this.state, showMatchingActivityResult: true, activateSubmitButton: false });
    console.log('submit button activated:::', this.state);
    const progressObject = {
      moduleId: 13,
      chapter: 6,
      activityType: 'fillInBlank',
      activityKey: '1',
      data: this.state.matchingActivityResult
    };
    this.props.saveModuleProgress(2, this.state.userId, progressObject);
    // do api call here
    console.log(this.state.responses);
  }

  // playVideo(e, param) {
  playVideo() {
    this.setState({ isVideo: !this.state.isVideo });
  }

  setMatchingActivity() {
    const userMatchingActivity = this.state.moduleUserProgress?.['chapterProgress']?.[0]?.['data'];
    return userMatchingActivity ? userMatchingActivity: this.state['chapterWiseQuestion']?.['6']?.['fillInBlank']?.['1']?.[0];
  }

  render() {
    const matchingActivity = this.setMatchingActivity();
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
    if (this.state.isVideo) {
      videoPlayer = <VideoPlayer src={welcomeVideo.src}/>;
    }
    if (this.state.isVideo1) {
      videoPlayer2 = <VideoPlayer src={secondVideo.src}/>;
    }
    if (this.state.isVideo2) {
      videoPlayer3 = <VideoPlayer src={thirdVideo.src}/>;
    }
    const iconStar = <i className="icon-star"/>;
    const { showNextModule, showPrevModule } = this.props;
    const txtP1_p1 = 'Students need to feel welcomed, safe and not threatened within the school and classroom environment.  This requires genuine and empathetic communications between the teacher and the students.  It is only after such communications are verified and the welcoming environment established, that the learning process can really begin.';

    const txtP1_p2 = 'Once the teacher establishes this environment, the student will feel accepted (by the teacher and peer group), stress decreases, fear of failure dissipates and a positive emotional environment ensues.';

    const txtP1_p3 = `There are specific techniques and methods which may be considered when establishing this "Welcoming Environment". In the following learning segment, we will review and consider a few of the methods and interventions that may be used to facilitate a welcoming educational environment.`;
    const txtP2_p1 = 'When a student enters a classroom, they look for signs that they are welcomed, safe and respected within the environment.  Research has shown that the human brain functions better and is more receptive to learning if the surroundings are safe and inviting.  If on the contrary, the child feels threatened, unsafe or unwelcomed, real learning is more difficult to achieve.Teachers are a major key to student learning and can welcome each student as they arrive to class and to school. Remember that our interactions and behaviours towards each student are critical components in the process.  Welcoming students with their name and a ';
    const txtP2_p2 = 'on classroom participation (even if a student response is not exactly what is requested), will motivate students to continue to participate.';
    const txtP2_p3 = 'We can celebrate achievements by displaying assignments and pictures by the students.';
    const txtP2_p4 = 'At certain levels, photos of students involved in different activities and a birthday class chart can be displayed on notice boards. An ice breaker game can help students get to know each other better.';

    const txtP2_p5 = ' suggests and encourages collaborative activities which can promote a positive class spirit. Students look forward to social interactions with the other students. The teacher can facilitate students working in pairs and groups in order to support such interactions. Examples may include, think-pair-share activity, group discussions, group presentations, songs and role playing. Once a student feels involved in the learning experience, this may result in “long term learning retention” of the topics and material.';
    const txtP2_p6 = 'The teacher’s enthusiasm, expectations, facial expressions, gestures (body language), voice pitch, and volume may all have a direct correlation with student motivation and achievement.';
    const txtP3_p1 = 'Students have to be treated fairly and equally. Favouritism for some and not others can harm motivation and learning. Children notice how you treat others and will feel more emotionally safe and secure if they see that you care about the learning and happiness of each and every one of them. Teachers really need to be an example of equality, demonstrating respect and sincere concern for each and every student. One perspective to view the classroom is to understand that each student could be considered as your own child and with this point of view we can judge our own behaviours as teachers.';
    const txtP5_p1 = 'One of the most important factors related to effective teaching is having good relationships with students. When students were asked, “What can teachers do to help you feel welcome at school?” they mentioned two simple things, “Greet me by name and smile.” In contrast, when students were asked, “What is the most damaging thing teachers can do?” students shared ways they feel humiliated by teachers. There are simple things we can do to help children feel welcome at class. Unfortunately, there are also small ways we might make a child feel humiliated. No matter what happens, we should always do our best to treat children with respect. Children watch the way we treat others. They learn from us and decide whether or not they are emotionally safe with us and whether they can trust us. ';
    const txtP5_p2 = 'Feedback is an important teaching strategy to support learning. Positive feedback builds relationships and is a very effective teaching tool. When students make mistakes, whether they are behavioral mistakes or mistakes related to concepts they are learning, it is important to provide feedback. When mistakes are made, if at all possible, provide feedback privately. Also, feedback is best when it is specific, brief, immediate and positive (not just what shouldn’t be done, but also stating the correct answer or appropriate behaviour).';
    const txtP5_p3 = 'One question teachers are often faced with is how to motivate their students. For children and adults, motivation is heavily influenced by whether we judge if we can be successful with a task. We tend to have more motivation for tasks that we are more successful with. Another way to say it is that motivation is tied to the perceived probability of success. Can I do it? If you asked me to jump over a building then I would have no motivation. No matter how hard I try, I know I could not do it, so I lack motivation. That is an absurd example but some tasks we give children might seem that difficult to them.';
    const txtP5_p4 = 'If you find that children seem unmotivated then one question to ask is whether they have experienced success. If not, then as a teacher you can try different ways to help them experience success. You might break the task down and demonstrate or model for them how to do the task. Consider, do any of the children seem to lack motivation and what are some ways I can help them experience true success?';
    const txtP5_p5 = 'A second factor tied to motivation is how much we value something. It is important to share with children the value of the lessons being taught and skills being learned. The teacher’s preparation and positive attitude about a topic helps tremendously to show value and encourage motivation for children.';
    const txtP5_p6 = 'Student motivation can also be influenced by their relationship with the teacher. A strong, positive relationship with the teacher benefits children in so many ways. It helps behaviour, motivation and learning.';
    const iconCircle = <img className="check-circle" src='../../../../assets/chapters/15/check-circle.svg'/>;
    return (
      <div className="ch-container_13">
        <div className="ch-container__section">
          <div className="header_container">
            <span>Module 13</span>
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
              onClick={() => showPrevModule('12')}
            >
              <span className="carousel-previous-icon"/>
            </a>
            <a
              className="carousel-container-next"
              href="#demo"
              data-slide="next"
              onClick={() => showNextModule('14')}
            >
              <span className="carousel-next-icon"/>
            </a>
            <a
              className="carousel-container-prev-bottom"
              href="#demo"
              data-slide="prev"
              onClick={() => showPrevModule('12')}
            >
              <span className="carousel-previous-icon"/>
            </a>
            <a
              className="carousel-container-next-bottom"
              href="#demo"
              data-slide="next"
              onClick={() => showNextModule('14')}
            >
              <span className="carousel-next-icon"/>
            </a>

            {/* <div id="demo" className="carousel slide" data-interval="false"> */}
            <div className="carousel-inner">
              <div className="carousel-item active" data-id-prev="101">
                <Heading
                  isUp={true}
                  heading="Create a Welcoming Environment"
                />

                <div className="banner-container">
                  {!this.state.isVideo && (
                    <img src="../../../../assets/chapters/13/module13.png"/>
                  )}
                  {videoPlayer}
                </div>
                <div className="text-black pt-10">
                  <p>
                    {txtP1_p1}

                    <br/>
                    {/* <br/> */}

                    <br/>
                    {txtP1_p2}

                    <br/>
                    <br/>
                    There are specific techniques and methods which may be considered when establishing this <em
                    className="text-blue-bold">"Welcoming Environment"</em>. In the following learning segment, we will
                    review and consider a few of the methods and interventions that may be used to facilitate a
                    welcoming educational environment.

                  </p>

                </div>
              </div>

              {/* Page 2 */}
              {/* To Do- horizontal line, alignment to the left, image */}
              <div className="carousel-item">
                <Heading isUp={true} heading="How to Create a Welcoming Environment"/>
                {/* <br />
								<br />
								<br /> */}
                <div className="banner-container">
                  {/* {!this.state.isVideo && ( */}
                  <img src="../../../assets/chapters/13/module13-page2.png"/>
                  {/* )} */}
                  {/* {videoPlayer} */}
                </div>

                <div className="text-black pt-10">
                  <p>
                    {txtP2_p1}
                    <em className="text-blue-bold">smile is important</em>
                    <br/>
                    {/* <br/> */}
                    <em className="text-blue-bold">Positive feedback </em>{txtP2_p2}
                    <br/>
                    {txtP2_p3}
                    {txtP2_p4}
                    <br/>
                    <br/>
                    The <em className="text-blue-bold">Spiritual Curriculum</em>{txtP2_p5}
                    <br/>
                    {txtP2_p6}

                  </p>

                </div>
              </div>

              {/* Page 3 */}
              <div className="carousel-item">
                <Heading
                  isUp={true}
                  heading="Favouritism"
                />
                <div className="banner-container">
                  {/* {!this.state.isVideo && ( */}
                  <img src="../../../assets/chapters/13/module13-page3.png"/>
                  {/* )} */}
                  {/* {videoPlayer} */}
                </div>
                <div className="text-black pt-10">
                  <p>
                    {txtP3_p1}
                    {/* <br/> */}
                    {/* {txtP3_p1_2} */}
                  </p>
                </div>
                <ActivityWrapper
                   activityInfo={{ moduleId: 13, chapter: 3, activityKey: 1 }} activityType={MCQ_QUESTION} 
                />
              </div>
              {/* Page 4 */}
              <div className="carousel-item">
                <Heading
                  isUp={true}
                  heading="Inspiring Quotes"
                />

                <div className="text-black pt-10">
                  <p>
                    Carefully read through the quotes and inspirational messages from <em
                    className="text_darkblue_p4_m13"> Sant Rajinder Singh Ji Maharaj, Sant Darshan Singh Ji
                    Maharaj</em> and <em className="text_darkblue_p4_m13">Sant Kirpal Singh Ji Maharaj </em> regarding
                    student learning and raising children.
                  </p>
                  {/* <svg> */}
                  {/* <img src="../../../assets/chapters/13/quotes2_Sant RajinderSinghJiMaharaj-01.svg"/>    */}
                  {/* <text>Maharaj</text> */}
                  {/* </svg> */}
                  <div className="centered">
                    <div className="div_quotes1_1_m13"/>
                    <div className="div_quotes1_2_m13">
                      <p className="text_white">
                        When a child comes to a school, the child learns from everyone that the child comes in contact
                        with, irrespective whether it is a teacher, irrespective whether it is the cashier, irrespective
                        whether it’s a receptionist, irrespective whether there is someone in the library, because as
                        they come in contact with others, they learn. There are formal ways of education which happen in
                        the school room, and there is a lot of informal education that a child gains through the school.
                        So how you behave, how you talk, how you intermingle with each other, has a tremendous,
                        tremendous effect on the growth of the child. The atmosphere in the Academies needs to be such,
                        that it is loving. It needs to be such, that it is charged with peace, with joy, because you
                        want to have the children enhance all of their capabilities, whether they be physical, emotional
                        or spiritual.
                      </p>
                      <p className="text_white">
                        Sant Rajinder Singh Ji Maharaj,
                        <br/>
                        Darshan Education Foundation All India Teacher Training Workshop, July 1997
                      </p>
                    </div>
                    <br/>
                    <br/>
                    <div className="div_quotes1_1_m13"/>
                    <div className="div_quotes2_2_m13">
                      <p className="text_white">
                        We must understand that human unity begins with inner acceptance and realization that we are a
                        part of one family. Differences are part of the beauty of creation. Just as there are different
                        coloured flowers in the garden, if we appreciate differences that definitely will radiate to the
                        young. They will grow up in a way that they accept and appreciate all others, and this I think
                        is the first step toward education for world peace.
                      </p>
                      <p className="text_white">
                        {' '} Sant Rajinder Singh Ji Maharaj, 18th International Human Unity Conference, Munich,
                        Germany, 1999

                      </p>
                    </div>
                    <br/>
                    <br/>
                    <div className="div_quotes3_1_m13"/>
                    <div className="div_quotes3_2_m13">
                      <p className="text_white">
                        The tender heart of a child calls for very delicate handling. In fact, education begins even
                        before birth and therefore better care must be bestowed upon every pregnant mother. It is a
                        constant association with gentle forces which breeds virtuous persons. A child is the center of
                        creative life. It needs to be opened as a flower is opened, gently, by sympathy, not by force.
                        Do not let the child be imprisoned in the examination machine; never let him be snubbed and
                        scolded.
                      </p>
                      <p className="text_white">
                        {' '}Sant Kirpal Singh Ji Maharaj

                      </p>
                    </div>
                    <br/>
                    <br/>
                    <div className="div_quotes4_1_m13"/>
                    <div className="div_quotes4_2_m13">
                      <p className="text_white">
                        Children should be allowed to preserve and develop the gifts of purity, of simplicity, of
                        wonder, of concentration and love with which they are born. We adults lose these blessings as we
                        grow older, and it is imperative that we seek to revive and develop them if we wish to become
                        conscious of the beauty and grandeur of God’s creation and thereby become His beloved children.
                      </p>
                      <p className="text_white">
                        {' '}Sant Darshan Singh Maharaj

                      </p>
                    </div>
                    <br/>
                    <p className="text_Activity_p4_m13"><img className="img_Activity_p4_m13"
                                                             src="../../../../assets/chapters/13/assignment-icon-01.svg"/>Activity
                    </p>
                    <div className="">
                      <table className="list-circle">
                        <tbody>
                        <tr>
                          <td>
                            {iconCircle}
                          </td>
                          <td>
                            Reflect on the inspiring quotes and words expressed by the spiritual Masters.
                            <br/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {iconCircle}
                          </td>
                          <td>
                            Which of these words, points of view or phrases resonates with you as an educator?
                          </td>
                        </tr>
                        </tbody>
                      </table>

                    </div>

                  </div>
                </div>


                {/* </div> */}

                {/* </div> */}

              </div>

              {/* Page 5		 */}
              <div className="carousel-item">
                <Heading
                  isUp={true}
                  heading="Creating a Welcoming Environment"
                />

                <div className="banner-container">
                  {/* {!this.state.isVideo && ( */}
                  <img src="../../../assets/chapters/12/module12-page5.png"/>
                  {/* )} */}
                  {/* {videoPlayer} */}
                </div>
                <div className="text-black pt-10">

                  <p className="text-blue-bold">
                    Importance of Positive Relationships
                  </p>
                  <p>
                    {txtP5_p1}
                  </p>


                  <div className="button_Reflect_p5_m13">
                      <span>
                          Reflect:How do I help children feel welcome in the class?
                      </span>

                  </div>
                  <p className="text-blue-bold">Feedback</p>
                  <p>
                    {txtP5_p2}
                  </p>
                  <div className="button_Reflect2_p5_m13">
                      <span>
                          Reflect:How do I give feedback as a teacher?How can I make my language positive?
                      </span>
                  </div>
                  <p className="text-blue-bold">
                    Motivation
                  </p>
                  <p>
                    {txtP5_p3}
                    <br/>
                    <br/>
                    {txtP5_p4}
                    <br/>
                    <br/>
                    {txtP5_p5}
                    <br/>
                    {txtP5_p6}
                  </p>

                </div>
              </div>

              {/* Page 6		 */}
              <div className="carousel-item">
                <ActivityWrapper
                   activityInfo={{ moduleId: 13, chapter: 6, activityKey: 1 }} activityType={FILL_IN_BLANK} 
                />
              </div>
              {/* Page 7 */}
              <div className="carousel-item" data-id-next="101">
                <Heading
                  isUp={true}
                  heading="Review on Creating a Welcoming Environment"
                />
                <div className="banner-container">
                  {/* {!this.state.isVideo && ( */}
                  <img src="../../../assets/chapters/13/module13-page7.png"/>
                  {/* )} */}
                  {/* {videoPlayer} */}
                </div>
                <div className="text-black pt-10">
                  <p className="text_p7_m13">
                    Read through the ten review points on how to create a welcoming environment.

                  </p>
                  <div className="div_table_bottom">
                    <table className="list-circle">
                      <tbody>
                      <tr>
                        <td>1.</td>
                        <td>
                          Welcome children by name,smile and find time to connect with each child regularly
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>
                          Positive encouraging language
                        </td>

                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>
                          Interesting,well planned lessons
                        </td>

                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>
                          Create environment where it is okay to make mistakes
                        </td>

                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>
                          Have posters in the class with all the children's names, art work,assignments and photos
                        </td>

                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>
                          Involve student through activities
                        </td>

                      </tr>
                      <tr>
                        <td>7.</td>
                        <td>
                          Link the content to the child's personal life,emotions,experiences, their world
                        </td>

                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>
                          Play an ice-breaker game to help them to get to know each other
                        </td>

                      </tr>
                      <tr>
                        <td>9.</td>
                        <td>
                          Value and respect children of all diverse backgrounds
                        </td>

                      </tr>
                      <tr>
                        <td>10.</td>
                        <td>
                          Activities should be at the level of the children
                        </td>

                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="Rounded-Rectangle_p7_m13">
                    <span>Activity</span>
                  </div>
                  <p>
                    Make a note in your journal of how you would like to create a welcoming, positive environment in
                    your class.<em className="text_bottom_p7_m13">Which points inspired you in this module? Are you
                    aware of all your students?</em> If not, make a point to reach out to all. Discuss your experience
                    with your teacher trainer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    );

  }
}

export default Module13;

