import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import acer from '../images/acer.png';
import apple from '../images/apple.jpg';
import asus from '../images/asus.jpg';
import lenovo from '../images/lenovo.jpg';
import hp from '../images/hp.jpg';


export default function Home() {
  return (
    
    <div className="slideshow-container text-center" style={{ width: '500px', height: '200px', margin: 'auto' }}>
      
      <Slide>
        <div className="each-slide-effect" style={{width: '100%', height: '100%', marginTop: '20px'}}>
          <div>
            <img src={acer} alt="Acer" />
          </div>
        </div>
        <div className="each-slide-effect" style={{width: '100%', height: '100%', marginTop: '20px'}}>
          <div>
            <img src={apple} alt="Apple" />
          </div>
        </div>
        <div className="each-slide-effect" style={{width: '100%', height: '100%', marginTop: '20px'}}>
          <div>
            <img src={asus} alt="Asus" />
          </div>
        </div>
        <div className="each-slide-effect" style={{width: '100%', height: '100%', marginTop: '20px'}}>
          <div>
            <img src={lenovo} alt="Lenovo" />
          </div>
        </div>
        <div className="each-slide-effect" style={{width: '100%', height: '100%', marginTop: '20px'}}>
          <div>
            <img src={hp} alt="HP" />
          </div>
        </div>        
      </Slide>
      <h1>Welcome to the world of limitless possibilities with our exceptional line of laptops! Whether you're a professional seeking powerful performance for your demanding tasks, a student navigating the complexities of academia, or an avid gamer immersing yourself in thrilling virtual worlds, our laptops are meticulously crafted to elevate your experience to new heights. With sleek designs, cutting-edge technology, and unmatched versatility, our laptops offer the perfect blend of style, functionality, and portability. Join us as we redefine the way you work, learn, and play, and embark on a journey of innovation, productivity, and endless possibilities.</h1>
    </div>
  );
}
