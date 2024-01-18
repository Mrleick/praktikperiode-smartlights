import React, { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import Header from "../components/Header";

const Slider = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };

  return (
    <>
      <Header title="Intensity" color="text-background-header" />
      <div className="flex items-center mx-auto">
        <FaRegLightbulb className="w-4 h-5 text-[#CECECE]" />
        <input
          type="range"
          min="0"
          max="254"
          value={value}
          onChange={handleChange}
          className="w-64 h-px bg-border mb-2 mt-2 mx-4"
        />
        <FaRegLightbulb className="w-4 h-5 text-[#FFD239]" />
      </div>
    </>
  );
};

export default Slider;
