import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import resume from '../../images/png/AvatarCV.jpeg'
import PrimaryButton from '../../atoms/Button'
import Image from 'next/image'

type ProfileInfo = {
  name: string
  age: number
  nationality: string
  languages: string[]
  location: string
  service: string
  title: string
}

const ImageSection = () => {
  const [profile, setProfile] = useState<ProfileInfo | null>(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`)
      .then((res) => res.json())
      .then((data: ProfileInfo) => setProfile(data))
      .catch((err) => console.error('Failed to load profile info:', err))
  }, [])

  if (!profile) {
    return <p>Loading profile...</p>
  }

  return (
    <ImageSectionStyled>
      <div
        className='left-content'
        data-aos='fade-up'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <Image
          src={resume}
          alt='avatar'
          height={625}
          width={600}
          priority
          placeholder='blur'
        />
      </div>

      <div
        className='right-content'
        data-aos='fade-up'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <h4>
          My name is <span>{profile.name}</span>
        </h4>

        <div className='paragraph'>I am a {profile.title}.</div>

        <div className='about-info'>
          <div className='info-title'>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>

          <div className='info'>
            <p>: {profile.age}</p>
            <p>: {profile.nationality}</p>
            <p>: {profile.languages.join(', ')}</p>
            <p>: {profile.location}</p>
            <p>: {profile.service}</p>
          </div>
        </div>
        <PrimaryButton title={'Download CV'} />
      </div>
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 0 4rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`

export default ImageSection
