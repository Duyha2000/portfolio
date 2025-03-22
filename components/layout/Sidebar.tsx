import React from 'react'
import Sidebar from '../organism/Sidebar'
import { LayoutProps } from '../models/common'

const SidebarLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
    </div>
  )
}

export default SidebarLayout
