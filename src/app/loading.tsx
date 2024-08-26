import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div>
      <video autoPlay muted >
        <source src={'video/splashScreen.mp4'} className="absolute w-auto min-w-full min-h-full max-w-none " />
      </video>
    </div>
  )
}

export default loading