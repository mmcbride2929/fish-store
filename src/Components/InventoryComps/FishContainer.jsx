import Context from '../../Context/Context'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../../Firebase/Firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import Fish from './Fish'

const FishContainer = () => {
  const { setInventory, inventory, saltWater, setLoading, loading } =
    useContext(Context)

  // inv ref from fish coll
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

  // cloning inventory state
  const inventoryCopy = [...inventory]

  return (
    <div>
      {loading ? (
        <div>loading....</div>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  )
}

export default FishContainer
