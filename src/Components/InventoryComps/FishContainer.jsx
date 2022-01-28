import Context from '../../Context/Context'
import { useContext } from 'react'
import styled from 'styled-components'
import Fish from './Fish'

const FishContainer = () => {
  const { inventory, saltWater, loading } = useContext(Context)

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
      {/* <button onClick={createPost}>sdfsdfsdf</button> */}
    </ContentWrapper>
  )
}

export default FishContainer

const ContentWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #e8e8e8;
  margin: 0px 15px;
  margin-bottom: 40px;
`

const LoadingContainer = styled.div``
const InventoryContainer = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 17rem));
  grid-gap: 20px;
  justify-content: center;

  .active {
    background-color: #006198;
    color: #e8e8e8;

    svg {
      color: #e8e8e8;
    }
  }
`
