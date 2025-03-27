import axios from 'axios'
import { EmptyLayout } from '../components/layout/Empty'
import { NextPageWithLayout } from '../components/lib/types'
import { HomePage } from '../components/templates/Homepage'
import { ProfileData } from '../components/templates/Homepage/type'

type HomeProps = {
  profile: ProfileData
}

const Home: NextPageWithLayout<HomeProps> = ({ profile }) => {
  return <HomePage profile={profile} />
}

Home.getLayout = EmptyLayout

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get<ProfileData>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profile`
    )

    return {
      props: {
        profile: data,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error('Error fetching profile:', error)
    return {
      props: {
        profile: null,
      },
      revalidate: 60,
    }
  }
}

export default Home
