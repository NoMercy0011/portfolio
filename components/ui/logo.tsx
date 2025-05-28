import Image from "next/image";
import engrenage from "@/public/logo/engrenage_neg.png";
import x from "@/public/logo/x_neg.png";
import nom from "@/public/logo/nom_neg.png";
import "@/components/css/logo.css";

export default function Logo() {
  return (
    <div className="flex items-center space-x-0 p-2">
      <div className="relative w-25 h-25">
        <Image alt="Engrenage" src={engrenage} fill className="object-contain slow-spin" />
        <Image alt="X stylisé" src={x} fill className="object-contain"/>
      </div>
      <div className="h-auto">
        <Image alt="Nom Xterna Madagascar" src={nom} className="h-full w-auto max-h-22" />
      </div>
    </div>
  );
}
