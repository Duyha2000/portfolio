import Head from 'next/head'
import ResumeSection from '../../components/organism/ResumeSection'
import Skills from '../../components/molecules/Skills'
import { MainLayout } from '../../components/styles/Layouts'

function ResumePage() {
  return (
    <>
      <div className='shadow'></div>
      <Head>
        <title>Resume Page</title>
        <meta
          name='description'
          content='Welcome to my profile, I am a web developer'
        />
        <meta property='og:title' content='My Portfolio' />
        <meta
          property='og:description'
          content='Welcome to my profile, I am a web developer'
        />
        <meta property='og:url' content='https://tranduy020900dev.vercel/' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainLayout>
        <Skills />
        <ResumeSection />
      </MainLayout>
    </>
  )
}

export default ResumePage
