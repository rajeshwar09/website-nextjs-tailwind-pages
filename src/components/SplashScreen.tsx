import React, { useEffect, useState } from 'react'
import anime from "animejs";
import Image from 'next/image';

type Props = {}

const SplashScreen = ({ finishLoading }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })
    loader
    .add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 10000,
      easing: 'easeInOut'
    })
    // .add({
    //   targets: "#logo",
    //   delay: 0,
    //   scale: 1.5,
    //   duration: 500,
    //   easing: 'cubicBezier(.5, .05, .1, .3)'
    // })
    // .add({
    //   targets: "#logo",
    //   delay: 0,
    //   scale: 1,
    //   duration: 500,
    //   easing: 'cubicBezier(.5, .05, .1, .3)'
    // })
    // .add({
    //   targets: "#logo",
    //   delay: 0,
    //   scale: 1.5,
    //   duration: 500,
    //   easing: 'cubicBezier(.5, .05, .1, .3)'
    // })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout)
  })

  return (
    <div className="flex h-screen items-center justify-center"
    // ismounted={isMounted}
    >
      {/* <Image src={"/next.svg"} alt="logo" width={60} height={60} id="logo" /> */}
      <video autoPlay muted >
        <source src={'video/splashScreen.mp4'} className="absolute w-auto min-w-full min-h-full max-w-none " />
      </video>
    </div>
  )
}

export default SplashScreen