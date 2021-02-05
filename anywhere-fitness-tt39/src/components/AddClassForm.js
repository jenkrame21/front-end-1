import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import styled from 'styled-components'
import schema from '../validation/addClassFormSchema'
import { connect } from 'react-redux'
import { postClass } from '../actions'

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const StyledErr = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: #fd5549;
  text-shadow: 2px 2px black;
`

const StyledForm = styled.form`
  border: 3px solid #fd5549;
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  box-shadow: 4px 4px 2px #474350;
  border-radius: 45px;
  padding: 2%;
  margin: 2% 0;
  background-color: #fdffff;
  input {
    border: 2px solid black;
    border-radius: 10px;
    margin-left: 2%;
  }
  label {
  }
`
const StyledBtn = styled.button`
  background-color: white;
  color: black;
  border: 2px solid #fd5549;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s all ease-in-out;
  margin-bottom: 1%;
  &:hover {
    color: whitesmoke;
    background-color: #fd5549;
    text-shadow: 1px 1px black;
  }
  &::selection {
    color: #fd5549;
  }
`

const initialValues = {
  name: '',
  instructor_username: '',
  type: '',
  start_time: '',
  date: '',
  duration: null,
  intensity_level: '',
  location: '',
  attendees: 1,
  max_size: null,
}

const defaultErrors = {
  name: '',
  type: '',
  start_time: '',
  date: '',
  duration: '',
  intensity_level: '',
  location: '',
  attendees: '',
  max_size: '',
}

function AddClassForm(props) {
  const [formValues, setFormValues] = useState(initialValues)
  // const [classes, setClasses] = useState([])
  const [errors, setErrors] = useState(defaultErrors)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const validate = (inputName, inputValue) => {
    yup
      .reach(schema, inputName)
      .validate(inputValue)
      .then(() => {
        setErrors({ ...errors, [inputName]: '' })
      })
      .catch((err) => {
        setErrors({ ...errors, [inputName]: err.errors[0] })
      })
  }

  const onChange = (evt) => {
    const { name, type, checked, value } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    validate(name, valueToUse)
    setFormValues({
      ...formValues,
      [name]: valueToUse,
    })
  }

  const postNewClass = (newClass) => {
    // axios
    //   .post('https://reqres.in/api/users', newClass)
    //   .then((res) => {
    //     setClasses([res.data, ...classes])
    //     setFormValues(initialValues)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //     debugger
    //   })
    props.postClass(newClass)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    const newClass = {
      name: formValues.name.trim(),
      type: formValues.type.trim(),
      start_time: formValues.start_time.trim(),
      date: formValues.date.trim(),
      duration: Number(formValues.duration),
      intensity_level: formValues.intensity_level.trim(),
      location: formValues.location.trim(),
      attendees: formValues.attendees,
      max_size: Number(formValues.max_size),
      instructor_username: props.user,
    }
    postNewClass(newClass)
  }
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid)
    })
  }, [formValues])
  return (
    <StyledDiv>
      <StyledErr>
        <div>{errors.name}</div>
        <div>{errors.type}</div>
        <div>{errors.start_time}</div>
        <div>{errors.date}</div>
        <div>{errors.duration}</div>
        <div>{errors.intensity_level}</div>
        <div>{errors.location}</div>
        <div>{errors.max_size}</div>
      </StyledErr>
      <StyledForm >
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
            placeholder="Class Name"
          />
        </label>
        {/* <label htmlFor="instructor_username">
          Instructor:
          <input
            type="text"
            name="instructor_username"
            value={formValues.instructor_username}
            onChange={onChange}
            placeholder="Instructor Name"
          />
        </label> */}
        <label htmlFor="type">
          Class Type
          <input
            type="text"
            name="type"
            value={formValues.type}
            onChange={onChange}
            placeholder="Class type"
          />
        </label>
        <label htmlFor="start_time">
          Time
          <input
            type="text"
            name="start_time"
            value={formValues.start_time}
            onChange={onChange}
            placeholder="AM/PM"
          />
        </label>
        <label htmlFor="date">
          Date
          <input
            type="date"
            name="date"
            value={formValues.date}
            onChange={onChange}
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            name="duration"
            value={formValues.duration}
            onChange={onChange}
          />
        </label>

        <label>
          Intensity
          <input
            type="text"
            name="intensity_level"
            value={formValues.intensity_level}
            onChange={onChange}
            placeholder="High, Medium, or Low"
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            value={formValues.location}
            onChange={onChange}
          />
        </label>
        <label>
          Capacity
          <input
            type="number"
            name="max_size"
            value={formValues.max_size}
            onChange={onChange}
          />
        </label>
      </StyledForm>
      <StyledBtn onClick={onSubmit} disabled={buttonDisabled}>Add Class!</StyledBtn>
    </StyledDiv>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user.username,
  }
}
export default connect(mapStateToProps, { postClass })(AddClassForm)
