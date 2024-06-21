import React from 'react';
import phone from '../../Assets/Images/batch-scanning-phone.png';
import pageOne from '../../Assets/Images/batch-scanning-page-1.png';
import pageTwo from '../../Assets/Images/batch-scanning-page-2.png';
import pageThree from '../../Assets/Images/batch-scanning-page-3.png';

export const BatchAndScanning = () => {
  return (
    <>
      <img src={pageOne} alt="page one" className="batch-scanning-page1" />
      <img src={pageTwo} alt="page two" className="batch-scanning-page2" />
      <img src={pageThree} alt="page three" className="batch-scanning-page3" />
      <img src={phone} alt="phone" className="img-slide-up" />
    </>
  );
};
