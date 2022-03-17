import styled from 'styled-components'

// Colors
import colors from 'styles/colors'

// Enums && Interfaces
import Ports from 'enums/ports'
import IPort from 'interfaces/port'

export const ContactContainer = styled.div<IPort>`
  width: 100%;

  margin-top: ${props => (props.port === Ports.SMALL_SIZE ? '80px' : '150px')};

  display: flex;
  flex-wrap: wrap;

  box-shadow: 0 0 5px 1px ${colors.lightGray};
`
