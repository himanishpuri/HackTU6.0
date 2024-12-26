interface headingProps {
  text: string;
}
const HeaderText = ({ text }: headingProps) => {
  return (
    <div className="flex justify-center items-center w-full pb-10 bg-[#0F203E]">
      <h1 className="text-[100px] text-[#D1FAE5] mt-[120px] font-extrabold tracking-normal absolute">
        {text}
      </h1>
      <h1 className="text-[150px] text-[#D1FAE5] opacity-10 font-extrabold tracking-normal">
        {text}
      </h1>
    </div>
  );
};

export default HeaderText;
