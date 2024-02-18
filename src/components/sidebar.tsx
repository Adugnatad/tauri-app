import React from "react";
import { RiFocus2Fill } from "react-icons/ri";
import { BsHourglass } from "react-icons/bs";
import { CiBellOn, CiStopwatch } from "react-icons/ci";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div>
      <div>
        <nav className="space-y-2">
          <li className="flex flex-row items-center list-none py-2 hover:bg-[#dbdbdb]">
            <RiFocus2Fill className="mx-3" size={20} />
            Focus sessions
          </li>
          <li className="flex flex-row items-center list-none py-2 hover:bg-[#dbdbdb]">
            <BsHourglass className="mx-3" size={18} />
            Timer
          </li>
          <li className="flex flex-row items-center list-none py-2 hover:bg-[#dbdbdb]">
            <CiBellOn className="mx-3" size={21} />
            Alarm
          </li>
          <li className="flex flex-row items-center list-none py-2 hover:bg-[#dbdbdb]">
            <CiStopwatch className="mx-3" size={20} />
            Stopwatch
          </li>
          <li className="flex flex-row items-center list-none py-2 hover:bg-[#dbdbdb]">
            <HiOutlineGlobeAsiaAustralia className="mx-3" size={20} />
            World clock
          </li>
        </nav>
        {/* <footer>
          <li></li>
        </footer> */}
      </div>
    </div>
  );
};

export default Sidebar;
