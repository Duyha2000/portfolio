import * as Yup from 'yup'
import { RequestBody } from './type'

const validationSchema: Yup.SchemaOf<RequestBody['POST']> = Yup.object({
  name: Yup.string()
    .required('Please enter your full name')
    .trim()
    .min(4, 'Must be 4 characters or more'),

  email: Yup.string()
    .required('Please enter your email')
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Please enter a valid email address'
    ),

  phone: Yup.string()
    .required('Please enter your phone')
    .matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      'Must be a valid phone number'
    ),

  message: Yup.string()
    .trim()
    .min(10, 'Must be 10 characters or more')
    .required('Message is required and must be 10 characters or more'),
})

type PostInput = Yup.InferType<typeof validationSchema>

export { validationSchema }
export type { PostInput }
