import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import Title from '../../atoms/Title'
import ServiceCard from '../../molecules/ServiceCard'
import design from '../../images/svg/design.svg'
import intelligence from '../../images/svg/intelligence.svg'
import gamedev from '../../images/svg/game-dev.svg'

type SkillCard = {
  icon: string
  title: string
  paragraph: string
}

const iconMap: Record<string, string> = {
  design,
  intelligence,
  'game-dev': gamedev,
}

const ServicesSection = () => {
  const [skills, setSkills] = useState<SkillCard[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/skills-tech')
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error('Failed to load technical skills:', err))
  }, [])

  return (
    <InnerLayout>
      <ServicesSectionStyled
        data-aos='fade-up'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <Title title={'Technical Skills'} span={'Technical Skills'} />
        <div className='services'>
          {skills.map((skill, index) => (
            <ServiceCard
              key={index}
              image={iconMap[skill.icon]}
              title={skill.title}
              paragraph={skill.paragraph}
            />
          ))}
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  )
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default ServicesSection
