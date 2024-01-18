import React, { useState } from "react";
import RoomNav from "../templates/roomNav";
import ColorButtons from "../components/colorButtons";
import Slider from "../components/slider";
import Scenes from "../templates/Scenes";
import Controls from "../templates/controls";
import axios from "axios";
import convert from "color-convert";
import { IoPower } from "react-icons/io5";

const Roompage = () => {
  const [selectedColor, setSelectedColor] = useState("#FFD139");
  const [brightness, setBrightness] = useState(100); // Default brightness

  const handleColorChange = async (color) => {
    try {
      const hsvColor = convert.hex.hsv(color);
      const adjustedHue = Math.floor((hsvColor[0] * 65535) / 360);
      const adjustedBri = Math.floor(brightness * 2.54);

      const apiUrl =
        "http://192.168.8.105/api/gCGyOMawlki5Px1SxkB7GzRWj3WNF9HnejQnY8wP/lights/{light_id}/state";
      const lightId = 36;

      // Send PUT-anmodning til API'en
      await axios.put(apiUrl.replace("{light_id}", lightId), {
        hue: adjustedHue,
        bri: adjustedBri,
      });

      setSelectedColor(color);
    } catch (error) {
      console.error("Fejl ved farveskift:", error);
    }
  };

  const handleBrightnessChange = async (value) => {
    try {
      const adjustedBri = Math.floor(value * 2.54);
      const apiUrl =
        "http://192.168.8.105/api/gCGyOMawlki5Px1SxkB7GzRWj3WNF9HnejQnY8wP/lights/{light_id}/state";
      const lightId = 36;

      await axios.put(apiUrl.replace("{light_id}", lightId), {
        bri: adjustedBri,
      });

      setBrightness(value);
    } catch (error) {
      console.error("Fejl ved lysstyrkeændring:", error);
    }
  };

  return (
    <>
      <RoomNav selectedColor={selectedColor} />
      <div className="bg-background-default relative flex flex-col rounded-t-[30px] p-[25px] gap-[24px] mt-[20px]">
        <div className="bg-white rounded-full flex justify-center items-center w-[32px] h-[32px] text-[18px] absolute top-[-15px] right-0 mr-[21px] drop-shadow-lg">
          <IoPower className="text-[#FF9696]" />
        </div>
        <Slider onChange={handleBrightnessChange} value={brightness} />
        <ColorButtons onColorChange={handleColorChange} />
        <Scenes />
      </div>
      <Controls />
    </>
  );
};

export default Roompage;
