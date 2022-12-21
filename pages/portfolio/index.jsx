import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import cine from "../../public/cine.png";
import photo from "../../public/photo.png";

const portfolio = () => {
  const [showPicLabel, setShowPicLabel] = useState(false);
  const [showFilmLabel, setShowFilmLabel] = useState(false);

  return (
    <div className="text-gray-800 bg-white h-screen w-screen py-32 px-20 flex justify-center items-center gap-20">
      <Link
        href="/portfolio/audiovisual"
        onMouseOver={() => setShowFilmLabel(true)}
        onMouseLeave={() => setShowFilmLabel(false)}
        className=" w-2/6 hover:scale-105 transition-all flex justify-center items-center flex-col"
      >
        <Image src={cine} alt="audiovisual logo" className={`w-full h-full drop-shadow-sm ${showFilmLabel ? "brightness-90" : ""}`} />
        <p className={`font-semibold text-teal-600 absolute text-5xl drop-shadow-sm ${showFilmLabel ? "opacity-70" : "opacity-0"}`}>Audiovisual</p>
      </Link>
      <div className="h-full w-px bg-teal-700 opacity-40"></div>
      <Link
        href="/portfolio/photo"
        onMouseOver={() => setShowPicLabel(true)}
        onMouseLeave={() => setShowPicLabel(false)}
        className=" w-2/6 hover:scale-105 transition-all flex justify-center items-center flex-col"
      >
        <Image src={photo} alt="fotografia logo" className={`w-full h-full drop-shadow-sm ${showPicLabel ? "brightness-90" : ""}`} />
        <p className={`font-semibold text-teal-600 absolute text-5xl drop-shadow-sm ${showPicLabel ? "opacity-70" : "opacity-0"}`}>Fotografia</p>
      </Link>
    </div>
  );
};

export default portfolio;
