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
		<header className="fixed flex h-16 mt-5 w-[90dvw] mx-[5dvw] rounded-md shrink-0 items-center px-4 md:px-6 bg-[#ffffff1a] text-white">
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
					<button className="mr-6 lg:flex">
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
			<Button
				variant="outline"
				size="icon"
				className="mr-6 hidden lg:flex"
				onClick={() => {
					navigate("/");
				}}
			>
				<CCSLogo />
				<span className="ml-3">HackTU</span>
			</Button>
			<nav className="ml-auto hidden lg:flex gap-6">
				<NavButton text="ABOUT" />
				<NavButton text="SCHEDULE" />
				<NavButton text="SPONSORS" />
				<NavButton text="FAQs" />
				<NavButton text="TEAM" />
				<NavButton
					text="REGISTER"
					className="bg-[#192C4C] rounded-2xl px-7 border-white border"
				/>
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
