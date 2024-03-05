import React from "react";
import { MdOutlineFingerprint } from "react-icons/md";
import BackGround from "../background/backGround";
import Login from "./login";

const LoginPage = () => {
  return (
    <div className="relativ  h-screen">
      {/* Background images */}
      <BackGround/>

      {/* Content */}
      <div className=" absolute inset-0 max-h-[100vh]  grid grid-rows-12">
        <div className="row-start-8 flex flex-col items-center justify-center ">
          {/* Your login component */}
          <div className="w-4/5 md:w-2/3 lg:w-1/2">
            <Login />
          </div>

          {/* Touch ID login */}
          <div className="flex flex-col items-center mt-10">
            <div className="finger-gradient border-0 p-4 rounded-2xl">
              <MdOutlineFingerprint className="text-5xl text-white" />
            </div>
            <p className="text-white font-extralight mt-2">
              Login with Touch ID
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



