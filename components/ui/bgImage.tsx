"use client"


import bg_image from "@/public/background/bg_image.jpg";
import bg_image_1 from "@/public/background/bg_image_1.jpg";
import bg_image_2 from "@/public/background/bg_image_2.jpg";
import bg_image_3 from "@/public/background/bg_image_3.jpg";
import bg_image_4 from "@/public/background/bg_image_4.jpg";
import bg_image_5 from "@/public/background/bg_image_5.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

export function BgImageHome() {
    const bgImage = [bg_image, bg_image_1, bg_image_2];
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

export function BgImageFonctionnement() {
    const bgImage = [bg_image_3, bg_image_4, bg_image_5];
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