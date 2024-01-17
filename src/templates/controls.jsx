import { Link } from "react-router-dom";
import Bulb from "../assets/bulb.png";
import Home from "../assets/Icon feather-home.png";
import Settings from "../assets/Icon feather-settings.png";

const Controls = () => {
  return (
    <>
      <div className="bg-white bottom-0 fixed w-full">
        <div className="flex py-[20px] w-[156px] mx-auto justify-between">
          <img className="cursor-pointer" src={Bulb} alt="" />
          <Link to="/">
            <img className="cursor-pointer" src={Home} alt="" />
          </Link>
          <img className="cursor-pointer" src={Settings} alt="" />
        </div>
      </div>
    </>
  );
};

export default Controls;
