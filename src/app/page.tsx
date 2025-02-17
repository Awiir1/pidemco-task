"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FullscreenExitOutlined } from "@ant-design/icons";

export default function Home() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full h-screen flex flex-col items-center justify-center cursor-pointer 
      transition-transform duration-500 ${isAnimating ? "-translate-y-full opacity-0" : "opacity-100"}`}
    >
      <h1 className="text-8xl font-semibold">Pidemco.</h1>
      <p className="mt-4 text-xl flex items-center gap-2">
        Click to go up <FullscreenExitOutlined />
      </p>
    </div>
  );
}
