import React, {useState} from 'react';
import { Carousel} from 'react-bootstrap';
import './Carousel.css';
import {Link} from 'react-router-dom';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} className="main_carousel" controls={false} onSelect={handleSelect}>
        <Carousel.Item className="carousel_1">
            <h3>Basic Benefits</h3>
            <div className="border"></div>
            <p>No ads</p>
            <p>Unlimited access to all articles and podcast shows</p>
            <p>Access to exclusive market insights</p>
            <p>Unlimited access to advice forum and conversations</p>
            <Link to="/signup"><button className="signUp_button">Sign Up</button></Link>
        </Carousel.Item>
        <Carousel.Item className="carousel_2">
            <h3>Premium Benefits</h3>
            <div className="border"></div>
            <p>No ads</p>
            <p>Unlimited access to all articles and podcast shows</p>
            <p>Access to exclusive market insights</p>
            <p>Unlimited access to advice forum and conversations</p>
            <button className="premium_button">GO PREMIUM</button>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;