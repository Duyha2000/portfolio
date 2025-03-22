import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import avatar from '../../images/png/AvatarCV.jpeg'

const Navigation: React.FC = () => {
  return (
    <NavigationStyled>
      <div className='avatar'>
        <div className='image-avatar'>
          <Image
            src={avatar}
            alt='avatar'
            width={220}
            height={220}
            priority
            quality={100}
            placeholder='blur'
          />
        </div>
      </div>
      <ul className='nav-items'>
        <li className='nav-item'>
          <Link href='homepage' className='active-class'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='about' className='active-class'>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='resume' className='active-class'>
            Resume
          </Link>
        </li>

        <li className='nav-item'>
          <Link href='contact' className='active-class'>
            Contact
          </Link>
        </li>
      </ul>
      <footer className='footer'>
        <p>
          @2025 <strong>My Portfolio</strong>
        </p>
      </footer>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    .image-avatar {
      width: 220px;
      height: 220px;
      border-radius: 100%;
      overflow: hidden;
      margin: 0 auto;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      width: 100%;
      text-align: center;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
  .sign-out {
    margin-top: 2rem;
  }
`
export default Navigation
