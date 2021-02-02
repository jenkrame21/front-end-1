import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../validation/signUpFormSchema'
import styled from 'styled-components'

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
  padding: 1.5%;
  input {
    margin: 1.5% 0 1.5%;
    &::selection{
    color:deepskyblue;
  }
  }
  label{
    &::selection{
    color:deepskyblue;
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
  &:hover {
    color: whitesmoke;
    background-color: lightcoral;
  }
  &::selection{
    color:deepskyblue;
  }
`

const initialValues = {
  name: '',
  email: '',
  username: '',
  password: '',
  role: '',
}

const defaultErrors = {
  name: '',
  email: '',
  username: '',
  password: '',
  role: '',
}

export default function SignUpForm(props) {
  const [formValues, setFormValues] = useState(initialValues)
  const [users, setUsers] = useState([])
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

  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then((res) => {
        setUsers([res.data, ...users])
        setFormValues(initialValues)
        debugger
      })
      .catch((err) => {
        console.error(err)
        debugger
      })
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim(),
    }
    postNewUser(newUser)
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
        <div>{errors.email}</div>
        <div>{errors.username}</div>
        <div>{errors.password}</div>
        <div>{errors.role}</div>
      </StyledErr>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
            placeholder="Full Name"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChange}
            placeholder="example@email.com"
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={onChange}
            placeholder="Min. 4 chars"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
          />
        </label>
        <label>
          User
          <input
            type="radio"
            name="role"
            value="User"
            checked={formValues.role === 'User'}
            onChange={onChange}
          />
        </label>

        <label>
          Instructor
          <input
            type="radio"
            name="role"
            value="Instructor"
            checked={formValues.role === 'Instructor'}
            onChange={onChange}
          />
        </label>
        <StyledBtn disabled={buttonDisabled}>Enter</StyledBtn>
      </StyledForm>
    </StyledDiv>
  )
}
