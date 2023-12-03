import React from 'react';
import './scrollbutton.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, 
      smooth: 'easeInOutQuart' 
    });
  };

  return (
    <Link to="top" smooth={true} duration={500} onClick={scrollToTop}>
      <FontAwesomeIcon icon = { faArrowUp } className='icon-up'/>
    </Link>
  );
};

export default ScrollButton;