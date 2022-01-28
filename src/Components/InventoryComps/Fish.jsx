import styled from 'styled-components'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useContext } from 'react'
import Context from '../../Context/Context'

const Fish = ({ fish }) => {
  // destructuring our fish prop
  const { photo, price, name, id } = fish

  const { activeFish, setActiveFish } = useContext(Context)

  return (
    <FishContainer
      className={activeFish.name === name ? 'active' : ''}
      onClick={() => setActiveFish(fish)}
    >
      <ImageContainer>
        <img src={require(`../../img/fish/${photo}.jpg`)} alt="fish-photo" />
      </ImageContainer>
      <DetailsContainer>
        <h2>{name}</h2>
        <p>-</p>
        <h3>${price}</h3>
        <AiOutlineHeart className="not-favorited" />
      </DetailsContainer>
    </FishContainer>
  )
}

export default Fish

// categries
const FishContainer = styled.div`
  background-color: white;
  height: auto;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  :hover {
    background-color: #006198;
    color: #e8e8e8;
    cursor: pointer;

    svg {
      color: #e8e8e8;
    }
  }
`
// category item
const ImageContainer = styled.div`
  img {
    border-radius: 5px 5px 0px 0px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 5px;
  position: relative;

  h2 {
    font-size: 1rem;

    :hover {
      color: black;
      cursor: pointer;
    }
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    margin: 0 3px;
  }

  svg {
    position: absolute;
    right: 5px;
    bottom: 6.5px;
  }

  // favorite
  .favorited {
    color: #de282a;

    :hover {
      color: #62717d;
      cursor: pointer;
    }
  }

  .not-favorited {
    color: #62717d;

    :hover {
      cursor: pointer;
      color: #de282a;
    }
  }
`
