import Image from 'next/image'
import React from 'react'

import image from "@/assets/image.webp";

type Props = {}

const PageOne = (props: Props) => {
  return (
    <>
      <section className="relative bg-[#FFC146] text-[#0000004d] min-w-0 w-full h-screen text-center text-[1.2rem] font-semibold ">
        <div className="absolute bg-[#FFC146] w-40 h-40 -bottom-[1em] right-1/2 transform skew-y-[20deg]" />
        <div className="absolute bg-[#FFC146] w-40 h-40 -bottom-[1em] left-1/2 transform -skew-y-[20deg]" />
        <div className="px-[30vh]">
          <div className="bg-[#0000004d] w-[100px] h-[100px]  mx-auto my-0 rounded-[50%] grid place-items-center">:)</div>
        </div>
      </section>
  
      <section className="flex w-full h-screen bg-cover">
        <div className="">
          <Image src={image} alt='image' className="clip-path-custom-polygon" />
        </div>
      </section>
    </>
  )
}

export default PageOne