import InfoBar from '@/components/infoBar'
import SideBar from '@/components/sidebar'
import React from 'react'

type Props = { children: React.ReactNode}

const Layout = (props: Props) => {
  return (
    <div className='flex  h-screen'>
        <SideBar/>
        <div className='w-full h-screen overflow-auto'>
          <InfoBar/>
          {props.children}
        </div>
    </div>
  )
}

export default Layout