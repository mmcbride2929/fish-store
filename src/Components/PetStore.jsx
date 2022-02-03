import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../Pages/Home'
import Inventory from '../Pages/Inventory'
import Contact from '../Pages/Contact'
import Navbar from '../Components/NavComps/Navbar'
import SignIn from '../Pages/SignIn'
import Cart from '../Pages/Cart'
import ForgotPassword from '../Pages/ForgotPassword'
import SignUp from '../Pages/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../Components/FooterComps/Footer'
import PrivateRoute from '../Components/Routes/PrivateRoute'
import { db } from '../Firebase/Firebase.config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import Context from '../Context/Context'
import { useContext, useEffect, useState } from 'react'

const PetStore = () => {
  const { setLoading, setInventory, setActiveFish } = useContext(Context)
  const inventoryCollectionRef = collection(db, 'fish')

  // fetching inventory from fish collection
  useEffect(() => {
    const fetchInventory = async () => {
      const data = await getDocs(inventoryCollectionRef)

      //setting default active fish
      const fetchedFish = data.docs.map((doc) => doc.data())
      const fetchedFishCopy = [...fetchedFish]
      setActiveFish(
        fetchedFishCopy.reverse().find((fish) => fish.water === 'fresh')
      )

      // looping through docs, returning objs to inv arr
      setInventory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

      //set loading to false
      setLoading(false)
    }

    fetchInventory()
  }, [])

  return (
    <>
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Body>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default PetStore

const Header = styled.header`
  max-width: 1100px;
  letter-spacing: 0.2px;
  margin: 0 auto;
`

const Body = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  letter-spacing: 0.2px;
`
// const [newPost, setNewPost] = useState({
//   averageSize: '',
//   currentAge: '',
//   diet: '',
//   lifeExpectancy: '',
//   name: '',
//   photo: '',
//   price: 0,
//   water: '',
// })

// const createPost = async () => {
//   await addDoc(inventoryCollectionRef, newPost)
// }

// <button onClick={createPost}>sdfsdfsdf</button>
