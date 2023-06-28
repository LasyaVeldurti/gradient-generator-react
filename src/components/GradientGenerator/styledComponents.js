// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.gradientDirection},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  color: #ffffff;
  font-family: roboto;
`

export const Heading = styled.h1``

export const TextElement = styled.p``

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
`
export const InputContainer = styled.div`
  display: flex;
`
export const ColorPickerInputOne = styled.input`
  padding: 12px;
  margin: 12px;
  background-color: ${props => props.backgroundColor};
  border-style: none;
`
export const ColorPickerInputTwo = styled.input`
  padding: 12px;
  margin: 12px;
  background-color: ${props => props.backgroundColor};
  border-style: none;
`

export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const ColorText = styled.p`
  color: #ffffff;
`
export const ColorDisplayInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`
