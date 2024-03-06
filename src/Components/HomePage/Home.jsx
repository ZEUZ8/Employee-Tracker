import React, { useState } from "react";
import BackGround from "../background/backGround";
import { MdHomeFilled } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { BsPersonFillLock } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlayCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";
import { TbClockOff } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import CircularProgress from "./CircularProgress";
import CenterSection from "./CenterSection";
import FirstSection from "./FirstSection";

const Home = () => {
  const percentage = 66;
  const [isChecked, setIsChecked] = useState(false);
  return (
      <div className="relative w-[100%] h-[100vh]  broder-5">
        <img
          className="absolute translate-y-[-2rem] inset-0 w-[430px] aspect-auto  opacity-25"
          src="/imgs/shape(3).png"
          alt="Background Image"
        />
        <img
          className="absolute top-[40%] left-0 opacity-25"
          src="/imgs/shapes(1).png"
          alt="Background Image"
        />
        <img
          className="absolute top-[35%] right-0 opacity-25"
          src="/imgs/shapes(2).png"
          alt="Background Image"
        />
        <div className="absolute inset-0 grid grid-rows-12 ">
          <div className="row-span-6 p-5 relative">
            <FirstSection />
          </div>
          <div className="row-span-5">
            <CenterSection />
          </div>
          <div className="row-span-1 row-start-12 rounded-t-2xl bg-[#24074F]  grid items-center max-w-[100%] ">
            <div className="grid grid-cols-5  text-white text-xs">
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <MdHomeFilled className="text-white text-xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  Home
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <LuCalendarDays className="text-white text-xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  Attendence
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <LiaClipboardListSolid className="text-white text-xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  Tasks
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <RxExit className="text-white text-xl" />
                </div>
                <p className="text-white  font-extralight text-xs opacity-75">
                  Leaves
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <BsPersonFillLock className="text-white text-xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  My
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
