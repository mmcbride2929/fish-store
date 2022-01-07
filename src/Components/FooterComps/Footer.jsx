import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          Ocean Blue <AiOutlineCopyright /> 2022
        </p>
        <ContactLink to="/contact">Contact</ContactLink>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  position: absolute;
  height: 25px;
  width: 100%;
  bottom: 0;
`

const FooterContent = styled.div`
  font-size: 0.8rem;
  margin: 0 auto;
  width: 300px;
  display: flex;
  align-items: center;
  font-weight: 500;

  p {
    text-align: center;
    width: 150px;
  }

  svg {
    vertical-align: middle;
  }
`

const ContactLink = styled(Link)`
  text-align: center;
  width: 150px;
  font-weight: 500;
  text-decoration: none;
  color: black;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
