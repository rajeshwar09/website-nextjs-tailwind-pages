import React from 'react'

type Props = {}

const CardOne = (props: Props) => {
  return (
    <div className="container flex justify-center p-4 ">
      <div className="card relative flex flex-wrap flex-col items-center bg-gray-800 w-300 rounded-2xl overflow-hidden shadow-md">
        <div className="circle-top absolute w-12 h-14 bg-orange-500 rounded-full top-0 left-0 -mt-4 -ml-4 transition duration-500 ease-in-out"></div>
        <div className="circle-bottom absolute w-12 h-14 bg-orange-500 rounded-full bottom-0 right-0 -mb-4 -mr-4 transition duration-500 ease-in-out"></div>
        <div className="description bg-transparent rounded-2xl p-10 z-2 transition duration-500 ease-in-out">
          <h3 className="text-lg font-bold">Title</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pharetra congue enim rhoncus nulla. Adipiscing vitae tempor, euismod placerat non turpis enim, augue. Id praesent varius tincidunt at scelerisque nulla volutpat a.</p>
        </div>
      </div>
  </div>
  )
}

export default CardOne