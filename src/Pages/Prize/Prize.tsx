// import HeaderText from "@/components/ui/HeaderText";

// import prizeimg from "./Assets/prizes.png";
// const PrizeCards = () => {
//   return (
//     <div className="flex justify-center items-center flex-col my-10">
//       <HeaderText text="PRIZES" />
//       <img className="w-[50%] " src={prizeimg} alt="" />
//     </div>
//   );
// };

// export default PrizeCards;

import { useState } from "react";
import { motion } from "framer-motion";
import HeaderText from "@/components/ui/HeaderText";

const prizes = [
  { label: "1st", value: "70,000" },
  { label: "2nd", value: "50,000" },
  { label: "3rd", value: "20,000" },
  { label: "1st year", value: "10,000" },
  { label: "All girls", value: "10,000" },
];

const PrizeCards = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center my-12">
      <HeaderText text="PRIZES" />
      <div className="flex bg-[#183249] rounded-lg overflow-hidden my-10">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            className={`flex flex-col justify-center items-center text-white font-bold ${
              expanded === index ? "bg-[#92D2CE] text-[#183249] " : ""
            }`}
            style={{
              width: expanded === index ? "300px" : "100px",
              height: "200px",
              shadow: "10px 4px 4px rgba(0, 0, 0, 0.45)",
              borderRight: "1px solid #ffffff",
              cursor: "pointer",
            }}
            onClick={() => setExpanded(index)}
            animate={{ width: expanded === index ? 300 : 100 }}
            transition={{ duration: 0.3 }}
          >
            {expanded === index ? (
              <>
                <motion.div
                  className="text-6xl font-extrabold z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {prize.value}
                </motion.div>
                <motion.div
                  className="text-6xl font-extrabold absolute ml-2 mb-9  text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                >
                  {prize.value}
                </motion.div>
                <motion.div
                  className="text-xl mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {prize.label}
                </motion.div>
              </>
            ) : (
              <motion.div
                className="text-xl rotate-90"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                {prize.label}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrizeCards;
