import * as yup from 'yup'

export default yup.object().shape({
  name: yup
    .string()
    .required('Class name is required'),
  type: yup.string().required('Class type required'),
  // instructor_username: yup.string().required(),
  start_time: yup.string().required('Start time required'),
  date: yup.string().required('Date is required'),
  duration: yup.number('Provide duration in integers').required('Class duration required'),
  intensity_level: yup.string().required('Intensity Level required.'),
  location: yup.string().required('Location required'),
  max_size: yup.number().required('Max class size required'),
})
