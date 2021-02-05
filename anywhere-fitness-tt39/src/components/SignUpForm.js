import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import schema from '../validation/signUpFormSchema'
import { connect } from 'react-redux'
import { postSignup } from '../actions/index'
import { Form, Col } from 'react-bootstrap'
import styled from 'styled-components'

const StyledBtn = styled.button`
  padding: 0 5% 0;
  background-color: white;
  color: black;
  border: 2px solid #fd5549;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s all ease-in-out;
  &:hover {
    color: whitesmoke;
    background-color: #fd5549;
    text-shadow: 1px 1px black;
    border: 2px solid #474350;
  }
  &::selection {
    color: #fd5549;
  }
`

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
  role: '',
}

const defaultErrors = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
  role: '',
}

function SignUpForm(props) {
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
    props.postSignup(newUser)
    setFormValues(initialValues)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
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
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Label htmlFor="first_name" className="sign-up-labels">
              First Name:
              <Form.Control
                type="text"
                name="first_name"
                value={formValues.first_name}
                onChange={onChange}
                placeholder="First Name"
                size="sm"
                className="regular-font first-name-input"
              />
            </Form.Label>
            <Form.Label htmlFor="last_name" className="sign-up-labels">
              Last Name:
              <Form.Control
                type="text"
                name="last_name"
                value={formValues.last_name}
                onChange={onChange}
                placeholder="Last Name"
                size="sm"
                className="regular-font"
              />
            </Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Label htmlFor="email" className="sign-up-labels">
              E-mail:
              <Form.Control
                type="email"
                name="email"
                value={formValues.email}
                onChange={onChange}
                placeholder="example@email.com"
                size="sm"
                className="regular-font"
              />
            </Form.Label>
          </Col>
          <Col>
            <Form.Label htmlFor="username" className="sign-up-labels">
              Username:
              <Form.Control
                type="text"
                name="username"
                value={formValues.username}
                onChange={onChange}
                placeholder="Min. 4 chars"
                size="sm"
                className="regular-font"
              />
            </Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Label htmlFor="password" className="sign-up-labels">
              Password:
              <Form.Control
                type="password"
                name="password"
                value={formValues.password}
                onChange={onChange}
                size="sm"
                className="regular-font"
              />
            </Form.Label>
          </Col>
          <Col>
            <Form.Label className="user-radio-label sign-up-labels">
              User
              <Form.Control
                type="radio"
                name="role"
                value="client"
                checked={formValues.role === 'client'}
                onChange={onChange}
                className="regular-font"
                size='sm'
              />
            </Form.Label>

            <Form.Label className="instructor-radio-label sign-up-labels">
              Instructor
              <Form.Control
                type="radio"
                name="role"
                value="instructor"
                checked={formValues.role === 'instructor'}
                onChange={onChange}
                className="regular-font"
                size='sm'
              />
            </Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <StyledBtn disabled={buttonDisabled}>Sign Up!</StyledBtn>
          </Col>
        </Form.Row>
      </Form.Group>
      <div className='sign-up-errors-parent'>
        <div className="sign-up-errors">
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.username}</div>
          <div className="password-error">{errors.password}</div>
          <div>{errors.role}</div>
        </div>
      </div>
    </Form>
  )
}

export default connect(null, { postSignup })(SignUpForm)
