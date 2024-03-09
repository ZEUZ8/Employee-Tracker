import React, { useEffect, useState } from "react";
import BackGround from "../background/backGround";
import { GrHomeRounded } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { BsPersonFillLock } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";

const Footer = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full row-start-12  rounded-t-2xl bg-[#24074F]  grid items-center max-w-[100vw] py-2 ">
      <div className="grid grid-cols-5  text-white text-xs">
        <div
          className={`grid justify-center  items-center  gap-1 active:scale-110 ${
            selected === "home" && "scale-105 text-[#802CFA]"
          } `}
          onClick={() => setSelected("home")}
        >
          <div className="flex justify-center">
            <GrHomeRounded className={` text-xl`} />
          </div>
          <p className={`font-extralight text-xs opacity-75`}>Home</p>
        </div>
        <div
          className={`grid justify-center  items-center  gap-1 active:scale-110 ${
            selected === "attendence" && "scale-105 text-[#802CFA]"
          } `}
          onClick={() => setSelected("attendence")}
        >
          <div className="flex justify-center">
            <LuCalendarDays className=" text-xl" />
          </div>
          <p className=" font-extralight text-xs opacity-75">
            Attendence
          </p>
        </div>
        <div
          className={`grid justify-center  items-center  gap-1 active:scale-110 ${
            selected === "tasks" && "scale-105 text-[#802CFA]"
          } `}
          onClick={() => setSelected("tasks")}
        >
          <div className="flex justify-center">
            <LiaClipboardListSolid className=" text-xl" />
          </div>
          <p className=" font-extralight text-xs opacity-75">Tasks</p>
        </div>
        <div
          className={`grid justify-center  items-center  gap-1 active:scale-110 ${
            selected === "leaves" && "scale-105 text-[#802CFA]"
          } `}
          onClick={() => setSelected("leaves")}
        >
          <div className="flex justify-center">
            <RxExit className=" text-xl" />
          </div>
          <p className="  font-extralight text-xs opacity-75">
            Leaves
          </p>
        </div>
        <div
          className={`grid justify-center  items-center  gap-1 active:scale-110  ${
            selected === "my" && "scale-105 text-[#802CFA]"
          } `}
          onClick={() => setSelected("my")}
        >
          <div className="flex justify-center items-center">
            <BsPersonFillLock className=" text-xl" />
          </div>
          <p className=" text-center font-extralight text-xs opacity-75">My</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
