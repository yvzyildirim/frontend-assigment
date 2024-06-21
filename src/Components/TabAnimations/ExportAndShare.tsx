import React from 'react';
import phone from '../../Assets/Images/export-and-share-phone.png';
import arrow from '../../Assets/Images/export-and-share-arrow.png';
import docOne from '../../Assets/Images/export-and-share-doc-1.png';
import docTwo from '../../Assets/Images/export-and-share-doc-2.png';
import docThree from '../../Assets/Images/export-and-share-doc-3.png';

export const ExportAndShare = () => {
  return (
    <>
      <img src={arrow} alt="arrow" className="export-and-share-arrow" />
      <img src={docOne} alt="doc-one" className="export-and-share-doc-one" />
      <img src={docTwo} alt="doc-two" className="export-and-share-doc-two" />
      <img
        src={docThree}
        alt="doc-three"
        className="export-and-share-doc-three"
      />
      <img src={phone} alt="phone" className="img-slide-up" />
    </>
  );
};
