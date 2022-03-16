import styled from 'styled-components'
import { FadeIn } from 'styles/animations'
import colors from 'styles/colors'

interface ICardContainerProps {
  index: number
}

export const CardContainer = styled.div<ICardContainerProps>`
  width: 270px;
  height: 270px;

  padding: 25px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${colors.white};

  border: 1px solid ${colors.lightGray};
  border-radius: 10px;

  box-shadow: 0 0 20px 2px ${colors.lightGray};

  opacity: 0;
  transform: translateY(100px);

  animation: ${FadeIn} 1.2s ${props => props.index * 0.5}s ease forwards;

  transition: all 0.2s ease;

  &:not(:first-child) {
    margin-left: 50px;
  }

  &:hover {
    box-shadow: none;

    border-color: ${colors.lightBlue};
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;

  display: flex;
  align-items: center;

  > svg {
    width: 18px;
    height: 18px;

    margin-right: 10px;
  }
`

export const Description = styled.p`
  color: ${colors.darkGray};
  font-size: 16px;
  text-align: center;

  margin-top: 15px;
`
