import curve from "./Assets/footer_arc.png";
import { Mail, Linkedin, Instagram } from "lucide-react";
import Whatsapp from "./Assets/whatsappLogo.svg";
import Discord from "./Assets/discordLogo.svg";

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
            onClick={() => window.open("https://www.instagram.com/ccs_tiet/")}
          />
          <Linkedin
            color="#ffffff"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/ccs-tiet/posts/?feedView=all",
              )
            }
          />
          <button
            onClick={() =>
              window.open("https://chat.whatsapp.com/EtnVilV3G8XASRebd5envq")
            }
            className="h-6 w-6 flex-shrink-0 flex-grow-0"
            aria-label="Open Whatsapp"
          >
            <img src={Whatsapp} alt="Whatsapp" className="h-6 w-6" />
          </button>

          <button
            onClick={() => window.open("https://discord.com/invite/zs76SWNAw8")}
            className="h-6 w-6 flex-shrink-0 flex-grow-0"
            aria-label="Open Discord"
          >
            <img src={Discord} alt="Discord" className="h-6 w-6" />
          </button>
        </div>
        <div>
          <h1 className="text-center text-sm">
            &copy;HackTU 7.0 2026 ALL RIGHTS RESERVED | Designed With ❤️ by{" "}
            <span className="underline">Team CCS</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
