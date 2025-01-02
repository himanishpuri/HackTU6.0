import PrizeBox from "./material/PrizeBox";
import first from "./material/1st.png";
import second from "./material/2nd.png";
import third from "./material/3rd.png";
import sparkle from "./material/sparkles.png";
import HeaderText from "@/components/ui/HeaderText";

function PrizeRedesign() {
	return (
		<div
			id="prizes"
			className="flex flex-col justify-center items-center gap-16"
		>
			<HeaderText text="PRIZES" />
			<div className="flex flex-col justify-center items-center gap-10">
				<section className="flex justify-center items-center gap-10 h-60 max-sm:h-auto">
					<PrizeBox
						imgSrc={second}
						prizeMoney="50,000"
						title="Second Prize"
						className="self-end max-sm:hidden border-[#989C9D]"
					/>
					<PrizeBox
						imgSrc={first}
						prizeMoney="70,000"
						title="First Prize"
						className="self-start border-[#F5D875] hover:scale-125"
					/>
					<PrizeBox
						imgSrc={third}
						prizeMoney="20,000"
						title="Third Prize"
						className="self-end max-sm:hidden border-[#059669]"
					/>
				</section>
				<section className="flex max-xs:flex-col justify-center items-center gap-6">
					<PrizeBox
						imgSrc={second}
						prizeMoney="50,000"
						title="Second Prize"
						className="sm:hidden border-[#989C9D]"
					/>
					<PrizeBox
						imgSrc={third}
						prizeMoney="20,000"
						title="Third Prize"
						className="sm:hidden border-[#059669]"
					/>
				</section>
				<section className="flex max-xs:flex-col justify-center items-center gap-6">
					<PrizeBox
						imgSrc={sparkle}
						prizeMoney="10,000"
						title="First Year Hack"
						className="border-[#D1FAE5]"
					/>
					<PrizeBox
						imgSrc={sparkle}
						prizeMoney="10,000"
						title="All girl's team"
						className="border-[#D1FAE5]"
					/>
				</section>
			</div>
		</div>
	);
}

export default PrizeRedesign;
