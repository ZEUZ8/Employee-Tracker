import React, { useEffect, useRef, useState } from "react";
import "./sinan.css";
import { FaArrowRight } from "react-icons/fa6";

const Swipe = () => {
  const color = "white";
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState("CHECK IN");
  const [time, setTime] = useState({ hour: "", minute: "", status: "" });
  const [history, setHistory] = useState([]);
  const slider = useRef(null);
  const container = useRef(null);
  const initialPosition = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (unlocked) {
      setStatus((prev) => {
        if (prev === "CHECK OUT") {
          return "CHECK IN";
        } else {
          return "CHECK OUT";
        }
      });
      timeoutRef.current = setTimeout(() => {
        setUnlocked(false);
        slider.current.style.left = "50px"; // Reset slider position
      }, 3000);
    }
    return () => clearTimeout(timeoutRef.current); // Clear timeout on component unmount or state change
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
    // document.removeEventListener('mousemove', handleDrag);
    // document.removeEventListener('touchmove', handleDrag);
    // document.removeEventListener('mouseup', stopDrag);
    // document.removeEventListener('touchend', stopDrag);
    // // slider.current.style.left = '0px';
    // initialPosition.current = null;
  };

  const getText = () => {
    return unlocked ? "Check Out" : "CHECK IN";
  };

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    setTime({ time: hours, minute: minutes, status: status });

    if (time.status) {
      setHistory((prev) => {
        return [...prev, time];
      });
    }
  }, [status]);

  useEffect(() => {
    console.log(history,' CONSOLING THE USER HISTORY');
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
          <span className={`rsbcSliderText ${"text-green-600"}`}>Marked</span>
          <span className="rsbcSliderArrow ">
            <FaArrowRight />
          </span>
          <span className="rsbcSliderCircle "></span>
        </div>
        <div
          className={`rsbcText ${
            status === "CHECK OUT" ? "text-red-700" : "text-white"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default Swipe;
