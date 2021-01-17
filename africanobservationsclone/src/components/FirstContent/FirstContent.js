import React, {useState} from 'react';
import Carousel from '../Carousel/Carousel';
import './FirstContent.css';
import headerImg from '../../assets/header-img.d0b5549b.png';
import Toolbar from '../Navbar/Toolbar/Toolbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';


function FirstContent() {
  const [showSide, setShowSide] = useState(false);

  const sidDrawerClosed = () => {
    setShowSide(false);
  }
  const toggleClicked = () => {
    setShowSide(prevState => {
     return !prevState;
    });
  }

    return (
        <div className="home">
          <Toolbar toggleButton={toggleClicked} />
          <SideDrawer
          open={showSide}
          closed={sidDrawerClosed} />
          <div className="sub_home">
          <Carousel className="carousel" />
          <img src={headerImg} className="header_img"  alt="header-img" />
          </div>
        </div>
    )
}

export default FirstContent;