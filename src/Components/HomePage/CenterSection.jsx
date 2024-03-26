import React, { Children, useContext, useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { FaPlayCircle } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { TbClockOff } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import CircularProgress from "./CircularProgress";
import Circle from "../test/Circle";
import { AppContext } from "../../context/AppProvider";

const CenterSection = () => {
  const { history, time } = useContext(AppContext);
  const [checkIn, setCheckIn] = useState("Pending");
  const [checkOut, setCheckOut] = useState("Pending");
  const [workingHours, setWorkingHours] = useState("Pending");

  function gettingTimeFomat(time24) {
    const date = new Date(time24);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const period = hours < 12 ? "AM" : "PM";

    let hours12 = hours % 12;
    hours12 = hours12 === 0 ? 12 : hours12; // Convert 0 to 12 for 12 AM

    // Construct the 12-hour time string
    const time12 = `${hours12}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${period}`;

    console.log(time12);
    return time12;
  }

  const getTimeDiff = (checkIn,checkOut) => {
    if (history.length > 1) {
      // for (let log of history) {
      //   const timeDiff = Math.abs()
      // }
      const timeDiff = Math.abs(new Date(checkOut) - new Date(checkIn) )
      const hours = Math.floor(timeDiff / (1000 * 60 * 60)); // Convert milliseconds to hours
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Convert remaining milliseconds to minutes
      console.log(hours,minutes,' the diff in the consle')
    }
  };

  useEffect(() => {
    if (history.length > 0) {
      console.log(history, " the consling history");
      setCheckIn(() => {
        if (history[0].status === "checkIn") {
          const time = gettingTimeFomat(history[0].time);
          return time;
        }
      });
      console.log(history[history.length - 1].status, " the sconsling");
      if (history.length > 1) {
        setCheckOut(() => {
          if (history[history.length - 1].status === "checkOut") {
            const time = gettingTimeFomat(history[history.length - 1].time);
            return time;
          }
        });
      }
    }
  }, [history]);

  useEffect(() => {
    getTimeDiff();
  }, [history]);

  return (
    <div className="chumma grid gap-2  pb-2 max-h-[45vh]">
      <div className=" flex justify-center">
        <div className="grid justify-center items-center  circle-div">
          {/* <Circle /> */}
          <CircularProgress />
        </div>
      </div>
      <div className=" text-white grid ">
        <div className="grid grid-cols-3 items-center justify-around">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-md">
              <FaClockRotateLeft />
            </p>
            <p className="text-sm">{checkIn}</p>
            <p className="text-xs font-extralight opacity-50">Check in</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-md">
              <TbClockOff />
            </p>
            <p className="text-sm">{checkOut}</p>
            <p className="text-xs font-extralight opacity-50">Check Out</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-md">
              <TbClock24 />
            </p>
            <p className="text-sm">7:58 Hrs</p>
            <p className="text-xs font-extralight opacity-50">Working Hrs</p>
          </div>
        </div>
      </div>

      <div className="extra flex justify-center items-center w-full px-2 pb-4">
        <div className="flex-1">
          <div className=" bg-white h-[3.5rem] flex  items-center justify-between rounded-2xl p-3">
            <div className="text-lg font-bold text-gray-400">
              Name your activity
            </div>
            <div>
              <FaPlayCircle className="text-green-500 text-3xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
