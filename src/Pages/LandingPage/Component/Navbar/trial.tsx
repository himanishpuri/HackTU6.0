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

export default function Trial() {
	return (
		<header className="fixed flex h-16 mt-5 w-[90dvw] mx-[5dvw] rounded-md shrink-0 items-center px-4 md:px-6 bg-[#ffffff1a] text-white">
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="lg:hidden bg-transparent p-2"
					>
						<img
							src={menuLogo}
							alt="menu"
						/>
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<button className="mr-6 lg:flex">
						<CCSLogo />
						<span className="sr-only">Acme Inc</span>
					</button>
					<div className="grid gap-2 py-6">
						<button className="flex w-full items-center py-2 text-lg font-semibold">
							ABOUT
						</button>
						<button className="flex w-full items-center py-2 text-lg font-semibold">
							SCHEDULE
						</button>
						<button className="flex w-full items-center py-2 text-lg font-semibold">
							SPONSORS
						</button>
						<button className="flex w-full items-center py-2 text-lg font-semibold">
							FAQs
						</button>
						<button className="flex w-full items-center py-2 text-lg font-semibold">
							TEAM
						</button>
						<button className="flex w-full items-center py-2 text-lg font-semibold">
							Register
						</button>
					</div>
				</SheetContent>
			</Sheet>
			<button className="mr-6 hidden lg:flex">
				<CCSLogo />
				<span className="ml-3">HackTU</span>
			</button>
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

function CCSLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
	return (
		<img
			src={ccLogo}
			alt="logo"
			{...props}
		/>
	);
}
