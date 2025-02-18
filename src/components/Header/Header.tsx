import React from "react";
import {
  AppstoreOutlined,
  SearchOutlined,
  MoonOutlined,
  PlusCircleFilled,
  BellOutlined,
} from "@ant-design/icons";
import User from "@/../public/user2.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full fixed">
      <div className="mx-5 px-4 my-5 rounded-md flex items-center justify-between">
        <div className="flex gap-x-5 items-center basis-5/12">
          <AppstoreOutlined className="text-4xl" />
          <Link href={"/"} className="text-4xl font-semibold drop-shadow-lg">Pidemco.</Link>
          <div className="flex bg-white px-5 rounded-full shadow-lg w-full ml-5">
            <input
              className="rounded-xl text-xl outline-none h-[55px] w-full overflow-hidden items-center flex"
              type="text"
              placeholder="Search"
            />
            <SearchOutlined  className="text-3xl"/>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <MoonOutlined className="text-3xl" />
          <PlusCircleFilled className="text-3xl" />
          <BellOutlined className="text-3xl" />
          <span className="w-[2px] h-[30px] bg-slate-500 rounded-md"></span>
          <img src={User.src} className="w-10 h-10 rounded-full object-cover" />
          <p className="text-xl font-semibold">AmirHosein</p>
        </div>
      </div>
    </div>
  );
}
