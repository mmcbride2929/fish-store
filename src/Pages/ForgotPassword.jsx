import styled from 'styled-components'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import AltNav from '../Components/NavComps/AltNav'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const onChange = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      navigate('/sign-in')
      toast.success('Email Was Sent')
    } catch (error) {
      toast.error('Could Not Send Reset Email')
    }
  }

  return (
    <ForgotPWContainer>
      <AltNav />
      <Main>
        <header>Forgot Password</header>

        <Form onSubmit={onSubmit}>
          <p>Email Address</p>
          <EmailInput
            type="email"
            value={email}
            onChange={onChange}
          ></EmailInput>
          <ResetLink>
            <button type="submit">Reset</button>
            <Link to="/sign-in">
              <button>Back</button>
            </Link>
          </ResetLink>
        </Form>
      </Main>
    </ForgotPWContainer>
  )
}

export default ForgotPassword

const ForgotPWContainer = styled.div`
  text-align: center;

  header {
    font-size: 1.8rem;
    font-weight: 500;
    padding: 10px;
    margin-top: 5px;
  }
`

const Main = styled.main`
  height: 300px;
  width: 400px;
  padding: 40px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 300px;
    padding: 20px;
  }
`

const Form = styled.form`
  margin-top: 15px;

  button {
    width: 75px;
    margin: 15px;
    padding: 8px 14px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    background-color: #00334e;
    color: #e8e8e8;

    :hover {
      cursor: pointer;
      color: #00334e;
      background-color: #e8e8e8;
      border: 1px solid #00334e;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }

  p {
    font-size: 0.85rem;
    font-weight: 500;
    margin: 8px;
  }
`
const EmailInput = styled.input`
  width: 250px;
  height: 35px;
  margin-bottom: 10px;
  background-color: whitesmoke;
  border: 1px solid silver;
  outline: none;
  border-radius: 5px;
  padding: 0 10px;
  font-weight: 500;
`

const ResetLink = styled.div``
