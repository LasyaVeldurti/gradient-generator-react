import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  TextElement,
  ButtonContainer,
  ColorPickerInputOne,
  ColorPickerInputTwo,
  InputContainer,
  ColorText,
  ColorDisplayInput,
  CustomButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    gradientDirectionInput: '',
    firstColor: '#8ae323',
    secondColor: '#014f7b ',
    gradientDirection: gradientDirectionsList[0].value,
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onClickDirection = value => {
    this.setState({gradientDirectionInput: value})
  }

  generateGradient = () => {
    const {
      firstColorInput,
      secondColorInput,
      gradientDirectionInput,
    } = this.state

    this.setState({
      firstColor: firstColorInput,
      secondColor: secondColorInput,
      gradientDirection: gradientDirectionInput,
    })
  }

  render() {
    const {
      firstColorInput,
      secondColorInput,
      firstColor,
      secondColor,
      gradientDirection,
      gradientDirectionInput,
    } = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientDirection={gradientDirection}
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <TextElement>Choose Direction</TextElement>
        <ButtonContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientDetails={eachItem}
              onClickDirection={this.onClickDirection}
              gradientDirectionInput={gradientDirectionInput}
            />
          ))}
        </ButtonContainer>
        <TextElement>Pick the Colors</TextElement>
        <InputContainer>
          <ColorDisplayInput>
            <ColorText> {firstColorInput} </ColorText>
            <ColorPickerInputOne
              value={firstColorInput}
              onChange={this.onChangeFirstColor}
              type="color"
              backgroundColor={firstColorInput}
            />
          </ColorDisplayInput>

          <ColorDisplayInput>
            <ColorText> {secondColorInput} </ColorText>
            <ColorPickerInputTwo
              value={secondColorInput}
              onChange={this.onChangeSecondColor}
              type="color"
              backgroundColor={secondColorInput}
            />
          </ColorDisplayInput>
        </InputContainer>
        <CustomButton onClick={this.generateGradient} type="button">
          Generate
        </CustomButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
