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

  // INVENTORY CONTEXT ***********************************
  const [saltWater, setSaltWater] = useState(false)
  const [inventory, setInventory] = useState([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [activeFish, setActiveFish] = useState({
    name: '',
    price: 0,
    water: '',
    photo: 'loading',
    lifeExpectancy: '',
    diet: '',
    currentAge: '',
    averageSize: '',
  })

  // toggle between salt and freshwater
  const handleToggle = (e) => {
    if (e.target.innerText === 'Salt') {
      setSaltWater(true)
      setDefaultFish(e.target.innerText)
    }
    if (e.target.innerText === 'Fresh') {
      setSaltWater(false)
      setDefaultFish(e.target.innerText)
    }
  }

  // setting default fresh and saltwater fish
  const setDefaultFish = (water) => {
    if (water === 'Fresh') {
      const inventoryCopy = [...inventory]
      const defaultFishFresh = inventoryCopy
        .reverse() // reverse is only so top fish in inv isnt active by def
        .find((fish) => fish.water === 'fresh')
      setActiveFish(defaultFishFresh)
    }
    if (water === 'Salt') {
      const inventoryCopy = [...inventory]
      const defaultFishSalt = inventoryCopy
        .reverse() // reverse is only so top fish in inv isnt active by def
        .find((fish) => fish.water === 'salt')
      setActiveFish(defaultFishSalt)
    }
  }

  // handling quantity of fish added to cart
  const handleQuantity = (e) => {
    if (e.target.className.baseVal === 'minus' && quantity > 1) {
      setQuantity(quantity - 1)
    }

    if (e.target.className.baseVal === 'plus' && quantity < 12) {
      setQuantity(quantity + 1)
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
        inventory,
        loading,
        activeFish,
        quantity,
        setActiveFish,
        setDefaultFish,
        setLoading,
        setInventory,
        setUser,
        setSignedIn,
        handleToggle,
        handleSidebar,
        handleClose,
        handleQuantity,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
