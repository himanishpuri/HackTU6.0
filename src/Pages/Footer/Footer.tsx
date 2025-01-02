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
					<a
						href="https://www.ccstiet.com/"
						target="_blank"
						rel="noreferrer noopener"
					>
						About CCS
					</a>
					<a
						href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
						target="_blank"
						rel="noreferrer noopener"
					>
						Privacy Policy
					</a>
					<a
						href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
						target="_blank"
						rel="noreferrer noopener"
					>
						Code of Conduct
					</a>
					<a
						href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
						target="_blank"
						rel="noreferrer noopener"
					>
						Terms &#38; conditions
					</a>
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
						&copy;HACKTU 6.0 2025 ALL RIGHTS RESERVED | Designed With ❤️
						by <span className="underline">Team CCS</span>
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Footer;
