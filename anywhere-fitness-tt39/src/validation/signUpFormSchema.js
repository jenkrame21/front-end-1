import * as yup from 'yup'

export default yup.object().shape({
  first_name: yup.string()
    .required('Name is required.')
    .min(2, 'Name must be at least two characters long.'),
  last_name: yup.string()
    .required('Name is required.')
    .min(2, 'Name must be at least two characters long.'),  
  email: yup.string()
    .email('Must be a valid email address.')
    .required('Must include email address.'),
  username: yup.string()
    .required('Must include username')
    .min(4, 'Username must be at least four characters long.'),
  password: yup.string()
    .required('Password is required.')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
      `Password must contain capital, lowercase,
       number & have a min. length of 8`
    ),
  role: yup.string().oneOf(['client', 'instructor'], 'Role is required.'),
})
