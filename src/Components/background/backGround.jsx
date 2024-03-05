import React from "react";

const BackGround = () => {
  return (
    <>
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
    </>
  );
};

export default BackGround;
