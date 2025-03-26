import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { validationSchema } from './schema'

const initialValues = {
  email: '',
  name: '',
  phone: '',
  message: '',
}

export const useContact = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/send-email',
          values
        )
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        })
        resetForm()
      } catch (err: any) {
        toast.error(err?.response?.data?.message || 'Gửi email thất bại!', {
          position: toast.POSITION.TOP_CENTER,
        })
      }
    },
  })

  return [{ formik }] as const
}
