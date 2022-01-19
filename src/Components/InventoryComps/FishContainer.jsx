import Context from '../../Context/Context'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../Firebase/Firebase.config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import Fish from './Fish'

const FishContainer = () => {
  const { setInventory, inventory, saltWater, setLoading, loading } =
    useContext(Context)

  // fetching inventory from fish collection
  useEffect(() => {
    // inv ref from fish coll
    const inventoryCollectionRef = collection(db, 'fish')

    const fetchInventory = async () => {
      const data = await getDocs(inventoryCollectionRef)

      // looping through docs, returning objs to inv arr
      setInventory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchInventory()

    //set loading to false
    setLoading(false)
  }, [])

  // cloning inventory state
  const inventoryCopy = [...inventory]

  return (
    <ContentWrapper>
      {loading ? (
        <LoadingContainer>loading....</LoadingContainer>
      ) : (
        <InventoryContainer>
          {saltWater
            ? inventoryCopy
                .filter((fish) => fish.water === 'salt')
                .map((fish, index) => {
                  return <Fish key={index} fish={fish} />
                })
            : inventoryCopy
                .filter((fish) => fish.water === 'fresh')
                .map((fish, index) => {
                  return <Fish key={index} fish={fish} />
                })}
        </InventoryContainer>
      )}
    </ContentWrapper>
  )
}

export default FishContainer

const ContentWrapper = styled.div`
  height: auto;
  padding: 15px;
  background-color: #e8e8e8;
  margin: 0px 15px;
  margin-bottom: 40px;
`

const LoadingContainer = styled.div``
const InventoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 1.5rem;
  justify-content: center;

  .active {
    background-color: #006198;
    color: #e8e8e8;

    svg {
      color: #e8e8e8;
    }
  }
`

// const [newPost, setNewPost] = useState({
//   averaSize: '',
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
