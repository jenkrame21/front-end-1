import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import styled from 'styled-components'
import schema from '../validation/loginFormSchema'
import { connect } from 'react-redux'
import { postLogin } from '../actions/index'
import { Form } from 'react-bootstrap'

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  max-width: 40%;
  Button {
    transition: 0.5s all ease-in-out;
    align-items: center;
    border-radius: 20px;
    color: white;
    background-color: #fd5549;
    &:hover {
      transform: scale(1.1);
    }
  }
`

// const StyledErr = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   color: red;
//   font-family: monospace;
//   font-size: 0.8rem;
// `

// const StyledForm = styled.form`
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: flex-end;
//   border: 3px solid cadetblue;
//   box-shadow: 4px 4px 2px lightblue;
//   border-radius: 45px;
//   padding: 2%;
//   input {
//     margin: 1.5% 0 1.5%;
//     &::selection {
//       color: deepskyblue;
//     }
//   }
//   label {
//     &::selection {
//       color: deepskyblue;
//     }
//   }
// `

// const StyledBtn = styled.button`
//   padding: 0 5% 0;
//   background-color: white;
//   color: black;
//   border: 2px solid lightcoral;
//   border-radius: 10px;
//   font-weight: bold;
//   transition: 0.4s all ease-in-out;
//   &:hover {
//     color: whitesmoke;
//     background-color: lightcoral;
//   }
//   &::selection {
//     color: deepskyblue;
//   }
// `

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
  const [errors, setErrors] = useState(defaultErrors)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    if (props.role === 'client') {
      props.push('/user')
    } else if (props.role === 'instructor') {
      props.push('/instructor')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.role])

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
    props.postLogin(newUser)
    setFormValues(initialValues)
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
      <Form onSubmit={onSubmit}>
        <Form.Group onSubmit={onSubmit}>
          <Form.Row>
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
          </Form.Row>
          <Form.Row>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={onChange}
              />
            </label>
          </Form.Row>
          <button disabled={buttonDisabled}>Log In</button>
        </Form.Group>
      </Form>
      <div>
        <span>{errors.username}</span>
        <span>{errors.password}</span>
      </div>
    </StyledDiv>
  )
}

export default connect(null, { postLogin })(LoginForm)
