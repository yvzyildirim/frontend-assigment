import React from 'react';
import phone from '../../Assets/Images/advanced-filters-phone.png';
import left from '../../Assets/Images/advanced-filters-left.png';
import right from '../../Assets/Images/advanced-filters-right.png';

export const AdvancedFilters = () => {
  return (
    <>
      <img src={left} alt="left" className="advanced-filters-left" />
      <img src={right} alt="right" className="advanced-filters-right" />
      <img src={phone} alt="phone" className="img-slide-up" />
    </>
  );
};
