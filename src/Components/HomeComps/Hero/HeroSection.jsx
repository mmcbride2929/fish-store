import HeroContent from './HeroContent'
import HeroText from './HeroText'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <Section>
      <HeroText />
      <HeroContent />
    </Section>
  )
}

export default HeroSection

const Section = styled.section`
  height: auto;
  padding: 10px;
  background-color: #e8e8e8;
  margin: 0px 15px;
  margin-bottom: 20px;
  background: #006198;
`
