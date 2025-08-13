import type React from "react"
import { Button } from "../ui/button"


const HeroSec2 = ({ src, text, btnTxt }: { src: string, text: React.ReactElement, btnTxt: string }) => {
  return (
    <div className="w-full h-full relative text-white ">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 max-md:bottom-0 max-md:justify-end p-3">
        <div className="">
       {text}
        </div>

        <Button  className="bg-red-600 px-16 cursor-pointer py-5 max-md:w-full">{btnTxt}</Button>

      </div>
      <img src={src} className="w-full h-full object-cover" alt="" />
    </div>
  )
}

export default HeroSec2