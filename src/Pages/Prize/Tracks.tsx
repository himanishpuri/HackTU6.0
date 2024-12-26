import HeaderText from "@/components/ui/HeaderText";
import track from "./Assets/tracks.png";

const Tracks = () => {
  return (
    <div className="bg-[#0F203E] justify-center items-center w-full flex flex-col py-5">
      <HeaderText text="TRACKS" />
      <img src={track} className=" w-[75%] bg-[#0F203E] h-full" alt="" />
    </div>
  );
};

export default Tracks;
