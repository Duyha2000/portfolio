import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import styled from 'styled-components'
import PrimaryButton from '../../atoms/Button'
import resume from '../../images/png/AvatarCV.jpeg'
import { ProfileInfo } from './type'

const fetchProfile = async (): Promise<ProfileInfo> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`)
  if (!res.ok) throw new Error('Failed to fetch profile')
  return res.json()
}

const ImageSection = () => {
  const { data: profile, isLoading } = useQuery<ProfileInfo>({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  })

  if (isLoading) return <p>Loading profile...</p>

  return (
    <ImageSectionStyled>
      <div className='left-content'>
        <Image
          src={resume}
          alt='avatar'
          height={625}
          width={600}
          priority
          placeholder='blur'
        />
      </div>

      <div className='right-content'>
        <h4>
          My name is <span>{profile?.name}</span>
        </h4>
        <div className='paragraph'>I am a {profile?.title}.</div>

        <div className='about-info'>
          <div className='info-item'>
            <strong>Age:</strong> {profile?.age}
          </div>
          <div className='info-item'>
            <strong>Nationality:</strong> {profile?.nationality}
          </div>
          <div className='info-item'>
            <strong>Languages:</strong> {profile?.languages.join(', ')}
          </div>
          <div className='info-item'>
            <strong>Location:</strong> {profile?.location}
          </div>
          <div className='info-item'>
            <strong>Service:</strong> {profile?.service}
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
      padding-bottom: 1.4rem;
      .info-item {
        padding: 0.5rem 0;
        font-size: 1.2rem;
        display: flex;
        gap: 1rem;
        strong {
          font-weight: bold;
          color: var(--primary-color);
        }
      }
    }
  }
`

export default ImageSection
