import PrizeBox from "./material/PrizeBox";
import first from "./material/1st.png";
import second from "./material/2nd.png";
import third from "./material/3rd.png";
import sparkle from "./material/sparkles.png";
import HeaderText from "@/components/ui/HeaderText";

function PrizeRedesign() {
	return (
		<div className="flex flex-col justify-center items-center gap-16">
			<HeaderText text="PRIZES" />
			<div className="flex flex-col justify-center items-center gap-10">
				<section className="flex justify-center items-center gap-10 h-60 max-sm:h-auto">
					<PrizeBox
						imgSrc={second}
						prizeMoney="50,000"
						title="Second Prize"
						borderColor="#989C9D"
						className="self-end max-sm:hidden"
					/>
					<PrizeBox
						imgSrc={first}
						prizeMoney="70,000"
						title="First Prize"
						borderColor="#F5D875"
						className="self-start"
					/>
					<PrizeBox
						imgSrc={third}
						prizeMoney="20,000"
						title="Third Prize"
						borderColor="#059669"
						className="self-end max-sm:hidden"
					/>
				</section>
				<section className="flex max-xs:flex-col justify-center items-center gap-6">
					<PrizeBox
						imgSrc={second}
						prizeMoney="50,000"
						title="Second Prize"
						className="sm:hidden"
					/>
					<PrizeBox
						imgSrc={third}
						prizeMoney="20,000"
						title="Third Prize"
						className="sm:hidden"
					/>
				</section>
				<section className="flex max-xs:flex-col justify-center items-center gap-6">
					<PrizeBox
						imgSrc={sparkle}
						prizeMoney="10,000"
						title="First Year Hack"
					/>
					<PrizeBox
						imgSrc={sparkle}
						prizeMoney="10,000"
						title="All girl's team"
					/>
				</section>
			</div>
		</div>
	);
}

export default PrizeRedesign;
