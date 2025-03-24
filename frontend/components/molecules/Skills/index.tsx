import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import Title from '../../atoms/Title'
import ProgressBar from '../../atoms/ProgressBar'

function Skills() {
  return (
    <SkillsStyled>
      <Title title={'My Skills'} span={'my skills'} />
      <InnerLayout>
        <div
          className='skills'
          data-aos='zoom-out-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <ProgressBar title={'HTML'} width={'85%'} text={'85%'} />

          <ProgressBar title={'CSS3'} width={'90%'} text={'90%'} />

          <ProgressBar title={'Javascript'} width={'60%'} text={'60%'} />

          <ProgressBar title={'React JS'} width={'80%'} text={'80%'} />

          <ProgressBar title={'NextJS'} width={'75%'} text={'75%'} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  )
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default Skills
