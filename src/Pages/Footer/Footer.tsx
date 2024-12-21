import curve from "./Assets/footer_arc.png";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
	return (
		<div className="bg-[#192c4c] pt-16">
			<div
				style={{ backgroundImage: `url(${curve})` }}
				className="min-h-96 bg-cover bg-center p-[10dvw] flex flex-col items-center justify-center gap-4 font-inter font-normal text-white"
			>
				<div className=" flex justify-between items-center gap-4">
					<h1>About HackTU</h1>
					<h1>Open Source</h1>
					<h1>Privacy Policy</h1>
					<h1>Code of Conduct</h1>
				</div>
				<div className="flex justify-center items-center gap-4 cursor-pointer">
					<Mail color="#fff" />
					<Facebook color="#ffffff" />
					<Twitter color="#ffffff" />
					<Instagram color="#ffffff" />
				</div>
				<div>
					<h1 className="text-center text-sm">
						&copy; HACKTU 6.0 2025 ALL RIGHTS RESERVED | Designed With ❤️
						by <span className="underline">Team CCS</span>
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Footer;
