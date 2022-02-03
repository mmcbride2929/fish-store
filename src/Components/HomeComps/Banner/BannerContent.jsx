import styled from 'styled-components'
import { FaShippingFast } from 'react-icons/fa'
import { GiDoubleFish } from 'react-icons/gi'

const BannerContent = () => {
  return (
    <ContentWrapper>
      <div>
        <FaShippingFast />
        <h1>Overnight Shipping</h1>
        <p>Priority Shipping through USPS</p>
      </div>
      <div>
        <GiDoubleFish />
        <h1>Healthy Delivery</h1>
        <p>100% Satisfaction Guarantee</p>
      </div>
    </ContentWrapper>
  )
}

export default BannerContent

const ContentWrapper = styled.div`
  width: 350px;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 315px;
  }

  svg {
    font-size: 2rem;
  }

  h1 {
    font-size: 1rem;
    margin: 5px;
  }

  p {
    font-size: 0.7rem;
  }
`
