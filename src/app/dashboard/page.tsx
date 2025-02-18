"use client";

import { motion } from "framer-motion";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Task from "@/components/Task/Task";
import Message from "@/components/Message/Message";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full grid grid-cols-3 grid-rows-1 gap-5 mt-32 px-5"
    >
      <div className="col-span-2 w-full h-[780px] rounded-3xl bg-white p-5 overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="text-5xl font-bold drop-shadow-xl">Tasks</p>
          <p className="text-3xl">December, 12</p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-x-10">
            <div>
              <p className="font-semibold text-3xl">45</p>
              <div className="flex gap-x-2">
                <p className="text-lg">In Progress</p>
                <p className="text-green-700 font-bold text-lg">
                  63%
                  <ArrowUpOutlined />
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-3xl">12</p>
              <div className="flex gap-x-2">
                <p className="text-lg">Up coming</p>
                <p className="text-red-700 font-bold text-lg">
                  10%
                  <ArrowDownOutlined />
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-3xl">123</p>
              <div className="flex gap-x-2">
                <p className="text-lg">Total</p>
                <p className="text-green-700 font-bold text-lg">
                  12%
                  <ArrowUpOutlined />
                </p>
              </div>
            </div>
          </div>
          <div className="flex text-3xl gap-x-3">
            <BarsOutlined className="bg-black text-white rounded-lg p-2 shadow-lg" />
            <AppstoreOutlined />
          </div>
        </div>
        <div className="overflow-y-auto h-[600px]">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Task key={item} />
          ))}
        </div>
      </div>
      <div className=" col-span-1 w-full h-full rounded-3xl bg-white">
        <p className="text-4xl text-[#333333] px-7 pt-7 drop-shadow-md">
          Client Messages
        </p>
        <div className="overflow-y-auto h-[670px] px-5 mt-5">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Message key={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
