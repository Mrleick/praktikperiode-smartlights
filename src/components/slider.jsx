import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const Slider = () => {
  return (
    <>
      <div className="flex items-center mx-auto">
        <FaRegLightbulb className="w-[17px] h-[23px] text-bulbone" />
        <div className="w-[258px] h-[2px] bg-slider relative mb-2 mt-2 mx-[15px]">
          <div className="flex justify-between mt-2 w-full">
            <div className="w-[1px] h-2 bg-gray-400"></div>
            <div className="w-[1px] h-2 bg-gray-400"></div>
            <div className="w-[1px] h-2 bg-gray-400"></div>
            <div className="w-[1px] h-2 bg-gray-400"></div>
            <div className="w-[1px] h-2 bg-gray-400"></div>
            <div className="w-[1px] h-2 bg-gray-400"></div>
          </div>
          <div className="w-[14px] h-[14px] bg-white absolute top-[-6px] drop-shadow-lg rounded-full"></div>
        </div>
        <FaLightbulb className="w-[17px] h-[23px] text-bulbone" />
      </div>
    </>
  );
};

export default Slider;
