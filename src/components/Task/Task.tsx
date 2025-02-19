"use client";

import { PlusCircleFilled, MoreOutlined } from "@ant-design/icons";
import User1 from "@/../public/user1.webp";
import User2 from "@/../public/user2.jpg";
import Image from "next/image";

interface TaskProps {
  title: string;
  description: string;
  date: string;
  index: number;
}

const colors = [
  {
    color: "#FEE4CB",
    progress: "#ff942e",
  },
  {
    color: "#e9e7fd",
    progress: "#4f3ff0",
  },
  {
    color: "#C8F7DC",
    progress: "#34c471",
  },
  {
    color: "#FFD3E2",
    progress: "#df3670",
  },
  {
    color: "#DBF6FD",
    progress: "#096c86",
  },
];

export default function Task({ title, description, date, index }: TaskProps) {
  const selectedColor = colors[index % colors.length];
  const progress = Math.floor(Math.random() * 100);

  return (
    <div className="mt-5 w-full">
      <div
        className="flex items-center justify-between p-5 mt-5 w-full rounded-xl px-5"
        style={{ backgroundColor: selectedColor.color }}
      >
        <div className="basis-1/4">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-lg">{description}</p>
          <p className="text-gray-600">{date}</p>
        </div>
        <div className="basis-1/2">
          <p className="text-lg font-semibold">Progress</p>
          <div className="bg-white h-2 rounded-xl w-full flex">
            <span
              className="h-2 rounded-xl"
              style={{
                backgroundColor: selectedColor.progress,
                width: `${progress}%`,
              }}
            ></span>
          </div>
          <p className="text-right text-lg font-semibold">{progress}%</p>
        </div>
        <div className="basis-1/4 grid grid-cols-3 items-center">
          <div className="col-span-2 justify-self-end">
            <div className="flex justify-center items-center self-start">
              <Image
                className="w-8 h-8 rounded-full object-cover"
                src={User1.src}
                alt="User 1"
              />
              <Image
                className="w-8 h-8 rounded-full -ml-2 object-cover"
                src={User2.src}
                alt="User 2"
              />
              <PlusCircleFilled
                className="text-3xl -ml-2"
                style={{ color: selectedColor.progress }}
              />
            </div>
            <div className="rounded-full px-5 py-2 bg-white opacity-80 mt-2">
              <p
                className="font-semibold"
                style={{ color: selectedColor.progress }}
              >
                2 Days Left
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <MoreOutlined className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
