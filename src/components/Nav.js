import React from 'react';
import logo from '../assets/imgs/logo.png';

const Nav = () => {
  return (
    <div className="h-16 flex mx-0">
      <div className=" bg-aquaGreenLibu"></div>
      <img src={logo} alt="logo" className="h-14 ml-4 mt-4"></img>
    </div>
  );
};

export default Nav;
