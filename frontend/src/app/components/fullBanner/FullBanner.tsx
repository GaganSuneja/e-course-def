import React from 'react';

import './fullBanner.scss';

type Props = {
  data: {
    textItem: Array<{ text: string, style: string }>,
    icon: boolean
  }
}


const FullBanner = (props: Props):JSX.Element => {
  return (
    <div className="custom-container">
      <img />
      {
        props.data.textItem.map((item,index)=>(
          <p key={index} className={item.style}>{item.text}</p>
        ))
      }
    </div>
  );
};

export default FullBanner;