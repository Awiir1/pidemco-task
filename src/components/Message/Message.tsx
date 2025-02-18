import { StarOutlined } from "@ant-design/icons";

export default function Message(data: {
  name: string;
  profile: string;
  message: string;
}) {
  return (
    <div>
      <hr />
      <div className="w-full flex py-3">
        <img
          className="w-[70px] h-[75px] mr-3 rounded-full object-cover"
          src={data.profile}
          alt={data.name}
        />
        <div>
          <p className="font-bold text-xl">{data.name}</p>
          <p className="text-lg">{data.message}</p>
        </div>
        <StarOutlined className="text-xl" />
      </div>
      <div className="text-end text-gray-500 -mt-3 mb-3">Dec, 12</div>
    </div>
  );
}
