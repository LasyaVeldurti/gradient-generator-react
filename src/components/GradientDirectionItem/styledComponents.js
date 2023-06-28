// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  padding: 10px;
  margin: 12px;
  font-size: 16px;
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  outline: none;
  opacity: ${props => (props.gradientDirectionInput ? 1 : 0.5)};
`
export const ListContainer = styled.li``
