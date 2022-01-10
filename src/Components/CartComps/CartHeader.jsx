import styled from 'styled-components'
import FishToggle from './FishToggle'

const CartHeader = () => {
  return (
    <Header>
      <HeaderContainer>
        <h1>Inventory</h1>
      </HeaderContainer>
      <SortContainer>
        <FishToggle />
      </SortContainer>
    </Header>
  )
}

export default CartHeader

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderContainer = styled.div`
  padding: 15px;
`

const SortContainer = styled.div`
  padding: 15px;
`
