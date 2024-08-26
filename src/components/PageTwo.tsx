import BackgroundVideo from "next-video/background-video"
import React from "react"


type Props = {}

const PageTwo = (props: Props) => {
  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden">
      <h1 className="absolute text-white text-2xl">Hello World</h1>
      <video autoPlay loop muted className="">
        <source src={'video/videoBg.mp4'} className="absolute w-auto min-w-full min-h-full max-w-none bg-blend-darken" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50" />
      <h1 className="absolute top-3 left-0 text-white text-2xl">Hello World 1</h1>
    </header>
  )
}

export default PageTwo