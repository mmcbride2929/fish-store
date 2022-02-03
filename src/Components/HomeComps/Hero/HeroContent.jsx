import styled from 'styled-components'
import Context from '../../../Context/Context'
import { useContext } from 'react'

const HeroContent = () => {
  const { inventory } = useContext(Context)

  const inventoryCopy = [...inventory]

  return (
    <ContentContainer>
      <LeftWrapper>
        <h3>our favorites</h3>
      </LeftWrapper>
      <RightWrapper>
        {/* {inventoryCopy
          .filter((fish) => fish.water === 'salt')
          .filter((fish, index) => index < 2)
          .map((fish) => {
            return <FishCard></FishCard>
          })} */}
      </RightWrapper>
    </ContentContainer>
  )
}

export default HeroContent

const ContentContainer = styled.div``

const LeftWrapper = styled.div``
const RightWrapper = styled.div``

// .filter((fish) => {
//     if (fish.water === 'salt') {
//       adAmount++
//       return fish
//     }
//     return false
//   })
