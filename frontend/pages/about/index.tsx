import { EmptyLayout } from '../../components/layout/Empty'
import { HttpResponse } from '../../components/lib/api'
import { NextPageWithLayout } from '../../components/lib/types'
import AboutPage from '../../components/templates/About'
type Props = HttpResponse<null>

const Page: NextPageWithLayout<Props> = () => <AboutPage />
// Xin chao
Page.getLayout = EmptyLayout

export const getServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Page
