import { useNavigate, useLocation } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import styled from 'styled-components'
import logo from '../../img/logo.png'
import SideMenu from './SideMenu'
import { useContext } from 'react'
import Context from '../../Context/Context'
import { getAuth } from 'firebase/auth'

const Navbar = () => {
  // getting state and variables from context
  const { navbarActive, sidebarActive, menuActive, handleSidebar, signedIn } =
    useContext(Context)

  // initializing auth object
  const auth = getAuth()

  // navigate with react-router
  const navigate = useNavigate()

  // handling signing in and out
  const handleSignIn = () => {
    navigate('/sign-in')
  }

  const handleSignOut = () => {
    auth.signOut()
    navigate('/')
  }

  // getting pathname
  const { pathname } = useLocation()
  // filtering paths we want to hide navbar from
  if (
    pathname === '/sign-in' ||
    pathname === '/sign-up' ||
    pathname === '/forgot-password'
  )
    return null

  return (
    <Nav>
      <NavContent>
        <LogoContainer>
          <img onClick={() => navigate('/')} src={logo} alt="logo" />
        </LogoContainer>
        <ul>
          {navbarActive && (
            <>
              <TabContainer>
                <li onClick={() => navigate('/')}>
                  <p>Home</p>
                </li>
                <li onClick={() => navigate('/inventory')}>Fish</li>
                <li onClick={() => navigate('/contact')}>Contact</li>
              </TabContainer>
              <CartContainer>
                {signedIn ? (
                  <li onClick={handleSignOut}>
                    <p>Sign Out</p>
                  </li>
                ) : (
                  <li onClick={handleSignIn}>
                    <p>Sign In</p>
                  </li>
                )}

                <li onClick={() => navigate('/cart')}>
                  <FiShoppingCart />
                </li>
              </CartContainer>
            </>
          )}
          <MenuContainer>
            {menuActive && (
              <li onClick={handleSidebar}>
                <p>Menu</p>
              </li>
            )}
          </MenuContainer>
        </ul>
      </NavContent>
      {sidebarActive && <SideMenu />}
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  position: relative;
  height: 60px;
  background-color: #006198;
  display: flex;
  justify-content: space-between;
`

const NavContent = styled.nav`
  color: #e8e8e8;
  display: flex;
  align-items: center;
  width: 100%;

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      justify-content: flex-end;
    }
  }

  li {
    display: flex;
    align-items: center;
    padding: 5px 14px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      background-color: #00334e;
      border-radius: 5px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }
`

const LogoContainer = styled.div`
  display: flex;

  img {
    width: 220px;
    background-color: #e8e8e8;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 25px;
  width: 250px;

  @media (max-width: 768px) {
    display: none;
  }
`

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 10px;

  p {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const MenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`
