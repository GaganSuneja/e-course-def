import './index.scss';
import React, { useEffect } from 'react';

const ourVision = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0 });
  },[]);
  return (
    <div>
      <img width="100%" src="../../../assets/chapters/our_vision_final.png"/>
      <div className="about_us_container">
        <div className="about_us_inner">
          <div className="about_us_section">
            <div className="text-black span_bold">
              <p className="text-blue-bold">Our Vision</p>
              <p>
                <span>Darshan Education Foundation </span>strives to provide an education that embraces all aspects of a
                child’s
                being, enabling students to meet challenges and lead life with a knowledge supported by wisdom, ethical
                values, good decision-making skills, as well as equipoise and a respect for all life.</p>
              <p>
                Darshan Education Foundation has developed a unique holistic concept for schools that helps children
                develop their highest potential: spiritually, intellectually, emotionally and physically.
                In addition to being immersed in a rich academic curriculum, students follow a daily lesson from the
                spiritual curriculum developed by Darshan Education Foundation.</p>
              <p>
                The Founder Chairman, <span>Sant Rajinder Singh Ji Maharaj </span>established Darshan Education
                Foundation with a
                vision of an education for a peaceful world. He tells us that the key to outer peace lies deep within
                each person and that by developing our whole being, we can find lasting peace and radiate it to others.
                By providing children with such a foundation, their education takes on a new meaning and gives them the
                tools to truly succeed in all spheres of life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourVision;
