import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
export const Footer = () => {
  const showFooter = useSelector((state) => state.HeaderFooter.showFooter);
  if (showFooter) {
    return (
      <footer style={{ fontFamily: 'Rubik' }}>
        <div className="flex" style={{ paddingTop: '50px' }}>
          <div className="fg-2" style={{ width: '60%', paddingLeft: '5%' }}>
            <img src="/assets/fonts_and_logo/Darshan Academy.jpg" width="10%" />
            <p className="pt-10" style={{ fontSize: '10px' }}>
              All rights reserved Darshan Academy 2020
            </p>
          </div>
          <div className="fg-3">
            <p style={{ fontWeight: 'bold' }}>Train</p>
            <p>The Course</p>
          </div>
          <div className="fg-3">
            <p style={{ fontWeight: 'bold' }}>About</p>
          </div>
          <div className="fg-5">
            <p style={{ fontWeight: 'bold' }}>Contact Us</p>
            <p>+91 011 27414545</p>
            <p>info@darshanacademy.org</p>
          </div>
        </div>
      </footer>
    );
  }

  return null;
};

export default  Footer;