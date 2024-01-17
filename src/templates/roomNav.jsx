import { FaArrowLeft } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Lamp from "../assets/lampe.svg";

const RoomNav = ({ selectedColor }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
  }, [controls]);

  return (
    <div className="flex justify-between">
      <div className="ml-[25px]">
        <h1 className="text-[30px] font-bold text-white w-[86px] mt-[50px]">
          <FaArrowLeft className="inline text-[15px] mr-[5px]" />
          Bed Room
        </h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={controls}
          className="text-[#FFD239] font-bold text-[19px] mt-[10px]"
        >
          4 Lights
        </motion.p>
      </div>

      <div className="mr-[32px]">
        <img className="z-10 relative" src={Lamp} alt="" />
        <div
          className="w-[25px] h-[25px] rounded-full absolute blur-sm right-[90px] top-[142px]"
          style={{ backgroundColor: selectedColor }}
        ></div>
      </div>
    </div>
  );
};

export default RoomNav;
