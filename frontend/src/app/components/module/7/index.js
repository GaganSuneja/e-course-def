import React from 'react';
import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import { PrimaryButton } from '../../buttons';
import ActivityWrapper from '../../interactiveComponents/ActivityWrapper/ActivityWrapper';
import { TRUE_FALSE, MCQ_QUESTION } from '../../../constants';

class Module7 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVideo: false, isVideo1: false, isVideo2: false
		};

	}

	// playVideo(e, param) {
	playVideo() {
		this.setState({ isVideo: !this.state.isVideo });
	}

	activateSubmitButton1(effectiveResult, activate) {
		this.setState({ ...this.state, activateSubmitButton1: activate, mcqResponse1: effectiveResult });
		console.log('submit button activated', this.state);
	}

	activateSubmitButton2(effectiveResult, activate) {
		this.setState({ ...this.state, activateSubmitButton2: activate, mcqResponse2: effectiveResult });
		console.log('submit button activated', this.state);
	}

	activateTfSubmitButton(effectiveResult, activate) {
		this.setState({ ...this.state, activateTfSubmitButton: activate, tfResponse: effectiveResult });
		console.log('submit button activated', this.state);
	}

	submitMcq1(e) {
		this.setState({ ...this.state, showMcqResult1: true, activateSubmitButton1: false });
		console.log('submit button activated:::', this.state);
		const progressObject = {
			moduleId: 7,
			chapter: 7,
			activityType: 'mcq',
			activityKey: '1',
			data: this.state.mcqResponse1
		};
		this.props.saveModuleProgress(7, this.state.userId, progressObject);
		// do api call here
		console.log(this.state.mcqResponse1);
	}

	submitMcq2(e) {
		this.setState({ ...this.state, showMcqResult2: true, activateSubmitButton2: false });
		console.log('submit button activated:::', this.state);
		const progressObject = {
			moduleId: 7,
			chapter: 8,
			activityType: 'mcq',
			activityKey: '1',
			data: this.state.mcqResponse2
		};
		this.props.saveModuleProgress(7, this.state.userId, progressObject);
		// do api call here
		console.log(this.state.mcqResponse2);
	}

	submitTf() {
		this.setState({ ...this.state, showTfResults: true, activateTfSubmitButton: false });
		const progressObject = {
			moduleId: 7,
			chapter: 8,
			activityType: 'trueFalse',
			activityKey: '1',
			data: this.state.tfResponse
		};
		this.props.saveModuleProgress(7, this.state.userId, progressObject);

	}

	setMcqActivity1() {
		const userMcqActivity1 = this.state.moduleUserProgress?.['chapterProgress']?.filter((res) => res.activityType === 'mcq' && res.chapterId === '7')?.[0]?.['data'];
		return userMcqActivity1 ? userMcqActivity1 : this.state['chapterWiseQuestion']?.['7']?.['mcqQuestion']?.['1'];
	}

	setMcqActivity2() {
		const userMcqActivity1 = this.state.moduleUserProgress?.['chapterProgress']?.filter((res) => res.activityType === 'mcq' && res.chapterId === '8')?.[0]?.['data'];
		return userMcqActivity1 ? userMcqActivity1 : this.state['chapterWiseQuestion']?.['8']?.['mcqQuestion']?.['1'];
	}

	setTfActivity() {
		const userTfActivity = this.state.moduleUserProgress?.['chapterProgress']?.filter((res) => res.activityType === 'trueFalse')?.[0]?.['data'];
		return userTfActivity ? userTfActivity : this.state['chapterWiseQuestion']?.['3']?.['trueFalse']?.['1'];
	}

	render() {
		const mcqActivity1 = this.setMcqActivity1();
		const mcqActivity2 = this.setMcqActivity2();
		const tfActivity = this.setTfActivity();
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
			videoPlayer = <VideoPlayer poster="../../../../assets/chapters/7/module7-page1.png" src={welcomeVideo.src}/>;
		}
		if (this.state.isVideo1) {
			videoPlayer2 = <VideoPlayer src={secondVideo.src}/>;
		}
		if (this.state.isVideo2) {
			videoPlayer3 = <VideoPlayer src={thirdVideo.src}/>;
		}
		const iconStar = <i className="icon-star"/>;
		const { showNextModule, showPrevModule } = this.props;

		const txtP2_p1 = 'More and more people are realizing that a vegetarian diet can increase the health of our body, mind, soul and the ecological health of the planet. There are many benefits in following a vegetarian diet.';
		const txtP2_p2 = 'Research performed by many doctors and scientists concludes that a balanced plant-based diet is good for our physical health. Doctors are advising people to eliminate non-vegetarian food from the diet and instead eat more vegetables, fruits, legumes and grains. All around the world a vegetarian lifestyle is being recommended. Many companies and restaurants have added more vegetarian dishes to their menu to promote healthy eating.';
		const txtP2_p3 = 'People around the world are becoming more aware of the body-mind connection. When we eat a plant-based diet we become more peaceful than those who eat meat, fish or eggs. The reason this happens is that we pick up the vibration of whatever we eat. If we eat animals we may pick up some of their animalistic nature. Whatever we eat has an effect on us. Eating plant products has a more calming and peaceful effect on our mind.';
		const txtP2_p4 = 'Saints and mystics have spoken of the spiritual benefits of a vegetarian diet. One aspect of ethical living is nonviolence. Saints have talked about caring for all forms of life. A plant based diet is a compassionate and nonviolent diet as no living animal is cruelly killed for food.';
		const txtP2_p5 = 'People around the world are becoming more interested about the welfare of our community and the preservation of our planet. Environmentalists have pointed out that one solution to the problem of food and water shortages is better utilization of our resources. They have shown that much more fuel, water and energy is needed to raise cattle and produce meat than is used to produce grains, vegetables and fruits. So vegetarianism is an effective way of conserving the resources of our planet. If everyone was a vegetarian, there would be more food, water and land resources for the future generations. The reasons for not eating meat are compelling.';
		const txtP6_p1 = 'Spirituality is not only concerned with discovering your own inner side but is an extension of having love and concern for all life in creation. Spirituality involves bringing us closer to our true nature, our inner self, which is one with God.';
		const txtP6_p2 = 'As God created this universe, the earth, and its creatures, it is natural for us to respect all life rather than destroy what God has created. Those who are truly connected with God feel a love for all creatures, great and small. They perceive the Light of God in human beings and living creatures.';
		const txtP6_p3 = 'This Light exists as much in the humble ant as in the powerful lion. It shines in the snake as well as the cow. It shimmers in the fish as well as the birds. When we look at life through the eyes of the soul, we witness God in even the humblest and most grotesque of creatures. With that angle of vision, we develop love for all that exists.';
		const txtP6_p4 = 'When we look at life through the consciousness of the soul, we begin to live in a gentler manner and start respecting all forms of life. This is one of the reasons that many people who are in touch with their soul turn to a vegetarian diet. They feel that God has provided enough food in the form of plants to sustain them, and it is not necessary to take the life of any of God’s creatures for food.';
		const txtP6_p5 = 'Vegetarianism complements meditation. Vegetarianism is the most compassionate diet because it involves eating food containing the least amount of destruction of life. For those who wish to make rapid progress in meditation, a vegetarian diet is important.';
		const txtP6_p6 = 'Many great philosophers, artists, poets, writers, and many enlightened people have been vegetarians as well.';
		const txtP6_p7 = 'The great artist, Leonardo da Vinci, was a vegetarian who had great compassion. Whenever he saw a caged bird, he would pay the owner for the cage and the bird. Then he would open the cage door and watch the joyful bird soar to freedom.';
		const txtP6_p8 = 'Sir Isaac Newton, Mahatma Gandhi, and Albert Schweitzer are just a few examples of great philosophers, scientists, humanitarians, and world leaders who inspired others to adopt a path of nonviolence towards all creation.';
		const txtP6_p9 = 'Enlightened beings have taught that animals too have consciousness or a soul, which makes them also a part of God. Thus, the spiritual basis of vegetarianism is not to take the life of any other creature. One of the principles is not to harm any living creature. Thus, if we wish to find God, then we need to be loving and caring to all God’s creatures. That is why a vegetarian diet forms a part of a spiritual life.';
		const txtP6_p10 = 'For those who are seeking to improve in meditation, including for spiritual growth, vegetarianism offers another benefit. Those involved in developing spiritually and want to experience their inner self or soul can do so through meditation, which is enhanced by a vegetarian diet.';
		const txtP6_p11 = 'Meditation requires stillness. Our attention is usually focused on the outer sights, sounds, smells, tastes, and sensations of this world, which keeps us from tuning ourselves to the spiritual gifts within. This requires concentration.';
		const txtP6_p12 = 'To concentrate in meditation, we need to be calm and collected. What benefit do we gain from avoiding foods from dead animals? One benefit is that avoiding such foods can raise our consciousness. We know the effect that our own hormones have on our body. Just imagine how many stress hormones we are adding, which were circulating in the animals, birds, or fish when they were being killed or slaughtered to be used as meat! That is all forming a part of us when we partake of it. The food we eat not only has an effect upon our physical, emotional, and mental makeup, but also on our spiritual consciousness.';
		const txtP6_p13 = 'If we are trying to lead a life of nonviolence and compassion, if we are trying to become more serene and peaceful, if we are trying to still our mind to concentrate within to find our spiritual treasures, then we will naturally want to follow a diet that helps us achieve our goal.';
		const txtP8_p1 = 'According to a recent report from UNESCO, without significant global policy change, the world will only have 60% of the water it needs by 2030. In terms of food production, it takes 15,500 liters of water to produce 1 kg beef, contrasted with 180 liters for 1 kg tomatoes and 250 liters for 1 kg potatoes.';
		const txtP8_p2 = 'If current dietary habits and trends continue, by 2050 we will experience a 51% increase in current levels of environmental markers like greenhouse gas emissions, CO2, rising temperatures, and an increased carbon footprint associated with food production.';
		const txtP8_p3 = 'These factors are based on current trends in global population growth and on the fact that as populations get wealthier, people tend to eat more meat. Between now and 2050, a global switch to diets that rely far less on meat and far more on vegetables, fruits and other plant foods could reduce food-related greenhouse gas emissions by two-thirds.';
		const txtP8_p4 = '(Harvard Health, December 4, 2017). In one of the largest studies that combined data from five studies involving more than 76,000 participants, vegetarians were 25% less likely to die of heart disease.';
		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<div className="header_container">
						<span>Module 7</span>
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
							onClick={() => showPrevModule('6')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('8')}
						>
							<span className="carousel-next-icon"/>
						</a>
						<a
							className="carousel-container-prev-bottom"
							href="#demo"
							data-slide="prev"
							onClick={() => showPrevModule('6')}
						>
							<span className="carousel-previous-icon"/>
						</a>
						<a
							className="carousel-container-next-bottom"
							href="#demo"
							data-slide="next"
							onClick={() => showNextModule('8')}
						>
							<span className="carousel-next-icon"/>
						</a>
						{/* <div id="demo" className="carousel slide" data-interval="false"> */}
						<div className="carousel-inner">
							<div className="carousel-item active" data-id-prev="101">
								<Heading
									isUp={true}
									heading="Vegetarian Diet"
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
										A vegetarian diet consists of plant foods, including vegetables, fruits, grains, legumes
										(beans,peas, lentils, etc.), as well as dairy products, such as milk, cheese, butter, yogurt and ice
										cream.
										<em className="text-blue-bold">The Spiritual Curriculum </em>
										introduces students to the topic of a <em className="text-blue-bold"> vegetarian diet, health and
										nutrition</em>. Students learn how to plan a vegetarian meal and vegetarian cooking.
										<br/>
										<br/>
										<em className="text-blue-bold">Vegetarianism is a compassionate diet</em> because it involves eating
										food which doesn’t involve the killing of any animals. It supports our spiritual development. A
										vegetarian diet is being promoted by many medical doctors for health benefits. When comprised of
										nutritious whole foods, it has a significant impact on our health. It is not only healthy for the
										body, but it is also healthy for the planet and helps the environment. The following module
										highlights some of the benefits of a vegetarian diet, and includes some suggested activities for
										class lessons.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Introduction to a Vegetarian Diet"/>
								{/* <br />
								<br />
								<br /> */}
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/7/module7-page2.png"/>
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p> {txtP2_p1}</p>
									<br/>
									<br/>
									<p className="text-blue-bold">Physical Benefits of a Vegetarian Diet</p>
									<p>{txtP2_p2}</p>
									<br/>
									<br/>
									<p className="text-blue-bold">Mental and Intellectual Benefits of a Vegetarian Diet</p>
									<p>{txtP2_p3}</p>
									<br/>
									<br/>
									<p className="text-blue-bold">Spiritual Benefits of a Vegetarian Diet</p>
									<p>{txtP2_p4}</p>
									<br/>
									<br/>
									<p className="text-blue-bold">Ecological Benefits of a Vegetarian Diet</p>
									<p>{txtP2_p5}</p>
									<br/>
									<br/>
									<p className="text-grey_p2_m7">The fantastic news is that being a vegetarian can help us attain a
										healthier body, mind, soul and planet.</p>

									<hr/>
									<img className="img_p2_m7" src="../../../../assets/chapters/7/module7-page2-map.png"/>
									<div style={{ textAlign: 'center' }} className={'pt-10'}>
										{/* <PrimaryButton
                      btn_text={'Answer the following questions'}
                      className={'pinkBtn'}
                    /> */}
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="text-black pt-10">
									<ActivityWrapper activityInfo={{
										moduleId: 7,
										chapter: 3,
										activityKey: '1'
									}} activityType={TRUE_FALSE}/>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Vegetarian Diet"
								/>
								<p className="sub_head_p9_m10">
									Enjoy this presentation of art work created by Darshan Academy students.
								</p>
								<br/>
								<br/>
								<br/>

								<iframe
									src="https://darshanacademy-my.sharepoint.com/personal/web_admin_darshanacademy_org/_layouts/15/Doc.aspx?sourcedoc={e869e737-06fc-4e0e-8fe3-db328741660f}&amp;action=embedview&amp;wdAr=1.7777777777777777"
									width="962px" height="565px" frameBorder="0">
								</iframe>

							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading='Enjoy this talk "Vegetarianism and Spirituality" by Sant Rajinder Singh Ji Maharaj'
								/>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/7/module7-page6.png"/>
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text-blue-bold">
										Connecting with Your Inner Essence
									</p>
									<br/>
									<p>
										{txtP6_p1}
										<br/>
										<br/>
										{txtP6_p2}
										<br/>
										<br/>
										{txtP6_p3}
										<br/>
										<br/>
										{txtP6_p4}
									</p>
									<br/>
									<br/>
									<p className="text-blue-bold">
										A Diet that Complements Meditation
									</p>
									<br/>
									<p>
										{txtP6_p5}
										<br/>
										<br/>
										{txtP6_p6}
										<br/>
										<br/>
										{txtP6_p7}
										<br/>
										<br/>
										{txtP6_p8}
									</p>
									<br/>
									<br/>
									<p className="text-blue-bold">
										We Are Accountable for Our Actions
									</p>
									<br/>
									<p>
										{txtP6_p9}
									</p>
									<br/>
									<br/>
									<p className="text-blue-bold">
										A Vegetarian Diet Helps You to Improve in Meditation
									</p>
									<br/>
									<br/>
									<p>
										{/* <br/> */}
										{txtP6_p10}
										<br/>
										<br/>
										{txtP6_p11}
										<br/>
										<br/>
										{txtP6_p12}
										<br/>
										<br/>
										{txtP6_p13}
									</p>
									<p className="Footertextpink">From www.sos.org</p>
								</div>
							</div>
							<div className="carousel-item">
								<ActivityWrapper activityInfo={{
									moduleId: 7,
									chapter: 7,
									activityKey: '1'
								}} activityType={MCQ_QUESTION}/>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading='Read these FAQs from the Veggie Fest Chicago website'
								/>
								<div className="banner-container">
									{/* {!this.state.isVideo && ( */}
									<img src="../../../assets/chapters/7/module7-page8.png"/>
									{/* )} */}
									{/* {videoPlayer} */}
								</div>
								<div className="text-black pt-10">
									<p className="text-green">
										How can a vegetarian diet affect our environment, especially our water resources?
									</p>
									<br/>
									<p>
										According to a recent report from <em className="text-grey_p2_m7">UNESCO</em>, without significant
										global policy change, the world will only have 60% of the water it needs by 2030. In terms of food
										production, it takes 15,500 liters of water to produce 1 kg beef, contrasted with 180 liters for 1
										kg tomatoes and 250 liters for 1 kg potatoes.
									<br/>
									</p>
									<br/>
									<br/>
									<p className="text-green">
										Is it true that becoming vegetarian could help alleviate global warming?
									</p>
									<br/>
									<p>
										{txtP8_p2}
										<br/>
										{txtP8_p3}

									</p>
									<br/>
									<br/>
									<p className="text-green">
										What are the health benefits of becoming a vegetarian?
									</p>
									<br/>
									<p>
										According to a Harvard Medical School publication,<em className="text-grey_p2_m7">“Plant-based
										eating is recognized as not only nutritionally sufficient but also as a way to reduce the risk for
										much chronic illness.”</em>
										{/* <br/> */}
										{txtP8_p4}
										<em className="text-grey_p2_m7">
											Research also suggested that a predominantly plant-based diet could
											reduce the risk for type 2 diabetes by 50%.
										</em>
									</p>
									<br/>
									<br/>
								</div>
								<ActivityWrapper activityInfo={{
									moduleId: 7,
									chapter: 8,
									activityKey: '1'
								}} activityType={MCQ_QUESTION}/>
							</div>
							<div className="carousel-item" data-id-next="101">
								<Heading
									isUp={true}
									heading='Activities'
								/>
								<div className="text-black pt-10">
									<p className="sub_head_p9_m10">
										<img className="img_Activity_p4_m13" src="../../../../assets/chapters/11/video-icono-01.svg"/>
										 Ideas
										for art and craft activities related to fruits.
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

export default Module7;
