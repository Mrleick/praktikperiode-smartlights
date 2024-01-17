import React from "react";
import Header from "../components/Header";

const ColorButtons = ({ onColorChange }) => {
  const buttonColors = [
    "#FF9B9B",
    "#94EB9E",
    "#94CAEB",
    "#A594EB",
    "#DE94EB",
    "#EBD094",
  ];

  return (
    <>
      <Header title="Colors" color="text-background-header" />
      <div className="flex gap-[16px]">
        {buttonColors.map((color, index) => (
          <div
            key={index}
            className="w-6 h-6 rounded-full bg-opacity-75 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
          />
        ))}
      </div>
    </>
  );
};

export default ColorButtons;
