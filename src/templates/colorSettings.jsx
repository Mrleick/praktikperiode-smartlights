import Slider from "../components/slider";
import ColorButtons from "../components/colorButtons";
import Scenes from "../templates/Scenes";

const ColorSettings = () => {
  return (
    <>
      <div className="bg-background-default flex flex-col rounded-t-[30px] p-[25px] gap-[24px] mt-[20px]">
        <Slider />
        <ColorButtons />
        <Scenes />
      </div>
    </>
  );
};

export default ColorSettings;
