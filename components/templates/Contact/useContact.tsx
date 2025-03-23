import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { validationSchema } from './schema'

const initialValues = {
  email: '',
  name: '',
  phone: '',
  password: '',
  confirmedPassword: '',
  message: '',
}

export const useContact = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      toast.info('Thank you! I will contact you soon', {
        position: toast.POSITION.TOP_CENTER,
      })
    },
    onReset() {
      toast.info('Thank you! I will contact you soon', {
        position: toast.POSITION.TOP_CENTER,
      })
    },
  })

  return [
    {
      formik,
    },
  ] as const
}
