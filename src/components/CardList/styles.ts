import styled from 'styled-components'

// Enums && Interfaces
import Ports from 'enums/ports'
import IPort from 'interfaces/port'

export const CardsContainer = styled.div<IPort>`
  width: 100%;

  margin-top: ${props => (props.port === Ports.SMALL_SIZE ? '20px' : '80px')};
  padding: ${props => (props.port === Ports.SMALL_SIZE ? '0 15px' : '0 30px')};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
