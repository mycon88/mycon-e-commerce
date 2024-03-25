import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import acer from '../images/ACER.webp';
import apple from '../images/APPLEC.jpg';
import razer from '../images/RAZERB.png';
import lenovo from '../images/LENOVOT.jpg';
import hp from '../images/HPD.jpg';

import xps from '../images/XPS.mp4';
import './style.css';

export default function Home() {
  return (
    <div className="container-home pl-7">
      <div className="slideshow-container">
        <Slide>
          <div className="each-slide-effect">
            <div>
              <img src={acer} alt="Acer" />
            </div>
          </div>
          <div className="each-slide-effect">
            <div>
              <img src={apple} alt="Apple" />
            </div>
          </div>
          <div className="each-slide-effect">
            <div>
              <img src={razer} alt="RAZER" />
            </div>
          </div>
          <div className="each-slide-effect">
            <div>
              <img src={lenovo} alt="Lenovo" />
            </div>
          </div>
          <div className="each-slide-effect">
            <div>
              <img src={hp} alt="HP" />
            </div>
          </div>
        </Slide>
      </div>
     
      <div className="video-container">
        <video autoPlay muted loop id="myVideo">
          <source src={xps} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
