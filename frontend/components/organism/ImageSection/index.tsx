import React from 'react'
import styled from 'styled-components'
import resume from '../../images/png/AvatarCV.jpeg'
import PrimaryButton from '../../atoms/Button'
import Image from 'next/image'

function ImageSection() {
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
          I&apos;m <span>... </span>
        </h4>

        <div className='paragraph'>I am a ...</div>

        <div className='about-info'>
          <div className='info-title'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>

          <div className='info'>
            <p>: Tran Duc Duy </p>

            <p> : 24</p>
            <p>: Viet Nam</p>
            <p> : English, Vietnamese</p>
            <p>: VietNam</p>
            <p>: Developer</p>
          </div>
        </div>
        <PrimaryButton title={'Download CV'}></PrimaryButton>
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
