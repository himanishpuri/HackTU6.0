import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState({
    days: 50,
    hours: 30,
    mins: 30,
    secs: 30,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        const { days, hours, mins, secs } = prevTime;

        if (secs > 0) {
          return { ...prevTime, secs: secs - 1 };
        } else if (mins > 0) {
          return { ...prevTime, secs: 59, mins: mins - 1 };
        } else if (hours > 0) {
          return { ...prevTime, secs: 59, mins: 59, hours: hours - 1 };
        } else if (days > 0) {
          return { days: days - 1, hours: 23, mins: 59, secs: 59 };
        } else {
          clearInterval(countdown); // Stop the timer
          return prevTime;
        }
      });
    }, 1000); // Update every second

    return () => clearInterval(countdown); // Cleanup
  }, []);

  return (
    <div className="flex flex-col items-center mt-7 gap-5">
      <h1 className="text-4xl text-transparent text-center font-bold live-in">
        LIVE IN
      </h1>
      <div className="flex gap-4">
        <div className="border-2 flex justify-center items-center flex-col rounded-xl py-4 px-5 border-[#A0BED3]">
          <h1 className="font-bold text-2xl text-white">{time.days}</h1>
          <p className="text-xl text-[#A0BED3] font-bold">days</p>
        </div>
        <div className="border-2 flex justify-center items-center flex-col rounded-xl py-4 px-5 border-[#A0BED3]">
          <h1 className="font-bold text-2xl text-white">{time.hours}</h1>
          <p className="text-xl text-[#A0BED3] font-bold">hours</p>
        </div>
        <div className="border-2 flex justify-center items-center flex-col rounded-xl py-4 px-5 border-[#A0BED3]">
          <h1 className="font-bold text-2xl text-white">{time.mins}</h1>
          <p className="text-xl text-[#A0BED3] font-bold">mins</p>
        </div>
        <div className="border-2 flex justify-center items-center flex-col rounded-xl py-4 px-5 border-[#A0BED3]">
          <h1 className="font-bold text-2xl text-white">{time.secs}</h1>
          <p className="text-xl text-[#A0BED3] font-bold">secs</p>
        </div>
      </div>
      <style>{`
        .live-in {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
