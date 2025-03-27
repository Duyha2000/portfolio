// /components/templates/Homepage/index.tsx
import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Meta from '../../meta'
import Particle from '../../atoms/Particle'
import MainContent from '../../atoms/MainContent'
import { MainLayout } from '../../styles/Layouts'
import { ProfileData } from './type'

type HomePageProps = {
  profile: ProfileData | null
}

export const HomePage: FC<HomePageProps> = ({ profile }) => {
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
                <a className='icon i-facebook' target='_blank' rel='noreferrer'>
                  <FacebookIcon />
                </a>
              </Link>

              <Link href={profile?.socials.github || '#'}>
                <a className='icon i-github' target='_blank' rel='noreferrer'>
                  <GitHubIcon />
                </a>
              </Link>

              <Link href={profile?.socials.linkedin || '#'}>
                <a className='icon i-linkedin' target='_blank' rel='noreferrer'>
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

      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`
