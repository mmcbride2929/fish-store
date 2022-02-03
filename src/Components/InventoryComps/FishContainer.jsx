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
        <LoadingContainer>
          <h2>Loading</h2>
          <span>One Moment...</span>
        </LoadingContainer>
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
  background: #e8e8e8;
  margin: 0px 15px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`

const LoadingContainer = styled.div`
  color: black;
  letter-spacing: 1px;
  text-align: center;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 20px;
  }
`

const InventoryContainer = styled.div`
  max-width: 950px;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-between;

  .active {
    background-color: #006198;
    color: #e8e8e8;

    svg {
      color: #e8e8e8;
    }
  }

  @media (max-width: 650px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`

/* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 17rem));
  grid-gap: 20px;
  justify-content: center; */
