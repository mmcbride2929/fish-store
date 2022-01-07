import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Pages/Home'
import Inventory from './Pages/Inventory'
import Contact from './Pages/Contact'
import Navbar from './Components/NavComps/Navbar'
import { Provider } from './Context/Context'
import SignIn from './Pages/SignIn'
import Cart from './Pages/Cart'
import ForgotPassword from './Pages/ForgotPassword'
import SignUp from './Pages/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/FooterComps/Footer'
import PrivateRoute from './Components/Routes/PrivateRoute'

function App() {
  return (
    <>
      <Provider>
        <Main>
          <Router>
            <Navbar />
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
            <Footer />
          </Router>
        </Main>
        <ToastContainer />
      </Provider>
    </>
  )
}

export default App

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
  letter-spacing: 0.2px;
`
