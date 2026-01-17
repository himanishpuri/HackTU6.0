import logo from "./Assets/ccs_logo_white.png";

function Navbar() {
  return (
    <div className="bg-[#ffffff1a] rounded-md fixed w-[85vw] mx-[7.5vw] mt-8 flex justify-between h-10 text-white z-[10] px-4">
      <div className="flex justify-center items-center gap-x-2">
        <img src={logo} alt="logo" className="max-h-5 z-[100]" />
        <h1 className="font-abeezee">HackTU 7.0</h1>
      </div>
      <div className="flex justify-between items-center"></div>
    </div>
  );
}

export default Navbar;
