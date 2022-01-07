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

  return (
    <Context.Provider
      value={{
        navbarActive,
        menuActive,
        sidebarActive,
        signedIn,
        user,
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
