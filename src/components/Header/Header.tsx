import React from "react";
import {
  AppstoreOutlined,
  SearchOutlined,
  MoonOutlined,
  PlusCircleFilled,
  BellOutlined,
} from "@ant-design/icons";
import Profile from "@/../public/Profile.png";

export default function Header() {
  return (
    <div className="w-full fixed">
      <div className="mx-5 px-5 my-5 rounded-md flex items-center justify-between">
        <div className="flex gap-x-5 items-center basis-1/3">
          <AppstoreOutlined className="text-3xl" />
          <p className="text-3xl font-semibold drop-shadow-lg">Pidemco.</p>
          <div className="flex bg-white px-5 rounded-3xl shadow-lg w-full ml-5">
            <input
              className="rounded-xl outline-none h-[45px] w-full overflow-hidden items-center flex"
              type="text"
              placeholder="Search"
            />
            <SearchOutlined />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <MoonOutlined className="text-2xl" />
          <PlusCircleFilled className="text-2xl" />
          <BellOutlined className="text-2xl" />
          <span className="w-[2px] h-[30px] bg-slate-500 rounded-md"></span>
          <img src={Profile.src} className="w-8 h-8 rounded-full" />
          <p className="text-xl">AmirHosein</p>
        </div>
      </div>
    </div>
  );
}
