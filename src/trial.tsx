import React from "react";

const PrizeCard: React.FC = () => {
	return (
		<div className="flex items-center shadow-lg rounded-lg overflow-hidden">
			{/* Main prize section */}
			<div className="bg-[#92D2CE] text-blue-900 font-bold text-center p-6 flex flex-col items-center justify-center w-1/2">
				<span className="text-4xl">70,000</span>
				<span className="text-2xl">1st</span>
			</div>

			{/* Secondary cards */}
			<div className="flex w-1/2">
				{["2nd", "3rd", "1st year", "All girls"].map((text, index) => (
					<div
						key={index}
						className="bg-[#2A4A62] text-white text-sm font-bold flex items-center justify-center px-3 py-4 flex-1 transform -rotate-90"
						style={{
							borderTopRightRadius: index === 3 ? "0.5rem" : "0",
							borderBottomRightRadius: index === 3 ? "0.5rem" : "0",
							marginLeft: index > 0 ? "-0.5rem" : "0",
						}}
					>
						{text}
					</div>
				))}
			</div>
		</div>
	);
};

export default PrizeCard;
