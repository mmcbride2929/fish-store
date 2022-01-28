import styled from 'styled-components'
import { db } from '../Firebase/Firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import Context from '../Context/Context'
import { useContext, useEffect } from 'react'
import ActiveFishContainer from '../Components/InventoryComps/ActiveFishContainer'
import FishContainer from '../Components/InventoryComps/FishContainer'
import InventoryHeader from '../Components/InventoryComps/InventoryHeader'

const Inventory = () => {
  const { setLoading, setInventory } = useContext(Context)
  const inventoryCollectionRef = collection(db, 'fish')

  // fetching inventory from fish collection
  useEffect(() => {
    const fetchInventory = async () => {
      const data = await getDocs(inventoryCollectionRef)

      // looping through docs, returning objs to inv arr
      setInventory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchInventory()

    //set loading to false
    setLoading(false)
  }, [])

  return (
    <InventoryContainer>
      <InventoryHeader />
      <ActiveFishContainer />
      <FishContainer />
    </InventoryContainer>
  )
}

export default Inventory

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
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

// inv ref from fish coll

// const createPost = async () => {
//   await addDoc(inventoryCollectionRef, newPost)
// }
