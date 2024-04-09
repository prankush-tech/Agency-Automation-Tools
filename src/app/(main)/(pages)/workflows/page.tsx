import React from 'react'
import WorkFLowButton from './_components/workFlowComponent'
import Workflows from './_components'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="felx felx-col  relative">
    <h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-t border-x-2 font-bold rounded-t-2xl border-b justify-between">
        Workflows
        <WorkFLowButton/>
    </h1>
    <Workflows/>
</div>
  )
}

export default Page