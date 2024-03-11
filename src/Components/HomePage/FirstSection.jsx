import React, { useState } from "react";

import { MdHomeFilled } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { BsPersonFillLock } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";
import { TbClockOff } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import "./style.css";
import Swipe from "../swipe/Swipe";

const FirstSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const handleSwipeRight = () => {
  //   console.log("Swiped!");
  //   // Perform actions on swipe
  // };
  // const handleSwipeLeft = () => {
  //   console.log("Swiped!");
  //   // Perform actions on swipe
  // };
  return (
    <div className="">
      <div className=" flex justify-end items-end pb-2">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-white text-lg flex items-center justify-center">
              <GoBell />
            </p>
          </div>
          <div>
            <p className="rounded-full bg-[#5015A6] p-2 text-sm text-white ">
              <GiHamburgerMenu />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-1 pl-[4rem] pb-2 text-start">
        <div className="text-white">
          <p className="text-sm">Hi sinan</p>
          <p className="font-extralight text-xs ">Emp ID</p>
        </div>
      </div>

      <div className="firstBox flex items-center justify-center">
        <div className="clockBorder w-[85%]  grid text-white  relative backdrop-blur-lg bg-white bg-opacity-5">
          <div className="translate-y-[-80%] translate-x-[-20px] flex justify-end text-white z-10 absolute right-0">
            <div className="profile w-[84px]  overflow-hidden aspect-square flex justify-center items-center rounded-full border-2 border-white">
              <img src="/imgs/person.png" className="  w-full" alt="" />
            </div>
          </div>
          <div className=" grid justify-center  p-3 text-center">
            <p className="font-light text-sm">Company Name</p>
            <p className="font-light text-xs flex justify-center items-center gap-1">
              <span>
                <IoLocationSharp />
              </span>{" "}
              location
            </p>
            <h1 className="text-3xl p-1">10:26 AM</h1>
            <p className="text-xs font-light">12 March 2024</p>
          </div>

          <hr className="text-white w-[70vw] mx-auto bg-white " />
          <div className=" grid justify-center items-center w-full">
            <div className="p-2  w-[60vw] ">
              <Swipe />
            </div>
            {/* 
            <div className="relative flex justify-center items-center  p-2 ">
              <p className="absolute z-20 text-white text-sm pl-5">Slide to Attendance</p>
              <label class="switch relative flex  items-center ">
                <div className="absolute z-20 arrow-mark">
                  <p
                    style={{
                      transition: "transform 0.8s ease",
                    }}
                    className={`${isChecked&&"updated" } arrow text-red-500 font-normal text-sm   `}
                  >
                    <FaArrowRightLong />
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked((prev) => !prev)}
                  class="toggle-btn rounded-full relative grid justify-center items-center"
                />
                <span class="slider "></span>
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
