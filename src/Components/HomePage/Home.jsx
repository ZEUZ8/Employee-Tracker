import React from "react";
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

const Home = () => {
  const percentage = 66;
  return (
    <>
      <div className="relativ  h-screen">
        {/* Background images */}
        <BackGround />

        {/* Content */}
        <div className=" absolute inset-0 max-h-[100vh]  grid grid-rows-12">
          <div className="row-span-6 grid grid-rows-6 p-5 ">
            <div className="row-span-1 flex justify-end items-end">
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
              className="absolute text-white z-10"
              style={{ top: "13%", right: "8%" }}
            >
              <div className="">
                <img
                  src="/imgs/person.png"
                  className="rounded-full border-2 border-white w-[84px] h-[84px]"
                  alt=""
                />
              </div>
            </div>
            <div className="row-span-1 text-start mx-12">
              <div className="text-white">
                <p className="">Hi sinan</p>
                <p className="font-extralight text-xs">Emp ID</p>
              </div>
            </div>
            <div className="row-span-4 ">
              <div className=" bg-opacity-5 bg-white border-2 border-white h-full rounded-2xl grid grid-rows-3 text-white backdrop-blur-3xl">
                <div className="row-span-2 grid justify-center  px-5 pt-5">
                  <p className="">Company Name</p>
                  <p className="font-extralight flex justify-center items-center gap-2">
                    <span>
                      <IoLocationOutline />
                    </span>{" "}
                    location
                  </p>
                  <h1 className="text-5xl">10:26 AM</h1>
                  <p className="text-lg">12 March 2024</p>
                </div>
                <div className="row-span-1  grid justify-center ">
                  <hr className="text-white w-[90%] mx-auto" />

                  <div className="relative flex justify-center items-center">
                    <label class="switch relative">
                      <input type="checkbox" class="toggle-btn rounded-full relative" />
                      <p className="absolute top-0 z-15 text-black">
                        alskdj
                      </p>
                      <span class="slider "></span>

                    </label>
                    <div className="flex-1 absolute  grid justify-center items-center">
                      <p className="text-white">Slide to Attendance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-5 p-5 px-5 ">
            <div className=" grid grid-rows-7 gap-1">
              <div className="row-span-3 grid justify-center items-center ">
                <div>
                  <CircularProgressbar
                    value={66}
                    text={`07:10`}
                    className="h-[10rem]"
                    styles={{
                      path: {
                        stroke: "#5015A6", // Color of the progress bar line
                      },
                      text: {
                        fill: "white", // Color of the text inside the progress bar
                      },
                      trail: {
                        stroke: "white", // Color of the trail (the remaining part of the circle)
                        fill: "white",
                      },
                    }}
                  />
                </div>
              </div>

              <div className="row-span-2 text-white grid">
                <div className="grid grid-cols-3 items-center justify-around">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <p className="text-2xl">
                      <FaClockRotateLeft />
                    </p>
                    <p className="">10:45 AM</p>
                    <p className="text-xs font-extralight opacity-50">
                      Check in
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <p className="text-2xl">
                      <TbClockOff />
                    </p>
                    <p className="">10:45 AM</p>
                    <p className="text-xs font-extralight opacity-50">
                      Check Out
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <p className="text-2xl">
                      <TbClock24 />
                    </p>
                    <p className="">10:45 AM</p>
                    <p className="text-xs font-extralight opacity-50">
                      Working Hrs
                    </p>
                  </div>
                </div>
              </div>

              <div className="row-span-2  flex w-full ">
                <div className="flex-1 ">
                  <div className=" bg-white h-[4rem] flex  items-center justify-between rounded-2xl p-4">
                    <div className="text-xl font-bold text-gray-400">
                      Name your activity
                    </div>
                    <div>
                      <FaPlayCircle className="text-green-500 text-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-1 rounded-t-2xl bg-[#24074F] grid items-center">
            <div className="grid grid-cols-5 text-white text-xs">
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <MdHomeFilled className="text-white text-2xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  Home
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <LuCalendarDays className="text-white text-2xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  Attendence
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <LiaClipboardListSolid className="text-white text-2xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  Tasks
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <RxExit className="text-white text-2xl" />
                </div>
                <p className="text-white  font-extralight text-xs opacity-75">
                  Leaves
                </p>
              </div>
              <div className="grid justify-center items-center gap-1">
                <div className="flex justify-center">
                  <BsPersonFillLock className="text-white text-2xl" />
                </div>
                <p className="text-white font-extralight text-xs opacity-75">
                  My
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
