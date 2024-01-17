import React, { useState } from "react";
import RoomNav from "../templates/roomNav";
import ColorButtons from "../components/colorButtons";
import Slider from "../components/slider";
import Scenes from "../templates/Scenes";
import Controls from "../templates/controls";

const Roompage = () => {
  const [selectedColor, setSelectedColor] = useState("#FFD139");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <RoomNav selectedColor={selectedColor} />
      <div className="bg-background-default flex flex-col rounded-t-[30px] p-[25px] gap-[24px] mt-[20px]">
        <Slider />
        <ColorButtons onColorChange={handleColorChange} />
        <Scenes />
      </div>
      <Controls />
    </>
  );
};

export default Roompage;
