import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { BsPersonFillLock } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full row-start-12 rounded-t-2xl bg-[#24074F]  grid items-center max-w-[100vw] py-2 ">
      <div className="grid grid-cols-5  text-white text-xs">
        <div className="grid justify-center items-center gap-1">
          <div className="flex justify-center">
            <MdHomeFilled className="text-white text-xl" />
          </div>
          <p className="text-white font-extralight text-xs opacity-75">Home</p>
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
          <p className="text-white font-extralight text-xs opacity-75">Tasks</p>
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
          <p className="text-white font-extralight text-xs opacity-75">My</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
