import curve from "./Assets/footer_arc.png";
import { Mail, Linkedin, Instagram } from "lucide-react";

function Footer() {
	return (
		<div className="pt-16">
			<div
				style={{ backgroundImage: `url(${curve})` }}
				className="min-h-96 bg-cover bg-center p-[10dvw] flex flex-col items-center justify-center gap-4 font-inter font-normal text-white"
			>
				<div className=" flex justify-between items-center gap-4 underline">
					<h1>About HackTU</h1>
					<h1>Open Source</h1>
					<h1>Privacy Policy</h1>
					<h1>Code of Conduct</h1>
				</div>
				<div className="flex justify-center items-center gap-4 cursor-pointer">
					<Mail
						color="#fff"
						onClick={() => window.open("mailto:support@ccstiet.com")}
					/>
					<Instagram
						color="#ffffff"
						onClick={() =>
							window.open("https://www.instagram.com/ccs_tiet/")
						}
					/>
					<Linkedin
						color="#ffffff"
						onClick={() =>
							window.open(
								"https://www.linkedin.com/company/ccs-tiet/posts/?feedView=all",
							)
						}
					/>
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
