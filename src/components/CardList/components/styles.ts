import styled from 'styled-components'

// Animations
import { FadeIn } from 'styles/animations'

// Colors
import colors from 'styles/colors'

interface ICardContainerProps {
  index: number
}

export const CardContainer = styled.div<ICardContainerProps>`
  width: calc((100% / 4) - 55px);
  height: 270px;

  padding: 25px;
  margin-top: 40px;
  margin-left: 25px;
  margin-right: 25px;

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

  &:hover {
    box-shadow: none;

    border-color: ${colors.lightBlue};
  }

  @media screen and (max-width: 1024px) and (min-width: 540px) {
    width: calc((100% / 2) - 55px);
  }

  @media screen and (max-width: 539px) {
    width: 100%;
    height: 200px;
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
  width: 100%;

  color: ${colors.darkGray};
  font-size: 16px;
  text-align: center;

  margin-top: 15px;

  & > ul {
    width: 100%;

    list-style-type: none;
  }

  & > ul > li {
    text-align: left;

    margin-left: 15px;

    position: relative;
  }

  & > ul > li::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -15px;

    width: 5px;
    height: 5px;
    border-radius: 100%;

    background-color: ${colors.darkGray};
  }

  & > ul > li:not(:first-child) {
    margin-top: 10px;
  }
`
