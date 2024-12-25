// import React from 'react'

// const Prize = () => {
//   return (
//     <>
//         <div className='h-screen w-full bg-zinc-800'>
            
//         </div>
//     </>
//   )
// }

// export default Prize


import React, { useState } from "react";

const PrizeCards = () => {
  // Define the prizes for each card
  const prizes = [
    "First Prize: 70,000",
    "Second Prize: 50,000",
    "Third Prize: 30,000",
    "First-Year Award: 20,000",
    "All-Girls Team: Loda"
  ];

  // State to track which card is open (default to the first card)
  const [openCard, setOpenCard] = useState(0);

  // Function to handle card click
  const handleCardClick = (index) => {
    setOpenCard(index); // Set the clicked card as the open one
  };

  return (
  <>
        <h1 className="justify-center flex text-3xl font-bold text-white bg-zinc-600">Prizes</h1>
      <div className="flex justify-center gap-2 flex bg-zinc-700 p-7">
      {prizes.map((prize, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          className={`w-41 h-48 rounded-lg flex flex-col justify-center items-center border-2 border-blue-800 cursor-pointer transition-transform duration-300  ${
            openCard === index
              ? "bg-teal-300 text-gray-800 scale-105"
              : "bg-gray-800 text-white"
          } shadow-lg`}
        >
          {openCard === index ? (
            <div className="text-center font-bold text-lg ">{prize}</div>
          ) : (
            <div className="text-center font-bold text-lg h-[4vh] w-[4vw]">
              {index === 0
                ? "1st"
                : index === 1
                ? "2nd"
                : index === 2
                ? "3rd"
                : index === 3
                ? "1st Year"
                : "All Girls"}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default PrizeCards;
