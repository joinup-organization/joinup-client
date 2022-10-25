import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().strict().required().email(),
  password: yup.string().required().min(8)
})
