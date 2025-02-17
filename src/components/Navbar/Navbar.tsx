"use client";

import {
  HomeOutlined,
  PieChartOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const navs = [
    { name: "Home", link: "/dashboard", icon: <HomeOutlined /> },
    { name: "Chart", link: "/chart", icon: <PieChartOutlined /> },
    { name: "Calender", link: "/calender", icon: <CalendarOutlined /> },
    { name: "Setting", link: "/setting", icon: <SettingOutlined /> },
  ];

  return (
    <div className="mt-32 px-7">
      {navs.map((nav) => (
        <div
          key={nav.name}
          className={`text-3xl block mt-5 ${
            nav.link == path
              ? "bg-black text-white rounded-full px-3 py-2 shadow-lg"
              : "px-3"
          }`}
        >
          {nav.icon}
        </div>
      ))}
    </div>
  );
}
