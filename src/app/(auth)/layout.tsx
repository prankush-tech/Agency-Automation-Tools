import React from 'react'

type Props = {
    children : React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='flex items-center justify-center h-screen' >{children}</div>
  )
}

export default layout