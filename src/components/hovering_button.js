import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutgoingMail } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";

function HoveringButton() {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div className="test-container">
      <div
        className="main-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a className='flex justify-center items-center'> <IoInformationCircle color='white' size={40} /> </a>
        <div className={`expandable-buttons ${isHovered ? 'show-buttons' : ''}`}>
            <a className='text-white' href='https://instagram.com/travel_finder_tours?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                <FaInstagram color='#E1306C' size={25} />
            </a>
            <a className='text-white' href='http://www.tiktok.com/@travelfindertours_bhutan' target='_blank'>
                <   FaTiktok color='#ff0050' size={25} />
            </a>
            <a className='text-white' href='https://wa.me/+97517937798' target='_blank'>
                <   FaWhatsapp color='#25D366' size={25} />
            </a>
            <a className='text-white' href='mailto:info@travelfindertours.com' target='_blank'>
                <   MdOutgoingMail color='grey' size={25} />
            </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default HoveringButton;