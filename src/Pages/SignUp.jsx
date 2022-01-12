import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { db } from '../Firebase/Firebase.config'
import styled from 'styled-components'
import { AiFillEye } from 'react-icons/ai'
import { serverTimestamp, setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import AltNav from '../Components/NavComps/AltNav'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  // destructuring form data
  const { name, email, password } = formData

  const navigate = useNavigate()

  // dynamic onchange function on the inputs
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      // initialize auth object
      const auth = getAuth()

      // registering user, returns promise
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // getting user
      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      // copy of format object
      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      // creating and setting doc
      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      toast.error('Registration Failed')
    }
  }

  return (
    <Main>
      <AltNav />
      <SignUpContainer>
        <header>Create Account</header>
        <Form onSubmit={onSubmit}>
          <p>Name</p>
          <Name type="text" value={name} id="name" onChange={onChange} />
          <p>Email</p>
          <Email type="email" value={email} id="email" onChange={onChange} />
          <PasswordContainer>
            <p>Password</p>
            <Password
              type={showPassword ? 'text' : 'password'}
              onChange={onChange}
              value={password}
              id="password"
            />
            <AiFillEye onClick={() => setShowPassword(!showPassword)} />
          </PasswordContainer>
          <SignUpButtonContainer>
            <button>Sign Up</button>
          </SignUpButtonContainer>
        </Form>
        {/* Google oAuth */}
        <p className="sign-in-header">Already have an account?</p>
        <SignInLink to="/sign-in">Sign In</SignInLink>
      </SignUpContainer>
    </Main>
  )
}

export default SignUp

const Main = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`

const SignUpContainer = styled.div`
  height: 300px;
  width: 400px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    font-size: 1.8rem;
    font-weight: 500;
    padding: 10px;
  }

  .sign-in-header {
    margin-top: 25px;
  }

  @media (max-width: 500px) {
    width: 350px;
    padding: 20px;
  }
`

const Form = styled.form`
  margin-top: 15px;
  text-align: center;

  p {
    font-size: 0.85rem;
    font-weight: 500;
    margin: 8px;
  }
`

const Name = styled.input`
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

const Email = styled.input`
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

const PasswordContainer = styled.div`
  position: relative;

  svg {
    font-size: 1.3rem;
    position: absolute;
    right: 10px;
    bottom: 16px;
  }
`

const Password = styled.input`
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

const SignUpButtonContainer = styled.div`
  button {
    margin: 15px;
    padding: 5px 14px;
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
`

const SignInLink = styled(Link)`
  font-size: 0.9rem;
  color: black;
  padding: 5px;

  :hover {
    cursor: pointer;
    font-weight: 500;
  }
`
