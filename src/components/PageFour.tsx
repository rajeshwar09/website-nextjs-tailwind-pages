import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'

type Props = {}

const PageFour = (props: Props) => {
  return (
    <div className="flex md:flex-row flex-col p-4">
      <CardOne />
      <CardOne />
      <CardTwo />
      <CardTwo />
    </div>
  )
}

export default PageFour