import { useEffect, useState } from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'

import PrimaryButton from '../../atoms/Button'
import Title from '../../atoms/Title'
import Meta from '../../meta'
import ContactItem from '../../molecules/ContactItem'
import { InnerLayout, MainLayout } from '../../styles/Layouts'
import { useContact } from './useContact'

function ContactPage() {
  const phoneIcon = <PhoneIcon />
  const mailIcon = <MailIcon />
  const locationIcon = <LocationOnIcon />

  const [contact, setContact] = useState({
    phone: '',
    email: '',
    location: '',
  })

  const [values] = useContact()
  const { formik } = values

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`)
      .then((res) => res.json())
      .then((data) => {
        const { phone, email, location } = data
        setContact({ phone, email, location })
      })
      .catch((err) => {
        console.error('Failed to fetch contact info:', err)
      })
  }, [])

  return (
    <>
      <Meta title='Contact Page' />
      <MainLayout>
        <Title title={'Contact'} span={'Contact'} />
        <ContactPageStyled>
          <InnerLayout className={'contact-section'}>
            <div className='left-content'>
              <div className='contact-title'>
                <h4>Get In Touch</h4>
              </div>

              <form className='form' onSubmit={formik.handleSubmit}>
                <div className='form-field'>
                  <label htmlFor='name'>Enter your name*</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && (
                    <p className='errorMsg'>{formik.errors.name}</p>
                  )}
                </div>
                <div className='form-field'>
                  <label htmlFor='email'>Enter your email*</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <p className='errorMsg'>{formik.errors.email}</p>
                  )}
                </div>
                <div className='form-field'>
                  <label htmlFor='phone'>Enter your phone number*</label>
                  <input
                    type='text'
                    id='phone'
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && (
                    <p className='errorMsg'>{formik.errors.phone}</p>
                  )}
                </div>
                <div className='form-field'>
                  <label htmlFor='message'>Enter your Message*</label>
                  <textarea
                    name='message'
                    id='message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.message && (
                    <p className='errorMsg'>{formik.errors.message}</p>
                  )}
                </div>
                <div className='form-field f-button'>
                  <PrimaryButton title={'Send Email'} type='submit' />
                </div>
              </form>
            </div>
            <div className='right-content'>
              <ContactItem
                title='Phone'
                icon={phoneIcon}
                cont1={contact.phone}
                cont2=''
              />
              <ContactItem
                title='Email'
                icon={mailIcon}
                cont2={contact.email}
              />
              <ContactItem
                title='Address'
                icon={locationIcon}
                cont2={contact.location}
              />
            </div>
          </InnerLayout>
        </ContactPageStyled>
      </MainLayout>
    </>
  )
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      margin-left: 2rem;
      display: grid;
      grid-template-columns: 1fr;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input,
        textarea {
          border: 1px solid var(--border-color);
          background: transparent;
          outline: none;
          color: inherit;
          width: 100%;
        }
        input {
          height: 50px;
          padding: 0 15px;
        }
        textarea {
          height: 250px;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`

export default ContactPage
