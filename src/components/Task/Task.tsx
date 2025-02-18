import { PlusCircleFilled, MoreOutlined } from "@ant-design/icons";
import User1 from "@/../public/user1.webp";
import User2 from "@/../public/user2.jpg";

export default function Task() {
  return (
    <div className="mt-5 w-full">
      <div className="flex items-center justify-between p-5 mt-5 w-full rounded-xl px-5 bg-[#FEE4CB]">
        <div className=" basis-1/4">
          <p className="text-2xl font-semibold">Web Design</p>
          <p className="text-lg">Prototyping</p>
          <p className="text-gray-600">December 10, 2024</p>
        </div>
        <div className="basis-1/2">
          <p className="text-lg font-semibold">Progress</p>
          <div className="bg-white h-2 rounded-xl w-full flex">
            <span className="w-2/3 h-2 rounded-xl  bg-[#ff942e]"></span>
          </div>
          <p className="text-right text-lg font-semibold">60%</p>
        </div>
        <div className="basis-1/4 grid grid-cols-3 items-center">
          <div className="col-span-2 justify-self-end">
            <div className="flex justify-center items-center self-start">
              <img className="w-8 h-8 rounded-full object-cover" src={User1.src} alt="" />
              <img
                className="w-8 h-8 rounded-full -ml-2 object-cover"
                src={User2.src}
                alt=""
              />
              <PlusCircleFilled className="text-3xl text-[#ffb26b] -ml-2" />
            </div>
            <div className="rounded-full px-5 py-2 bg-white opacity-80 mt-2">
              <p className="font-semibold text-[#ff942e]">2 Days Left</p>
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
