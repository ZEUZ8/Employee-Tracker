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
import { IoLocationOutline } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";
import { TbClockOff } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";

const FirstSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className=" flex justify-end items-end">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-white text-xl">
              <GoBell />
            </p>
          </div>
          <div>
            <p className="rounded-full bg-[#5015A6] p-2 text-lg text-white ">
              <GiHamburgerMenu />
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute text-white z-10 "
        style={{ top: "12%", right: "10%" }}
      >
        <div className="">
          <img
            src="/imgs/person.png"
            className="rounded-full border-2 border-white w-[84px] h-[84px]"
            alt=""
          />
        </div>
      </div>
      <div className="text-start mx-12">
        <div className="text-white">
          <p className="">Hi sinan</p>
          <p className="font-extralight text-xs">Emp ID</p>
        </div>
      </div>
      <div className="pt-5">
        <div className=" bg-opacity-5 bg-white border-2 border-white h-full rounded-2xl grid grid-rows-3 text-white backdrop-blur-3xl">
          <div className="row-span-2 grid justify-center  p-3 pt-5">
            <p className="font-light">Company Name</p>
            <p className="font-extralight flex justify-center items-center gap-1">
              <span>
                <IoLocationOutline />
              </span>{" "}
              location
            </p>
            <h1 className="text-5xl">10:26 AM</h1>
            <p className="text-lg font-light">12 March 2024</p>
          </div>
          <div className="row-span-1  grid justify-center ">
            <hr className="text-white w-[90%] mx-auto " />

            <div className="relative flex justify-center items-center p-4">
              <p className="absolute z-20 text-white">Slide to Attendance</p>
              <label class="switch relative flex  items-center ">
                <div className="absolute z-20 p-4 ">
                  <p
                    style={{
                      transform: isChecked
                        ? "translateX(222px)"
                        : "translateX(0)",
                      transition: "transform 0.8s ease",
                    }}
                    className="arrow text-red-500 font-normal"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
