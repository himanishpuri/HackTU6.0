import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavButton from "./Assets/NavButton";
import ccLogo from "./Assets/ccs_20.png";
import menuLogo from "./Assets/menuLogo.svg";
import { ImgHTMLAttributes, useState } from "react";
import { useNavigate } from "react-router";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const scrollToSection = (
	e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	tag: string,
	closeSidebar?: () => void, // Accept a function to close the sidebar
) => {
	e.preventDefault();
	if (closeSidebar) closeSidebar(); // Close the sidebar when a link is clicked
	gsap.to(window, {
		duration: 1.3,
		scrollTo: {
			y: tag,
		},
		ease: "power2.out",
	});
};

export default function NewNavbar() {
	const navigate = useNavigate();
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // State for sidebar visibility

	// Function to close the sidebar
	const closeSidebar = () => setIsSidebarOpen(false);

	return (
		<header className="fixed flex z-50 w-full shrink-0 items-center py-5 px-8 backdrop-blur-lg bg-transparent text-white">
			<Sheet
				open={isSidebarOpen}
				onOpenChange={setIsSidebarOpen}
			>
				{" "}
				{/* Control sidebar open state */}
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="lg:hidden bg-transparent p-2"
						onClick={() => setIsSidebarOpen(true)}
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
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) => scrollToSection(e, "#about", closeSidebar)} // Pass closeSidebar
						>
							ABOUT
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) =>
								scrollToSection(e, "#prizes", closeSidebar)
							} // Pass closeSidebar
						>
							PRIZES
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) =>
								scrollToSection(e, "#tracks", closeSidebar)
							} // Pass closeSidebar
						>
							TRACKS
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) =>
								scrollToSection(e, "#timeline", closeSidebar)
							} // Pass closeSidebar
						>
							TIMELINE
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) => scrollToSection(e, "#team", closeSidebar)} // Pass closeSidebar
						>
							TEAM
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) =>
								scrollToSection(e, "#gallery", closeSidebar)
							}
						>
							GALLERY
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) =>
								scrollToSection(e, "#sponsors", closeSidebar)
							}
						>
							SPONSORS
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={(e) => scrollToSection(e, "#faqs", closeSidebar)} // Pass closeSidebar	>
						>
							FAQs
						</button>
						<button
							className="flex w-full items-center p-2 text-lg font-semibold hover:bg-[#192C4C] rounded-md duration-300"
							onClick={() => {
								window.open("https://submit.ccstiet.com/");
								closeSidebar(); // Close the sidebar when the link is opened
							}}
						>
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
				<NavButton
					text="ABOUT"
					onClick={(e) => scrollToSection(e, "#about")}
				/>
				<NavButton
					text="TRACKS"
					onClick={(e) => scrollToSection(e, "#tracks")}
				/>
				<NavButton
					text="TIMELINE"
					onClick={(e) => scrollToSection(e, "#timeline")}
				/>
				<NavButton
					text="FAQs"
					onClick={(e) => scrollToSection(e, "#faqs")}
				/>
				<NavButton
					text="REGISTER"
					className="bg-[#192C4C] hover:bg-blue-100  hover:text-[#192C4C] rounded-2xl px-7 mr-20 border-white border"
					onClick={() => {
						window.open("https://submit.ccstiet.com/");
						closeSidebar(); // Close the sidebar when the link is opened
					}}
				/>
				<div>
					<a
						id="mlh-trust-badge"
						style={{
							display: "block",
							maxWidth: "70px",
							minWidth: "50px",
							position: "fixed",
							right: "20px",
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
