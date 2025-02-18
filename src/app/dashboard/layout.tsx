import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Header />
      <div className="flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
