import styled from 'styled-components'
import Meta from '../../meta'
import { MainLayout } from '../../styles/Layouts'
import Title from '../../atoms/Title'
import ImageSection from '../../organism/ImageSection'
import ServicesSection from '../../organism/ServicesSection'
import ReviewSection from '../../organism/ReviewSection'
import { NextPageWithLayout } from '../../models/common'

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Meta title='About Page' />
      <MainLayout>
        <AboutStyled>
          <Title title={'About Me'} span={'About Me'} />
          <ImageSection />
          <ServicesSection />
          <ReviewSection />
        </AboutStyled>
      </MainLayout>
    </>
  )
}

const AboutStyled = styled.section``

export default AboutPage
