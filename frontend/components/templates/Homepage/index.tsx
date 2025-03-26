import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import styled from 'styled-components'

// Icon
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// Layout & Component
import Meta from '../../meta'
import Particle from '../../atoms/Particle'
import MainContent from '../../atoms/MainContent'
import { MainLayout } from '../../styles/Layouts'

// Kiểu dữ liệu
import { NextPageWithLayout } from '../../models/common'
import { ProfileData } from './type'

export const HomePage: NextPageWithLayout = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get<ProfileData>(
          'http://localhost:5000/api/profile'
        )
        setProfile(response.data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    fetchProfile()
  }, [])

  return (
    <>
      <Meta title='Home Page' />
      <MainLayout padding='0'>
        <HomePageStyled>
          <div className='particle-con'>
            <Particle />
          </div>
          <div className='typography'>
            <h1>
              Hi, I&apos;m <span>{profile?.name || '...'}</span>
            </h1>
            <p>{profile?.title || 'Loading title...'}</p>

            <div className='icons'>
              <Link href={profile?.socials.facebook || '#'}>
                <a className='icon i-facebook' target='_blank'>
                  <FacebookIcon />
                </a>
              </Link>

              <Link href={profile?.socials.github || '#'}>
                <a className='icon i-github' target='_blank'>
                  <GitHubIcon />
                </a>
              </Link>

              <Link href={profile?.socials.linkedin || '#'}>
                <a className='icon i-linkedin' target='_blank'>
                  <LinkedInIcon />
                </a>
              </Link>
            </div>
          </div>
          <MainContent />
        </HomePageStyled>
      </MainLayout>
    </>
  )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`
