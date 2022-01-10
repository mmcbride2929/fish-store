import styled from 'styled-components'
import logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom'

const AltNav = () => {
  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Nav>
      <img onClick={() => navigate('/')} src={logo} alt="logo" />
    </Nav>
  )
}

export default AltNav

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #006198;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 225px;
    background-color: #e8e8e8;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    :hover {
      cursor: pointer;
    }
  }
`
