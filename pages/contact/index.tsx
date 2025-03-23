import { EmptyLayout } from '../../components/layout/Empty'
import { HttpResponse } from '../../components/lib/api'
import { NextPageWithLayout } from '../../components/lib/types'
import ContactPage from '../../components/templates/Contact'
type Props = HttpResponse<null>

const Page: NextPageWithLayout<Props> = () => <ContactPage />

Page.getLayout = EmptyLayout

export const getServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Page
