import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeroText = () => {
  return (
    <TextWrapper>
      <h1>now offering saltwater pets!</h1>
      <h2>check out our new inventory</h2>
      <Link to="/inventory">
        <span>Shop Now</span>
      </Link>
    </TextWrapper>
  )
}

export default HeroText

const TextWrapper = styled.div``
