import styled from 'styled-components'
import Context from '../../Context/Context'
import { useContext } from 'react'

const FishToggle = () => {
  const { saltWater, handleToggle } = useContext(Context)

  return (
    <ButtonContainer>
      <button onClick={handleToggle} className={saltWater ? 'active' : ''}>
        Salt
      </button>
      <button onClick={handleToggle} className={!saltWater ? 'active' : ''}>
        Fresh
      </button>
    </ButtonContainer>
  )
}

export default FishToggle

const ButtonContainer = styled.div`
  display: flex;

  button {
    margin: 5px;
    height: 30px;
    width: 60px;
    border: 1px solid #00334e;
    border-radius: 5px;
    background-color: #00334e#e8e8e8;
    color: #00334e;

    :hover {
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }

  .active {
    border: 1px solid #e8e8e8;
    background-color: #00334e;
    color: #e8e8e8;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`
