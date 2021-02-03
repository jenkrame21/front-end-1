import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
import schema from '../validation/addClassFormSchema'
import { connect } from 'react-redux';
import { postClass } from '../actions';


const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: monospace;
`

const StyledErr = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: red;
  font-family: monospace;
  font-size: 0.8rem;
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  border: 3px solid cadetblue;
  box-shadow: 4px 4px 2px lightblue;
  border-radius: 45px;
  padding: 2%;
  input {
    margin: 1.5% 0 1.5%;
    &::selection {
      color: deepskyblue;
    }
  }
  label {
    &::selection {
      color: deepskyblue;
    }
  }
`
const StyledBtn = styled.button`
  padding: 0 5% 0;
  background-color: white;
  color: black;
  border: 2px solid lightcoral;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s all ease-in-out;
  &:hover {
    color: whitesmoke;
    background-color: lightcoral;
  }
  &::selection {
    color: deepskyblue;
  }
`

const initialValues = {
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
  const [classes, setClasses] = useState([])
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
    props.postClass(newClass);
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    const newClass = {
      name: formValues.name.trim(),
      type: formValues.type.trim(),
      start_time: formValues.start_time.trim(),
      date: formValues.date.trim(),
      duration: formValues.duration.trim(),
      intensity_level: formValues.intensity_level.trim(),
      location: formValues.location.trim(),
      attendees: formValues.attendees.trim(),
      max_size: formValues.max_size.trim(),
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
        <div>{errors.attendees}</div>
        <div>{errors.max_size}</div>
      </StyledErr>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
            placeholder="Class Name"
          />
        </label>
        <label htmlFor="type">
          Class Type:
          <input
            type="text"
            name="type"
            value={formValues.type}
            onChange={onChange}
            placeholder="Class type"
          />
        </label>
        <label htmlFor="start_time">
          Start Time:
          <input
            type="text"
            name="start_time"
            value={formValues.start_time}
            onChange={onChange}
            placeholder=""
          />
        </label>
        <label htmlFor="date">
          Date:
          <input
            type="date"
            name="date"
            value={formValues.date}
            onChange={onChange}
          />
        </label>
        <label>
          Duration:
          <input
            type="number"
            name="duration"
            value={formValues.duration}
            onChange={onChange}
          />
        </label>

        <label>
          Intensity:
          <input
            type="text"
            name="intensity_level"
            value={formValues.intensity_level}
            onChange={onChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formValues.location}
            onChange={onChange}
          />
        </label>
        <label>
          Attendees:
          <input
            type="number"
            name="attendees"
            value={formValues.attendees}
            onChange={onChange}
          />
        </label>
        <label>
          Capacity:
          <input
            type="number"
            name="max_size"
            value={formValues.max_size}
            onChange={onChange}
          />
        </label>
        <StyledBtn disabled={buttonDisabled}>Enter</StyledBtn>
      </StyledForm>
    </StyledDiv>
  )
}

export default connect(null, { postClass })(AddClassForm)