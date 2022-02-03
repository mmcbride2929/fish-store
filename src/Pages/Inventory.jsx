import styled from 'styled-components'
import ActiveFishContainer from '../Components/InventoryComps/ActiveFishContainer'
import FishContainer from '../Components/InventoryComps/FishContainer'
import InventoryHeader from '../Components/InventoryComps/InventoryHeader'

const Inventory = () => {
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
