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

    // منتظر می‌ماند تا انیمیشن اجرا شود، سپس تغییر مسیر می‌دهد
    setTimeout(() => {
      router.push("/dashboard");
    }, 800); // این زمان باید با مدت زمان انیمیشن هماهنگ باشد
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full h-screen flex flex-col items-center justify-center cursor-pointer 
      transition-transform duration-700 bg-black text-white ${
        isAnimating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-8xl font-semibold">Pidemco.</h1>
      <p className="mt-4 text-xl flex items-center gap-2 animate-bounce">
        Click to go up <FullscreenExitOutlined />
      </p>
    </div>
  );
}
