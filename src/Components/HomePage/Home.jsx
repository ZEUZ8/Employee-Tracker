import React, { useState } from "react";
import BackGround from "../background/backGround";
import { MdHomeFilled } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { BsPersonFillLock } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CenterSection from "./CenterSection";
import FirstSection from "./FirstSection";
import Footer from "./Footer";

const Home = () => {
  const percentage = 66;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="relative w-[100vw] ">
      <img
        className="absolute translate-y-[-2rem]  inset-0 w-[430px] aspect-auto  opacity-25"
        src="/imgs/shape(3).png"
        alt="Background Image"
      />
      <img
        className="absolute translate-y-[15rem] inset-0  opacity-25"
        src="/imgs/shapes(1).png"
        alt="Background Image"
      />
      <img
        className="absolute top-[35%] right-0 opacity-25"
        src="/imgs/shapes(2).png"
        alt="Background Image"
      />
      <div className="absolute  inset-0 h-[90vh]   flex flex-col">

        <div className="p-3 test relative max-h-1/2">
          <FirstSection />
        </div>

        <div className=" grid gap-2 max-h-1/2">
          <CenterSection />
        </div>

        <div className="fixed bottom-0 left-0 w-full  ">
          <div className="w-full row-start-12 rounded-t-2xl bg-[#24074F]  grid items-center max-w-[100vw] py-2 ">
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
    </div>
  );
};

export default Home;
