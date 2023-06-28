// Write your code here
import {DirectionButton, ListContainer} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, onClickDirection, gradientDirectionInput} = props
  const {displayText, value} = gradientDetails
  const changeDirection = () => {
    onClickDirection(value)
  }
  return (
    <ListContainer>
      <DirectionButton
        active={gradientDirectionInput}
        onClick={changeDirection}
        type="button"
      >
        {displayText}
      </DirectionButton>
    </ListContainer>
  )
}

export default GradientDirectionItem
