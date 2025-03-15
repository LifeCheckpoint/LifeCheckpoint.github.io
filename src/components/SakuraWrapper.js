// src/components/SakuraWrapper.js
import React from 'react';
import SakuraAnimation from './SakuraAnimation';

export default ({ children }) => {
  return (
    <>
      {children}
      <SakuraAnimation />
    </>
  );
};