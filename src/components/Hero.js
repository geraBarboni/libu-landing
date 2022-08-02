import React from 'react';
import img1 from '../assets/imgs/about-2.png';

const Hero = () => {
  return (
    <div className="h-142 flex">
      <div className="h-full w-10/12 md:w-8/12 m-auto flex flex-col justify-center">
        <h1 className="font-inter text-6xl font-bold mb-5 mx-auto md:ml-20 text-aquaGreenLibu">
          Somos LIBU
        </h1>
        <p className="font-sora text-5xl mx-auto md:ml-20 text-center md:text-left text-whiteLibu">
          Te invitamos a que conozcas nuestro proyecto
        </p>
      </div>
      <div className="h-full w-6/12 hidden md:flex">
        <img src={img1} alt="img hero" className="h-96 ml-16 my-auto"></img>
      </div>
    </div>
  );
};

export default Hero;
