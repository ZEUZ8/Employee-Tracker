import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-circular-progressbar/dist/styles.css";
import CenterSection from "./CenterSection";
import FirstSection from "./FirstSection";
import Footer from "./Footer";
import "./style.css";

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
      <div className="absolute   inset-0 h-[90vh]   flex flex-col">
        <div className=" flex justify-end items-end px-5 pt-4 pb-3">
          <div className="flex items-center gap-3">
            <div>
              <p className="bell text-white text-lg flex items-center justify-center">
                <GoBell />
              </p>
            </div>
            <div>
              <p className="three-lines rounded-full bg-[#5015A6] p-2 text-sm text-white ">
                <GiHamburgerMenu />
              </p>
            </div>
          </div>
        </div>
        <div className="first-section px-3 pt-3 test relative ">
          <FirstSection />
        </div>

        <div className="second-section grid gap-2">
          <CenterSection />
        </div>

        <div className="fixed bottom-0 left-0 w-full  ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
