import { FaArrowLeft } from "react-icons/fa6";
import Lamp from "../assets/lampe.svg";

const RoomNav = () => {
  return (
    <div className="flex justify-between ">
      <div className="ml-[25px]">
        <h1 className="text-[30px] font-bold text-white w-[86px] mt-[50px]">
          <FaArrowLeft className="inline text-[15px] mr-[5px]" />
          Bed Room
        </h1>
        <p className="text-[#FFD239] font-bold text-[19px] mt-[10px]">
          4 Lights
        </p>
      </div>

      <div>
        <img className="z-10 relative" src={Lamp} alt="" />
        <div className="w-[25px] h-[25px] rounded-full absolute bg-[#e5e7eb] right-[56px] top-[142px]"></div>
      </div>
    </div>
  );
};

export default RoomNav;
