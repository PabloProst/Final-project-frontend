import React from 'react';
import "./Home.css";
import { PageNavbar } from '../../common/PageNavbar/PageNavbar';

export const Home = () => {
  return (
    <div className='home-design'>
      <PageNavbar/>
      <div className='home-container'>
        <img src='./src/assets/img/logo.png' alt='Logo' className='image-logo'></img>
        <button className='btn-play'>PLAY</button>
      </div>
    </div>
  );
}
