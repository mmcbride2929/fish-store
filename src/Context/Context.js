import { createContext, useState } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {
  // NAV / MENU CONTEXT ********************************
  const [navbarActive, setNavbarActive] = useState(true)
  const [menuActive, setMenuActive] = useState(true)
  const [sidebarActive, setSidebarActive] = useState(false)

  // open sidebar
  const handleSidebar = () => {
    setMenuActive(false)
    setSidebarActive(true)
    setNavbarActive(false)
  }

  // close menu
  const handleClose = () => {
    setMenuActive(true)
    setSidebarActive(false)
    setNavbarActive(true)
  }

  // PROFILE CONTEXT ***********************************
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState(null)

  // CART CONTEXT ***********************************
  const [saltWater, setSaltWater] = useState(false)

  // toggle between salt and freshwater
  const handleToggle = (e) => {
    if (e.target.innerText === 'Salt') {
      setSaltWater(true)
    }
    if (e.target.innerText === 'Fresh') {
      setSaltWater(false)
    }
  }

  return (
    <Context.Provider
      value={{
        navbarActive,
        menuActive,
        sidebarActive,
        signedIn,
        user,
        saltWater,

        handleToggle,
        setUser,
        setSignedIn,
        handleSidebar,
        handleClose,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
