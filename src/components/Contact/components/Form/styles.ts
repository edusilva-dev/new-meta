import styled from 'styled-components'

// Animations
import { PullLeft } from 'styles/animations'

// Colors
import colors from 'styles/colors'

// Enums && Interfaces
import Ports from 'enums/ports'
import IPort from 'interfaces/port'

export const FormContainer = styled.form<IPort>`
  width: ${props => (props.port === Ports.SMALL_SIZE ? '100%' : '50%')};
  height: fit-content;

  padding: ${props => (props.port === Ports.SMALL_SIZE ? '20px 25px' : '20px 35px')};

  background-color: ${colors.white};

  opacity: 0;
  transform: translateX(-1000px);

  &.animate {
    animation: ${PullLeft(-1000)} 1s ease forwards;
  }
`

export const Title = styled.span`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 600;
`
