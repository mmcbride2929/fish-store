import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../../Context/Context'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { useNavigate, useLocation } from 'react-router-dom'

const ActiveFishContainer = () => {
  const { activeFish, loading, quantity, handleQuantity, signedIn } =
    useContext(Context)

  const { name, photo, averageSize, currentAge, diet, lifeExpectancy, price } =
    activeFish

  // navigate with react-router
  const navigate = useNavigate()

  const handleNotSignedIn = () => {
    if (signedIn === false) {
      navigate('/sign-in')
    }
  }

  return (
    <Section>
      <DisplayContainer>
        {loading ? (
          <LoadingContainer>
            {' '}
            <h2>Loading</h2>
            <span>One Moment...</span>
          </LoadingContainer>
        ) : (
          <ContentContainer>
            <TopContainer>
              <img
                src={require(`../../img/fish/${photo}.jpg`)}
                alt="fish-photo"
              />
              <h3>
                {name} - ${price}
              </h3>
            </TopContainer>
            <BottomContainer>
              <div>
                <h5>Current Age</h5>
                <h5>{currentAge}</h5>
              </div>
              <div>
                <h5>Diet</h5>
                <h5>{diet}</h5>
              </div>
              <div>
                <h5>Average Size</h5>
                <h5>{averageSize}</h5>
              </div>
              <div>
                <h5>Life Expectancy</h5>
                <h5>{lifeExpectancy}</h5>
              </div>
            </BottomContainer>
            <QuantityContainer>
              <TiPlus className="plus" onClick={handleQuantity} />

              <span>{quantity}</span>

              <TiMinus className="minus" onClick={handleQuantity} />
            </QuantityContainer>
            <button onClick={signedIn ? console.log('f') : handleNotSignedIn}>
              Add to Cart
            </button>
          </ContentContainer>
        )}
      </DisplayContainer>
    </Section>
  )
}

export default ActiveFishContainer

const Section = styled.section`
  height: auto;
  padding: 10px;
  background-color: #e8e8e8;
  margin: 0px 15px;
  margin-bottom: 20px;
  color: #e8e8e8;

  @media (min-width: 350px) {
    padding: 15px;
  }
`

const ContentContainer = styled.div`
  max-width: 400px;
  background: #006198;
`

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  button {
    margin: 10px;
    height: 30px;
    width: 100px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    background-color: #006198;
    color: #e8e8e8;

    :hover {
      cursor: pointer;
      background-color: #00334e;
      border-radius: 5px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }
`

const TopContainer = styled.div`
  text-align: center;

  h3 {
    font-size: 1.3rem;
    padding: 10px;
  }

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
`
const BottomContainer = styled.div`
  width: 100%;
  padding: 5px 40px;
  text-transform: uppercase;
  letter-spacing: 0.7px;

  h5 {
    margin: 2px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 376px) {
    padding: 5px 20px;
  }
`

const QuantityContainer = styled.div`
  margin-top: 15px;

  span {
    font-size: 1.1rem;
  }

  svg {
    font-size: 1.5rem;
    padding: 11px 5px 0 5px;
    margin: 5px;
    vertical-align: bottom;

    :hover {
      cursor: pointer;
      color: #00334e;
    }
  }
`
const LoadingContainer = styled.div`
  color: black;
  letter-spacing: 1px;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 20px;
  }
`
