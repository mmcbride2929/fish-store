import styled from 'styled-components'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Fish = ({ fish }) => {
  // destructuring our fish prop
  const { photo, price, name, id } = fish

  return (
    <FishContainer>
      <ImageContainer>
        <img src={require(`../../img/fish/${photo}.jpg`)} alt="fish-photo" />
      </ImageContainer>
      <DetailsContainer>
        <AiFillHeart />
      </DetailsContainer>
    </FishContainer>
  )
}

export default Fish

const FishContainer = styled.div``

const ImageContainer = styled.div`
  img {
    width: 200px;
  }
`

const DetailsContainer = styled.div`
  // favorite
  .favorited {
    color: #de282a;
  }

  .not-favorited {
    color: #62717d;
  }
`
