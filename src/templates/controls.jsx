import Bulb from "../assets/bulb.png";
import Home from "../assets/Icon feather-home.png";
import Settings from "../assets/Icon feather-settings.png";

const Controls = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex py-[20px] w-[156px] mx-auto justify-between">
          <img src={Bulb} alt="" />
          <img src={Home} alt="" />
          <img src={Settings} alt="" />
        </div>
      </div>
    </>
  );
};

export default Controls;
