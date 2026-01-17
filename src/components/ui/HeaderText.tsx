interface HeadingProps {
  text: string;
}
const HeaderText = ({ text }: HeadingProps) => {
  return (
    <div className="flex justify-center items-center w-full pb-10 bg-transparent font-raleway">
      <h1 className="text-[7vw] text-[#D1FAE5] mt-[120px] font-extrabold tracking-normal absolute">
        {text}
      </h1>
      <h1 className="text-[10vw] text-[#D1FAE5] opacity-10 font-bold tracking-normal">
        {text}
      </h1>
    </div>
  );
};

export default HeaderText;
