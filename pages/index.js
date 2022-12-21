import icon from "../public/icon.png"
import { Inter } from "@next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={inter.style}
      className=" text-gray-800 h-screen w-screen pt-10 px-20 flex justify-around items-center"
    >
      <div className="bg-[url('../public/bg.jpg')] bg-no-repeat bg-center bg-cover w-screen h-screen fixed z-0 brightness-50 "></div>
      <div className=" z-20 flex flex-col gap-2 text-gray-50 tracking-wider">
        <h1 className="font-semibold text-5xl text-white">Camila Lemos</h1>
        <p className="text-2xl pl-2 text-gray-200 drop-shadow-sm ">Realizadora Audiovisual</p>
      </div>
      <div className=" z-20 w-2/6">
        <Image src={icon} className="w-5/6 h-5/6 drop-shadow-md brightness-95 " alt="home icon" />
      </div>
    </div>
  );
}