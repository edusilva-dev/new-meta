import styled from 'styled-components'

// Animations
import { FadeIn } from 'styles/animations'

// Colors
import colors from 'styles/colors'

// Enums && Interfaces
import Ports from 'enums/ports'
import IPort from 'interfaces/port'

export const SloganContainer = styled.div<IPort>`
  width: 100%;

  ${props =>
    props.port === Ports.SMALL_SIZE &&
    `
    padding: 0 25px;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1<IPort>`
  font-size: ${props => (props.port === Ports.SMALL_SIZE ? '42px' : '56px')};
  font-weight: 600;
  text-align: center;
  color: ${colors.lightBlue};

  opacity: 0;
  transform: translateY(100px);

  animation: ${FadeIn} 1.5s ease forwards;
`

export const SloganText = styled.h2<IPort>`
  font-size: ${props => (props.port === Ports.SMALL_SIZE ? '38px' : '56px')};
  font-weight: 400;
  text-align: center;

  margin-top: 20px;

  opacity: 0;
  transform: translateY(20px);

  animation: ${FadeIn} 1.5s 500ms ease forwards;
`
