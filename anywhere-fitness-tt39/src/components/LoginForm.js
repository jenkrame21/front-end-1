import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
import schema from '../validation/loginFormSchema'
import { connect } from 'react-redux';
import { postLogin } from '../actions/index';

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
  username: '',
  password: '',
}

const defaultErrors = {
  username: '',
  password: '',
}

function LoginForm(props) {
  const [formValues, setFormValues] = useState(initialValues)
  // const [users, setUsers] = useState([])
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
    // axios
    //   .post('https://reqres.in/api/users', newUser)
    //   .then((res) => {
    //     setUsers([res.data, ...users])
    //     setFormValues(initialValues)
    //     debugger
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //     debugger
    //   })
    props.postLogin(newUser)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
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
        <div>{errors.username}</div>
        <div>{errors.password}</div>
      </StyledErr>
      <StyledForm onSubmit={onSubmit}>
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
        <StyledBtn disabled={buttonDisabled}>Enter</StyledBtn>
      </StyledForm>
    </StyledDiv>
  )
}

export default connect(null, { postLogin })(LoginForm);