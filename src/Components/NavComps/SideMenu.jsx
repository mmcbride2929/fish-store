import { useNavigate } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react'
import Context from '../../Context/Context'
import { getAuth } from 'firebase/auth'

const SideMenu = () => {
  const { handleClose, signedIn, setSignedIn, setUser } = useContext(Context)

  const auth = getAuth()

  // navigate with react-router
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/sign-in')
  }

  const handleSignOut = () => {
    setSignedIn(false)
    setUser('')
    navigate('/')
    auth.signOut()
  }

  return (
    <NavContainer>
      <ContentWrapper>
        <AiOutlineClose onClick={handleClose} />
        <nav>
          <ul>
            <li onClick={() => navigate('/')}>
              <p onClick={handleClose}>Home</p>
            </li>
            <li onClick={() => navigate('/inventory')}>
              <p onClick={handleClose}>Fish</p>
            </li>
            <li onClick={() => navigate('/contact')}>
              <p onClick={handleClose}>Contact</p>
            </li>

            {signedIn ? (
              <li onClick={handleSignOut}>
                <p onClick={handleClose}>Sign Out</p>
              </li>
            ) : (
              <li onClick={handleSignIn}>
                <p onClick={handleClose}>Sign In</p>
              </li>
            )}
            <li onClick={() => navigate('/cart')}>
              <p onClick={handleClose}>Cart</p>
            </li>
          </ul>
        </nav>
      </ContentWrapper>
    </NavContainer>
  )
}

export default SideMenu

const NavContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  height: 318px;
  background-color: #006198;
  color: #e8e8e8;
  list-style-type: none;
  display: flex;
  align-items: start;
  justify-content: center;

  svg {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 3rem;
    padding: 15px;
    :hover {
      cursor: pointer;
      background-color: #00334e;
    }
  }

  li {
    list-style-type: none;
    text-align: center;
    border: 1px solid #e8e8e8;
    margin-bottom: 20px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      background-color: #00334e;
      border-radius: 5px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    p {
      width: 100px;
      padding: 5px 14px;
    }
  }

  @media (max-width: 768px) {
    height: 415px;
    li {
      margin-bottom: 45px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 500px;

    li {
      margin-bottom: 55px;
    }
  }
`

const ContentWrapper = styled.div`
  padding: 50px 40px;
`
