import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import Title from '../../atoms/Title'
import ProgressBar from '../../atoms/ProgressBar'

type SkillItem = {
  title: string
  width: string
  text: string
}

function Skills() {
  const [skills, setSkills] = useState<SkillItem[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`)
      .then((res) => res.json())
      .then((data: SkillItem[]) => {
        setSkills(data)
      })
      .catch((err) => {
        console.error('Failed to load skills:', err)
      })
  }, [])

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
          {skills.map((skill, idx) => (
            <ProgressBar
              key={idx}
              title={skill.title}
              width={skill.width}
              text={skill.text}
            />
          ))}
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
