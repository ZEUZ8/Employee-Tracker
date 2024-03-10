import React, { useRef, useState, useEffect } from 'react';
import "./slide.css"
const Slide = (props) => {
  const [unlocked, setUnlocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderLeft, setSliderLeft] = useState(0);

  const container = useRef(null);
  const slider = useRef(null);
  const containerWidth = useRef(0);
  const startX = useRef(0);

  const isTouchDevice = 'ontouchstart' in window;

  let startDrag 
  let getText
  let handleResize
  let reset

  useEffect(() => {
    const handleDrag = (e) => {
      if (unmounted || unlocked) return;
      if (isDragging) {
        const clientX = isTouchDevice ? e.touches[0].clientX : e.clientX;
        const newSliderLeft = Math.min(Math.max(0, clientX - startX.current), containerWidth.current);
        setSliderLeft(newSliderLeft);
        updateSliderStyle();
      }
    };

    const updateSliderStyle = () => {
      if (unmounted || unlocked) return;
      slider.current.style.left = sliderLeft + 50 + 'px';
    };

    const stopDrag = () => {
      if (unmounted || unlocked) return;
      if (isDragging) {
        setIsDragging(false);
        if (sliderLeft > containerWidth.current * 0.9) {
          setSliderLeft(containerWidth.current);
          if (props.onSuccess) {
            props.onSuccess();
            onSuccess();
          }
        } else {
          setSliderLeft(0);
          if (props.onFailure) {
            props.onFailure();
          }
        }
        updateSliderStyle();
      }
    };

    startDrag = (e) => {
      if (unmounted || unlocked) return;
      setIsDragging(true);
      startX.current = isTouchDevice ? e.touches[0].clientX : e.clientX;
    };

    const onSuccess = () => {
      container.current.style.width = container.current.clientWidth + 'px';
      setUnlocked(true);
    };

    getText = () => {
      return unlocked ? props.text_unlocked || 'UNLOCKED' : props.text || 'SLIDE';
    };

    reset = () => {
      if (unmounted) return;
      setUnlocked(false);
      setSliderLeft(0);
      updateSliderStyle();
    };

    const unmounted = false;

    handleResize = () => {
      containerWidth.current = container.current.clientWidth - 50;
    };

    if (isTouchDevice) {
      document.addEventListener('touchmove', handleDrag);
      document.addEventListener('touchend', stopDrag);
    } else {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', stopDrag);
    }
    containerWidth.current = container.current.clientWidth - 50;

    return () => {
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('touchend', stopDrag);
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', stopDrag);
    };
  }, [unlocked, isDragging]);

  return (
    <div className="ReactSwipeButton">
      <div className={'rsbContainer ' + (unlocked ? 'rsbContainerUnlocked' : '')} ref={container}>
        <div
          className="rsbcSlider"
          ref={slider}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          style={{ background: props.color }}
        >
          <span className="rsbcSliderText">{getText}</span>
          <span className="rsbcSliderArrow"></span>
          <span className="rsbcSliderCircle" style={{ background: props.color }}></span>
        </div>
        <div className="rsbcText">{getText}</div>
      </div>
    </div>
  );
};

export default Slide;
