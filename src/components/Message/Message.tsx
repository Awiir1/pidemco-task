import { StarOutlined } from "@ant-design/icons";

export default function Message() {
  return (
    <div>
      <hr />
      <div className="w-full flex py-3">
        <img
          className="w-[70px] h-[75px] mr-3 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          alt=""
        />
        <div>
          <p className="font-bold text-xl">Stephanie</p>
          <p className="text-lg">
            I got your first assignment. It was quite good. 🥳 We can continue
            with the next assignment.
          </p>
        </div>
        <StarOutlined className="text-xl" />
      </div>
      <div className="text-end text-gray-500 -mt-3 mb-3">Dec, 12</div>
    </div>
  );
}
