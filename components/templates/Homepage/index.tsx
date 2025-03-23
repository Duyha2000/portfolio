import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Link from 'next/link'
import styled from 'styled-components'
import MainContent from '../../atoms/MainContent'
import Particle from '../../atoms/Particle'
import Meta from '../../meta'
import { NextPageWithLayout } from '../../models/common'
import { MainLayout } from '../../styles/Layouts'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Meta title='Home Page' />
      <MainLayout padding='0'>
        <HomePageStyled>
          <div className='particle-con'>
            <Particle />
          </div>
          <div className='typography'>
            <h1
              data-aos='zoom-out-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='2000'
            >
              Hi, I&apos;m <span>Duy Tran</span>
            </h1>
            <p
              data-aos='zoom-out-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='2000'
            >
              I&apos;m a ...
            </p>
            <div className='icons'>
              <Link href='https://www.facebook.com/tranduy0209/'>
                <a className='icon i-facebook'>
                  <FacebookIcon />
                </a>
              </Link>

              <Link href='https://github.com/duytran0209'>
                <a className='icon i-github'>
                  <GitHubIcon />
                </a>
              </Link>

              <Link href='https://www.linkedin.com/in/duytran0209/'>
                <a className='icon i-linkedin'>
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
export default Home
