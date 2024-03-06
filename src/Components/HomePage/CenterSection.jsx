import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { FaPlayCircle } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { TbClockOff } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import CircularProgress from "./CircularProgress";

const CenterSection = () => {
  return (
    <>
      <div className="row-span-3 grid justify-center items-center ">
        <div>
          <CircularProgress />
        </div>
      </div>

      <div className="row-span-1 text-white grid ">
        <div className="grid grid-cols-3 items-center justify-around">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-2xl">
              <FaClockRotateLeft />
            </p>
            <p className="">10:45 AM</p>
            <p className="text-xs font-extralight opacity-50">Check in</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-2xl">
              <TbClockOff />
            </p>
            <p className="">10:45 AM</p>
            <p className="text-xs font-extralight opacity-50">Check Out</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-2xl">
              <TbClock24 />
            </p>
            <p className="">10:45 AM</p>
            <p className="text-xs font-extralight opacity-50">Working Hrs</p>
          </div>
        </div>
      </div>

      <div className="row-span-2  flex w-full ">
        <div className="flex-1 ">
          <div className=" bg-white h-[4rem] flex  items-center justify-between rounded-2xl px-3">
            <div className="text-xl font-bold text-gray-400">
              Name your activity
            </div>
            <div>
              <FaPlayCircle className="text-green-500 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterSection;
