import styled from 'styled-components'

// Animations
import { PullRight } from 'styles/animations'

// Colors
import colors from 'styles/colors'

export const InformationsContainer = styled.div`
  width: 50%;

  padding: 20px 35px;

  display: flex;
  flex-direction: column;

  background-color: ${colors.lightBlue};

  opacity: 0;

  &.animate {
    animation: ${PullRight(1000)} 1s ease forwards;
  }

  @media screen and (max-width: 1010px) {
    width: 100%;
  }

  @media screen and (max-width: 539px) {
    padding: 20px 25px;
  }
`

export const Title = styled.span`
  color: ${colors.white};
  font-size: 20px;
  font-weight: 600;
`
