import React, { useRef, useState } from 'react';
import "./sinan.css"
import { FaArrowRight } from "react-icons/fa6";

const Swipe = () => {
  const color = 'white';
  const [unlocked, setUnlocked] = useState(false);
  const slider = useRef(null);
  const container = useRef(null);
  const initialPosition = useRef(null);

  const startDrag = (event) => {
    event.preventDefault();
    initialPosition.current = event.clientX || event.touches[0].clientX;
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('touchmove', handleDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    const currentPosition = event.clientX || event.touches[0].clientX;
    const difference = currentPosition - initialPosition.current;
    const containerWidth = container.current.offsetWidth;
    const threshold = containerWidth * 0.5;

    if (unlocked) {
      return;
    }

    if (Math.abs(difference) >= threshold) {
      setUnlocked(true);
    } else {
      slider.current.style.left = `${difference}px`;
    }
  };

  const stopDrag = () => {
    // document.removeEventListener('mousemove', handleDrag);
    // document.removeEventListener('touchmove', handleDrag);
    // document.removeEventListener('mouseup', stopDrag);
    // document.removeEventListener('touchend', stopDrag);
    // // slider.current.style.left = '0px';
    // initialPosition.current = null;
  };

  const getText = () => {
    return unlocked ? 'Marked' : 'Slide to Unlock';
  };

  return (
      <div className='ReactSwipeButton   flex justify-center items-center'>
        <div className={`rsbContainer  ${unlocked ? 'rsbContainerUnlocked' : ''}`} ref={container}>
          <div
            className='rsbcSlider '
            ref={slider}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            style={{ background: color,paddingLeft:'2rem' }}
          >
            <span className='rsbcSliderText  '>{getText()}</span>
            <span className='rsbcSliderArrow '><FaArrowRight/></span>
            <span className='rsbcSliderCircle ' style={{ background: color ,height:"2.5rem"}}></span>
          </div>
          <div className='rsbcText'>{getText()}</div>
        </div>
      </div>

  );
};

export default Swipe;
