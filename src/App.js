import PetStore from './Components/PetStore'
import { Provider } from './Context/Context'

function App() {
  return (
    <Provider>
      <PetStore />
    </Provider>
  )
}

export default App
