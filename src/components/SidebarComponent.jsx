import React from 'react';
import { Link } from 'react-router-dom';

// Importing icons from react-icons
import { AiFillHome, AiOutlineUserAdd, AiOutlineLogin, AiOutlineFileProtect, AiFillPhone } from 'react-icons/ai';
import { MdDashboard, MdFeedback } from 'react-icons/md';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';

// Importing components from Keep React UI library
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
  Tooltip,
  TooltipAction,
  TooltipContent,

} from 'keep-react';

export const SidebarComponent = () => {
  return (
    <Sidebar className="max-w-max bg-black min-h-[100vh]  rounded-none border-none bg-gradient-to-b from-[#000] to-slate-700 p-1">
      <SidebarBody className="space-y-7">
        <SidebarList className="space-y-6">
          <SidebarItem >
            <Tooltip placement="right" contentOffset={30} >
              <TooltipAction asChild>
                <Link to="/">
                  <div>
                    <AiFillHome size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Home
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/register">
                  <div>
                    <AiOutlineUserAdd size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Register
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/login">
                  <div>
                    <AiOutlineLogin size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Login
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/Studentdashboard">
                  <div>
                    <MdDashboard size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Student Dashboard
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/application-apply">
                  <div>
                    <BsFillFileEarmarkTextFill size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Application Apply
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/help-support">
                  <div>
                    <RiCustomerService2Fill size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Help & Support
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/terms-conditions">
                  <div>
                    <AiOutlineFileProtect size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Terms & Conditions
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/contact-us">
                  <div>
                    <AiFillPhone size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Contact Us
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/feedback">
                  <div>
                    <MdFeedback size={20} />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
                Feedback
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
      {/* Sidebar Footer */}
      <SidebarFooter>
        <SidebarItem>
          <Tooltip placement="right" contentOffset={30}>
            <TooltipAction asChild>
              <Link to="/logout">
                <div>
                  <AiOutlineLogin size={20} />
                </div>
              </Link>
            </TooltipAction>
            <TooltipContent className={`  rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none  text-black  `}>
              Log Out
            </TooltipContent>
          </Tooltip>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  );
};
