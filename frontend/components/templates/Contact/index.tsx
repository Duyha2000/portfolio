import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'

import styled from 'styled-components'
import PrimaryButton from '../../atoms/Button'
import Title from '../../atoms/Title'
import Meta from '../../meta'
import ContactItem from '../../molecules/ContactItem'
import { InnerLayout, MainLayout } from '../../styles/Layouts'
import { useContact } from './useContact'

function ContactPage() {
  const phone = <PhoneIcon />
  const mailIcon = <MailIcon />
  const location = <LocationOnIcon />

  const [values] = useContact()
  const { formik } = values

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

              <form className='form' onSubmit={formik.handleReset}>
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
                    <p className='errorMsg'> {formik.errors.name} </p>
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
                    <p className='errorMsg'> {formik.errors.email} </p>
                  )}
                </div>
                <div className='form-field'>
                  <label htmlFor='phone'>Enter your phone number *</label>
                  <input
                    type='text'
                    id='phone'
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && (
                    <p className='errorMsg'> {formik.errors.phone} </p>
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
                </div>
                {formik.errors.message && (
                  <div className='text-danger'>{formik.errors.message}</div>
                )}
                <div className='form-field f-button '>
                  <PrimaryButton title={'Send Email'} type='submit' />
                </div>
              </form>
            </div>
            <div className='right-content'>
              <ContactItem
                title={'Phone'}
                icon={phone}
                cont1={'+84-812291537'}
                cont2={''}
              />
              <ContactItem
                title={'Email'}
                icon={mailIcon}
                cont2={'tranduy10a@gmail.com'}
              />
              <ContactItem
                title={'Address'}
                icon={location}
                cont2={'VietNam'}
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
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          height: 250px;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`

export default ContactPage
