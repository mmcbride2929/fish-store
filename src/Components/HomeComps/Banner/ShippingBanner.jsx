import styled from 'styled-components'
import BannerText from '../Banner/BannerText'
import BannerContent from '../Banner/BannerContent'

const ShippingBanner = () => {
  return (
    <Main>
      <ContentWrapper>
        <BannerText />
        <BannerContent />
      </ContentWrapper>
    </Main>
  )
}
export default ShippingBanner

const Main = styled.main`
  display: flex;
  padding: 25px;
  margin: 20px 15px 0 15px;
  margin-bottom: 20px;
  height: auto;
  background-color: #e8e8e9;
  color: #e8e8e8;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 35px;
  }
`
const ContentWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: #006198;
  width: 100%;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
