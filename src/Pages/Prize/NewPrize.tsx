import HeaderText from "@/components/ui/HeaderText";
const NewPrize = () => {
  return (
    <div className="mt-48">
      <HeaderText text="Prizes" />
      <div className="w-full flex flex-col md:flex-row bg-[#0F203E] justify-center items-center p-3 md:p-9">
        <div className="left h-auto md:h-[70%] w-full md:w-[50%] p-3 md:p-9">
          <div className="h-auto md:h-[55%] w-full bg-[#7AB7E0] p-3 md:p-9 flex-col justify-center items-center rounded-2xl">
            <div className="flex font-semibold text-[10vw] md:text-8xl justify-center items-center text-white text-[#e6e6e6] opacity-1 font-extrabold ">
              ₹5,00,000
            </div>
            <h1 className="flex justify-center font-semibold text-[8vw] md:text-6xl text-white text-[#e6e6e6] opacity-1 font-extrabold tracking-normal">
              POOL PRIZE
            </h1>
          </div>
          <div className="flex flex-col md:flex-row h-full w-full gap-4 mb-9 mt-4">
            <div className="h-auto md:h-[45%] w-full md:w-[50%] bg-[#c5b89b] rounded-2xl flex justify-center items-center text-[5vw] md:text-4xl font-semibold text-white p-3">
              <div className="text-center">
                <h1 className="w-full flex justify-center mt-5 font-semibold text-[#e6e6e6] tracking-normal">
                  BEST FIRST
                </h1>
                <h1 className="w-full flex justify-center font-bold text-[#e6e6e6]">
                  YEAR HACK
                </h1>
                <div className="flex justify-center font-semibold mt-4 text-[8vw] md:text-6xl text-[#7e433e] opacity-8 tracking-normal">
                  ₹10,000
                </div>
              </div>
            </div>
            <div className="h-auto md:h-[45%] w-full md:w-[50%] bg-[#f5c5cd] rounded-2xl flex justify-center items-center text-[5vw] md:text-4xl font-semibold text-white p-3">
              <div className="text-center">
                <h1 className="w-full flex justify-center mt-5 font-semibold text-[#e6e6e6]">
                  BEST ALL
                </h1>
                <h1 className="w-full flex justify-center font-bold text-[#e6e6e6]">
                  GIRLS TEAM
                </h1>
                <div className="flex justify-center text-[#FF71AD] font-semibold mt-4 text-[8vw] md:text-6xl">
                  ₹10,000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right h-auto md:h-[70%] w-full md:w-[40%] px-3 py-6 md:px-5 md:py-6">
          <div className="h-1/3 bg-[#ffc737] rounded-2xl flex items-center justify-center">
            <div className="flex items-center">
              <img
                className="h-[15vw] md:h-[19vh] w-[25vw] md:w-[10vw] sm:h-[7vh] sm:[w-5vw] object-contain"
                src="https://static.vecteezy.com/system/resources/previews/028/592/471/non_2x/1st-prize-trophy-hand-drawn-education-icon-free-png.png"
                alt=""
              />
              <h1 className="font-semibold text-[8vw] md:text-7xl text-[#d8ffc6] ml-3">
                ₹70,000
              </h1>
            </div>
          </div>
          <div className="h-1/3 bg-[#c0c0c0] rounded-2xl mt-3 flex items-center justify-center">
            <img
              className="h-[15vw] md:h-[16vh] w-[25vw] md:w-[7vw] object-contain"
              src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/2nd-prize-icon.png"
              alt=""
            />
            <h1 className="font-semibold text-[8vw] md:text-7xl text-[#fffafa] ml-3">
              ₹50,000
            </h1>
          </div>
          <div className="h-1/3 bg-[#774640] rounded-2xl mt-3 flex items-center justify-center">
            <h1 className="font-semibold text-[8vw] md:text-7xl text-[#e6e6e6] ml-[10vw] md:ml-[5vw]">
              ₹50,000
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPrize;
