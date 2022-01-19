import styled from 'styled-components'
import ActiveFish from '../Components/InventoryComps/ActiveFish'
import FishContainer from '../Components/InventoryComps/FishContainer'
import InventoryHeader from '../Components/InventoryComps/InventoryHeader'

const Inventory = () => {
  return (
    <InventoryContainer>
      <InventoryHeader />
      <ActiveFish />
      <FishContainer />
    </InventoryContainer>
  )
}

export default Inventory

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`
