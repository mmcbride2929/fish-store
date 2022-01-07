import { Navigate, Outlet } from 'react-router-dom'
import Context from '../../Context/Context'
import { useContext } from 'react'

const PrivateRoute = () => {
  const { signedIn } = useContext(Context)

  return signedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
