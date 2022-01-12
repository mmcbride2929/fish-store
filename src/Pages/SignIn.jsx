import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillEye } from 'react-icons/ai'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Context from '../Context/Context'
import { toast } from 'react-toastify'
import AltNav from '../Components/NavComps/AltNav'

const SignIn = () => {
  // component state
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  //destructuring
  const { email, password } = formData
  const { setSignedIn, setUser } = useContext(Context)

  const navigate = useNavigate()

  // form input dynamic onChange function
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      //sign in
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      // if user exists
      if (userCredential.user) {
        setSignedIn(true)
        setUser(userCredential.user.displayName)
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <>
      <AltNav />
      <Main>
        <SignInContainer>
          <header>Sign In</header>
          <Form onSubmit={onSubmit}>
            <p>Email Address</p>
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
            <SignInButtonContainer>
              <button>Sign In</button>
            </SignInButtonContainer>

            <LinksContainer>
              <ForgotPasswordLink to="/forgot-password">
                Forgot Password
              </ForgotPasswordLink>
              <p> OR </p>
              {/* Google oAuth */}
              <SignUpLink to="/sign-up">Sign Up</SignUpLink>
            </LinksContainer>
          </Form>
        </SignInContainer>
      </Main>
    </>
  )
}

export default SignIn

const Main = styled.div`
  height: auto;
  display: flex;
`
const SignInContainer = styled.div`
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

const SignInButtonContainer = styled.div`
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
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
const ForgotPasswordLink = styled(Link)`
  font-size: 0.9rem;
  color: black;
  padding: 5px;

  :hover {
    cursor: pointer;
    font-weight: 500;
  }
`
const SignUpLink = styled(Link)`
  font-size: 0.9rem;
  color: black;
  padding: 5px;

  :hover {
    cursor: pointer;
    font-weight: 500;
  }
`
