import Image from "next/image";
import engrenage from "@/public/logo/engrenage_neg.png"
import x from "@/public/logo/x_neg.png"
import nom from "@/public/logo/nom_neg.png"

export default function Logo() {
    return (
        <>
            <div className="justify-between flex relative p-1">
                <div className="m-0">
                    <Image alt="logo Xterna Madagascar" src={engrenage} className="absolute py-1 px-1 w-25 animate-spin"/> 
                    <Image alt="logo Xterna Madagascar" src={x} className=" w-25"/>
                </div>
                <div className="m-0">
                    <Image alt="logo Xterna Madagascar" src={nom} className="w-25"/>
                </div>            
            </div>
        </>
    )
}