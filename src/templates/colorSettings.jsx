import Slider from "../components/slider";

const ColorSettings = () => {
  return (
    <>
      <div className="bg-cardcontainer flex flex-col rounded-t-[30px] p-[25px] gap-[24px] mt-[20px]">
        <h2 className="text-cardheader font-bold text-[19px]">Intensity</h2>
        <Slider />
        <h2 className="text-cardheader font-bold text-[19px]">Colors</h2>
      </div>
    </>
  );
};

export default ColorSettings;
