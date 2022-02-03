import styled from 'styled-components'
import FishToggle from './FishToggle'

const InventoryHeader = () => {
  return (
    <Header id="hero">
      <HeaderContainer>
        <h1>Inventory</h1>
      </HeaderContainer>
      <SortContainer>
        <FishToggle />
      </SortContainer>
    </Header>
  )
}

export default InventoryHeader

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderContainer = styled.div`
  padding: 15px;

  @media (max-width: 350px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`

const SortContainer = styled.div`
  padding: 15px;
`
