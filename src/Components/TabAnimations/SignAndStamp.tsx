import React from 'react';
import phone from '../../Assets/Images/sign-and-stamp-phone.png';
import right from '../../Assets/Images/sign-and-stamp-right.png';
import left from '../../Assets/Images/sign-and-stamp-left.png';

export const SignAndStamp = () => {
  return (
    <>
      <img
        src={left}
        alt="Sign And Stamp left"
        className="sign-and-stamp-left"
      />
      <img
        src={right}
        alt="Sign And Stamp right"
        className="sign-and-stamp-right"
      />
      <img src={phone} alt="phone" className="img-slide-up" />
    </>
  );
};
