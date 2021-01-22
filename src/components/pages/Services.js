import React from "react";
import "../../App.css";

const Services = () => {
  return (
    <div className='services'>
        <video className='services__video' src="/videos/video-1.mp4" autoPlay loop muted />
        <img src='images/me.jfif' className='services__img'></img>
      <p className="about">
        Hello, My name is Jonathan Roth and I'm an aspiring web developer. After
        working most of my professional life in customer service I decided to
        take the plunge and shift careers. Having always been tech savvy, I
        began to teach myself HTML, CSS, and Javascript in 2017. In the summer
        of 2019, I was given the opportunity to attend a full stack web
        development bootcamp at the University of Richmond in Virginia. The
        curriculum focused on the development of full stack applications using
        the Mongodb, ExpressJS, ReactJS, and NodeJS (MERN) stack. After
        graduating in February 2020, I continued to dive deeper into the
        concepts I'd learned and gain a better understanding of the tools at my
        disposal, adding React Hooks to my toolbox and teaching myself
        React-Native, a framework for building mobile apps using the ReactJS
        library. I am excited to learn new technologies and to set and achieve
        goals. I am delighted you have stopped by to view my portfolio and would
        love to talk about joining your team!
      </p>
    </div>
  );
};

export default Services;
