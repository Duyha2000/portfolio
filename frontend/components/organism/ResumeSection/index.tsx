import { useEffect, useState } from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import SchoolIcon from '@mui/icons-material/School'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import ResumeItem from '../../molecules/ResumeItem'
import SmallTitle from '../../atoms/SmallTitle'
import Title from '../../atoms/Title'

type ResumeDataItem = {
  year: string
  title: string
  subTitle: string
  text: string
}

type ResumeData = {
  education: ResumeDataItem[]
  experience: ResumeDataItem[]
  certificates: ResumeDataItem[]
  projects: ResumeDataItem[]
}

function ResumeSection() {
  const briefcase = <BusinessCenterIcon />
  const school = <SchoolIcon />

  const [resumeData, setResumeData] = useState<ResumeData | null>(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resume`)
      .then((res) => res.json())
      .then((data: ResumeData) => {
        setResumeData(data)
      })
      .catch((err) => {
        console.error('Failed to load resume data:', err)
      })
  }, [])

  if (!resumeData) return <p>Loading resume...</p>

  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        <div className='small-title '>
          <SmallTitle icon={briefcase} title={'Educational Qualifications'} />
        </div>
        <div className='resume-content' data-aos='zoom-out-left'>
          {resumeData.education.map((item, idx) => (
            <ResumeItem key={idx} {...item} />
          ))}
        </div>

        <div className='small-title u-small-title-margin'>
          <div className='mb-16'>
            <SmallTitle icon={school} title={'Working Experience'} />
          </div>
          <div className='resume-content' data-aos='zoom-out-left'>
            {resumeData.experience.map((item, idx) => (
              <ResumeItem key={idx} {...item} />
            ))}
            <SmallTitle icon={briefcase} title={'Certificates'} />
            {resumeData.certificates.map((item, idx) => (
              <ResumeItem key={idx} {...item} />
            ))}
          </div>
        </div>

        <div className='small-title '>
          <SmallTitle icon={briefcase} title={'Projects'} />
        </div>
        <div className='resume-content' data-aos='zoom-out-left'>
          {resumeData.projects.map((item, idx) => (
            <ResumeItem key={idx} {...item} />
          ))}
        </div>
      </InnerLayout>
    </ResumeStyled>
  )
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`

export default ResumeSection
