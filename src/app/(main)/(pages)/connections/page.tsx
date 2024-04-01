import React from 'react'

type Props = {}

const Category = (props: Props) => {
  return (
    <div className="felx felx-col gap-4 ">
    <h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b font-bold">
        <span>API of tools connected</span>
    </h1>
    </div>
  )
}

export default Category