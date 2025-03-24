import { EmptyLayout } from '../components/layout/Empty'
import { HttpResponse } from '../components/lib/api'
import { NextPageWithLayout } from '../components/lib/types'

import { HomePage } from '../components/templates/Homepage'

type Props = HttpResponse<null>

const Home: NextPageWithLayout<Props> = () => <HomePage />
Home.getLayout = EmptyLayout

export const getServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Home
