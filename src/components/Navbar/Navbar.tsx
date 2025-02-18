"use client";

import {
  HomeOutlined,
  PieChartOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // page path
  const path = usePathname();

  // nav links
  const navs = [
    { name: "Home", link: "/dashboard", icon: <HomeOutlined /> },
    { name: "Chart", link: "/dashboard/chart", icon: <PieChartOutlined /> },
    { name: "Calender", link: "/dashboard/calender", icon: <CalendarOutlined /> },
    { name: "Setting", link: "/dashboard/setting", icon: <SettingOutlined /> },
  ];

  return (
    <div className="mt-28 px-7">
      {navs.map((nav) => (
        <Link
          href={nav.link}
          key={nav.name}
          className={`text-3xl block mt-5 px-3 cursor-pointer ${
            nav.link == path &&
            "bg-black text-white rounded-xl py-2.5 shadow-lg"
          }`}
        >
          {nav.icon}
        </Link>
      ))}
    </div>
  );
}
