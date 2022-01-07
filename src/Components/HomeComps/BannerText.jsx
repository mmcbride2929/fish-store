import styled from 'styled-components'

const BannerText = () => {
  return (
    <TextContainer>
      <h1>FREE SHIPPING</h1>
      <h2>On any order over $49.</h2>
      <p>Offer is limited to customers located within the US & Canada.</p>
    </TextContainer>
  )
}

export default BannerText

const TextContainer = styled.header`
  width: 300px;
  margin: 10px;
  padding: 5px;

  h1 {
    font-size: 2rem;
  }

  h2 {
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
    width: 200px;
    margin: 0 auto;

    @media (min-width: 500px) {
      width: 250px;
    }
  }
`
