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

const Home = () => {
  const percentage = 66;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="relativ w-[100vw] h-[100vh]  broder-5">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-25"
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
          <div className="row-span-6 grid p-3 ">
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
              className="absolute text-white z-10"
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
            <div className="r text-start mx-12">
              <div className="text-white">
                <p className="">Hi sinan</p>
                <p className="font-extralight text-xs">Emp ID</p>
              </div>
            </div>
            <div className=" p-3 ">
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
                  <hr className="text-white w-full mx-auto " />

                  <div className="relative flex justify-center items-center p-4">
                    <p className="absolute z-20 text-white">
                      Slide to Attendance
                    </p>
                    <label class="switch relative flex  items-center ">
                      <div className="absolute z-20 p-4 ">
                        <p
                          style={{
                            transform: isChecked
                              ? "translateX(250px)"
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
                    {/* <div className="flex-1 absolute  grid justify-center items-center">
            <p className="text-white">Slide to Attendance</p>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-5 p-4">
            <CenterSection/>
          </div>
          <div className="row-span-1 row-start-12 rounded-t-2xl bg-[#24074F]  grid items-cente max-w-[100%]">
            <div className="grid grid-cols-5  text-white text-xs">
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
