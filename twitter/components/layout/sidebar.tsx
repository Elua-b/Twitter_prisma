import React from "react";
import { BsMouse2Fill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./sidebarLogo";
import SidebarItem from "./sidebarItem";
import {BiLogOut} from "react-icons/bi";
import SidebarTweetButton from "./sidebarTweetButton";
const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsMouse2Fill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => {
            return (
              <SidebarItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            );
          })}
          <SidebarItem onClick={()=>{}} icon={BiLogOut} label="Logout"/> 
          <SidebarTweetButton/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
