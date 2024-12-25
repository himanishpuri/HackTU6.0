import { useState, useEffect } from "react";

export default function Timer() {
  const targetDate = new Date("2025-02-08T11:00:00"); // Set your specific date and time here
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / (1000 * 60)) % 60);
        const secs = Math.floor((difference / 1000) % 60);

        setTime({ days, hours, mins, secs });
      } else {
        // Stop the timer when the target date is reached
        setTime({ days: 0, hours: 0, mins: 0, secs: 0 });
        clearInterval(timerInterval);
      }
    };

    const timerInterval = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timerInterval); // Cleanup on component unmount
  }, []); // Removed `targetDate` dependency as it doesn't change

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
