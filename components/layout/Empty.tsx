import Darkmode from '../atoms/Darkmode'
import { LayoutProps } from '../models/common'
import ScrollToTop from '../organism/ScrollToTop'
import Sidebar from '../organism/Sidebar'

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <ScrollToTop />
      <Darkmode />
      {children}
    </>
  )
}
