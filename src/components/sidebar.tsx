import React from "react";
import { RiFocus2Fill } from "react-icons/ri";
import { BsHourglass } from "react-icons/bs";
import { CiBellOn, CiStopwatch, CiUser, CiSettings } from "react-icons/ci";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div>
      <div className="h-screen w-[280px] bg-[#f3f3f3] border-r-[2px] flex flex-col justify-between">
        <nav className="space-y-2">
          <li className="flex flex-row cursor-default items-center list-none py-2 hover:bg-[#e6e6e6] active:bg-[#eaeaea] select-none select-none">
            <RiFocus2Fill className="mx-3" size={20} />
            Focus sessions
          </li>
          <li className="flex flex-row cursor-default items-center list-none py-2 hover:bg-[#e6e6e6] active:bg-[#eaeaea] select-none">
            <BsHourglass className="mx-3" size={18} />
            Timer
          </li>
          <li className="flex flex-row cursor-default items-center list-none py-2 hover:bg-[#e6e6e6] active:bg-[#eaeaea] select-none">
            <CiBellOn className="mx-3" size={21} />
            Alarm
          </li>
          <li className="flex flex-row cursor-default items-center list-none py-2 hover:bg-[#e6e6e6] active:bg-[#eaeaea] select-none">
            <CiStopwatch className="mx-3" size={20} />
            Stopwatch
          </li>
          <li className="flex flex-row cursor-default items-center list-none py-2 hover:bg-[#e6e6e6] active:bg-[#eaeaea] select-none">
            <HiOutlineGlobeAsiaAustralia className="mx-3" size={20} />
            World clock
          </li>
        </nav>
        <footer>
          <li className="flex flex-row cursor-default items-center list-none py-2 hover:bg-[#e6e6e6] active:bg-[#eaeaea] select-none">
            <CiUser className="mx-3" size={20} />
            Sign in
          </li>
          <li className="flex flex-row cursor-default items-center list-none py-2 hover:bg-[#e6e6e6] active:bg-[#eaeaea] select-none">
            <CiSettings className="mx-3" size={20} />
            Settings
          </li>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
