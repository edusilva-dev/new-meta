import styled from 'styled-components'

// Animations
import { PullRight } from 'styles/animations'

// Colors
import colors from 'styles/colors'

// Enums && Interfaces
import Ports from 'enums/ports'
import IPort from 'interfaces/port'

export const InformationsContainer = styled.div<IPort>`
  width: ${props => (props.port === Ports.SMALL_SIZE ? '100%' : '50%')};

  padding: ${props => (props.port === Ports.SMALL_SIZE ? '20px 25px' : '20px 35px')};

  display: flex;
  flex-direction: column;

  background-color: ${colors.lightBlue};

  opacity: 0;

  &.animate {
    animation: ${PullRight(1000)} 1s ease forwards;
  }
`

export const Title = styled.span`
  color: ${colors.white};
  font-size: 20px;
  font-weight: 600;
`
