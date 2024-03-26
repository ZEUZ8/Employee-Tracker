import React, { useContext, useEffect, useRef, useState } from "react";
import "./sinan.css";
import { FaArrowRight } from "react-icons/fa6";
import { AppContext } from "../../context/AppProvider";

const Swipe = () => {
  const { time, setTime, history, setHistory } = useContext(AppContext);
  const color = "white";
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState(true);
  const slider = useRef(null);
  const container = useRef(null);
  const initialPosition = useRef(null);
  const timeoutRef = useRef(null);



  useEffect(() => {
    if (unlocked) {
      const currentTime = new Date();
      const time = { time: currentTime,status: status?"checkIn":"checkOut",}
      // setTime(time);
      if (time.status) {
        setHistory((prev) => {
          return [...prev, time];
        });
      }
      setStatus((prev) => {
        return !prev;
      });
      timeoutRef.current = setTimeout(() => {
        setUnlocked(false);
        slider.current.style.left = "50px"; // Reset slider position
      }, 3000);
    }

    return stopDrag, () => clearTimeout(timeoutRef.current); // Clear timeout on component unmount or state change
  }, [unlocked]);

  const startDrag = (event) => {
    // event.preventDefault();
    initialPosition.current = event.clientX || event.touches[0].clientX;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  };

  const handleDrag = (event) => {
    // event.preventDefault();
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
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
    // slider.current.style.left = '0px';
    initialPosition.current = null;
  };

  const getText = () => {
    return unlocked ? "Check Out" : "CHECK IN";
  };

  useEffect(() => {
    // const currentTime = getTime()
    // setTime({ time: `${currentTime?.hours}:${currentTime?.minutes}`, status: status });
    // if (time.status) {
    //   setHistory((prev) => {
    //     return [...prev, time];
    //   });
    // // }
    // console.log(status,'consoling the status')
    // console.log(history,' consoling the history')
  }, [history]);



  return (
    <div className="ReactSwipeButton   flex justify-center items-center">
      <div
        className={`rsbContainer  ${unlocked ? "rsbContainerUnlocked" : ""}`}
        ref={container}
      >
        <div
          className={`rsbcSlider`}
          ref={slider}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          style={{ background: color }}
        >
          <span className={`rsbcSliderText ${"text-green-600"}`}>{`${
            status ? "Check Out" : "Check In"
          } successful`}</span>
          <span className="rsbcSliderArrow ">
            <FaArrowRight />
          </span>
          <span className="rsbcSliderCircle "></span>
        </div>
        <div className={`rsbcText ${status ? "text-white" : "text-red-700"}`}>
          {` ${status ? "Check In" : "Check Out"}`}
        </div>
      </div>
    </div>
  );
};

export default Swipe;
