import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../../Context/Context'

const ActiveFish = () => {
  const { activeFish, loading } = useContext(Context)
  const { name, photo, averageSize, currentAge, diet, lifeExpectancy, price } =
    activeFish

  return (
    <Section>
      <DisplayContainer>
        {loading ? (
          <>loading</>
        ) : (
          <ContentContainer>
            <LeftContainer>
              <img
                src={require(`../../img/fish/${photo}.jpg`)}
                alt="fish-photo"
              />
              <h3>
                {name} - ${price}
              </h3>
            </LeftContainer>
            <RightContainer>
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
            </RightContainer>
            <button>Add to Cart</button>
          </ContentContainer>
        )}
      </DisplayContainer>
    </Section>
  )
}

export default ActiveFish

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
  width: 100%;
  max-width: 400px;
  background: #006198;
`

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  button {
    margin: 15px;
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

const LeftContainer = styled.div`
  text-align: center;

  h3 {
    font-size: 1.3rem;
    padding: 10px;
  }

  img {
    width: 100%;
  }
`
const RightContainer = styled.div`
  width: 100%;

  padding: 5px 25px;
  text-transform: uppercase;
  letter-spacing: 0.7px;

  h5 {
    margin: 2px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 376px) {
    padding: 5px 50px;
  }
`
