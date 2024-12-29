/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavButton from "./Assets/NavButton";
import ccLogo from "./Assets/ccs_20.png";
import menuLogo from "./Assets/menuLogo.svg";
import { ImgHTMLAttributes } from "react";
import { useNavigate } from "react-router";

export default function NewNavbar() {
	const navigate = useNavigate();
	return (
		<header className="fixed flex z-50 w-full shrink-0 items-center py-5 px-15 backdrop-blur-lg md:px-12 bg-[#ffffff1a] text-white">
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="lg:hidden bg-transparent p-2"
						onClick={() => {
							navigate("/");
						}}
					>
						<img
							src={menuLogo}
							alt="menu"
						/>
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					className="bg-transparent text-white border-none"
					side="left"
				>
					<button className="mr-6 lg:flex ">
						<CCSLogo />
						<span className="sr-only">HackTU</span>
					</button>
					<div className="grid gap-2 py-6">
						<button className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300">
							ABOUT
						</button>
						<button className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300">
							SCHEDULE
						</button>
						<button className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300">
							SPONSORS
						</button>
						<button className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300">
							FAQs
						</button>
						<button className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300">
							TEAM
						</button>
						<button className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300">
							REGISTER
						</button>
					</div>
				</SheetContent>
			</Sheet>
			<button
				className="mr-6 hidden lg:flex bg-transparent border-none"
				onClick={() => {
					navigate("/");
				}}
			>
				<CCSLogo />
				<span className="ml-3">HackTU</span>
			</button>
			<nav className="ml-auto hidden lg:flex gap-6">
				<NavButton text="ABOUT" />
				<NavButton text="SCHEDULE" />
				<NavButton text="SPONSORS" />
				<NavButton text="FAQs" />
				<NavButton
					text="REGISTER"
					className="bg-[#192C4C] hover:bg-blue-100  hover:text-[#192C4C] rounded-2xl px-7 mr-20 border-white border"
				/>
				<div>
					<a
						id="mlh-trust-badge"
						style={{
							display: "block",
							maxWidth: "80px",
							minWidth: "60px",
							position: "fixed",
							right: "50px",
							top: "0",
							width: "10%",
							zIndex: 10000,
						}}
						href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=yellow"
						target="_blank"
					>
						<img
							src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
							alt="Major League Hacking 2025 Hackathon Season"
							style={{ width: "100%" }}
						/>
					</a>
				</div>
			</nav>
		</header>
	);
}
function CCSLogo(props: Readonly<ImgHTMLAttributes<HTMLImageElement>>) {
	return (
		<img
			src={ccLogo}
			alt="logo"
			{...props}
		/>
	);
}
