import './index.scss';
import React, { useEffect } from 'react';

const aboutUs = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0 });
  },[])
  return (
    <div>
      <img width="100%" src="../../../assets/chapters/about-final-copy.png"/>
      <div className="about_us_container">
        <div className="about_us_inner">
          <div className="about_us_section">
            <div className="text-black span_bold">
              <p className="text-blue-bold">About Us</p>
              <p>
                <span>Darshan Education Foundation has been providing students with an excellent all-round
                  education since the inauguration of its first school in India, in 1995. </span>Since then, many
                Darshan Academy schools have been established in various parts of <span>India and S.America.</span>
                The schools run pre-primary classes through to high school.
              </p>
              <p>
                The foundation provides students with an education for inner and outer peace. For this
                purpose it has developed a unique spiritual curriculum for nursery to grade 12. The spiritual curriculum
                is being implemented in various schools. Students follow a daily lesson from the spiritual curriculum.
                Each day also begins with a school-wide ten minute meditation period. Through meditation and
                the spiritual curriculum, children are provided with time to find happiness within and an
                environment in which they can grow into human beings who spread love and peace.</p>
              <p>
                They develop an appreciation and respect for people of all backgrounds. They learn basic manners,
                good health habits, and ethical values. They also learn how to know one’s inner self, and to
                take care of the earth, animals, plants, and nature. Students learn conflict resolution techniques for
                solving problems peacefully.
              </p>
              <p>
                The purpose of spiritual education is to help humanity. Through projects in <span>community service,
                helping people in need, and improving the ecological environment,</span> students develop the
                concept of using their knowledge to make positive contributions to society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
);

};
export default aboutUs;
