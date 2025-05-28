"use client"


import bg_image from "@/public/bg_image.jpg";
import bg_image_1 from "@/public/bg_image_1.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BgImage() {
    const bgImage = [bg_image, bg_image_1];
    const [index, setIndex] = useState(0);

    useEffect( () => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % bgImage.length);
        }, 10000); 
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
      <Image src={bgImage[index]} alt="background image" fill className="object-cover opacity-60" />
    </>
  )
}
