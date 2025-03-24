import Meta from '../../meta'
import Skills from '../../molecules/Skills'
import ResumeSection from '../../organism/ResumeSection'
import { MainLayout } from '../../styles/Layouts'

function ResumePage() {
  return (
    <>
      <Meta title='Resume Page' />
      <MainLayout>
        <Skills />
        <ResumeSection />
      </MainLayout>
    </>
  )
}

export default ResumePage
