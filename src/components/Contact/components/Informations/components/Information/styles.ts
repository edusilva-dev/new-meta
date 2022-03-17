import styled from 'styled-components'

// Colors
import colors from 'styles/colors'

// Enums && Interfaces
import Ports from 'enums/ports'
import IPort from 'interfaces/port'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 25px;

  & svg {
    width: 20px;
    height: 20px;

    margin-right: 10px;
  }
`

export const Text = styled.span<IPort>`
  ${props => props.port === Ports.SMALL_SIZE && 'width: 100%;'}

  color: ${colors.white};
  font-size: ${props => (props.port === Ports.SMALL_SIZE ? '9px' : '16px')};

  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 5px;
  }

  &:first-child {
    font-size: ${props => (props.port === Ports.SMALL_SIZE ? '14px' : '18px')};
    font-weight: 500;
  }

  & svg {
    width: 15px;
    height: 15px;
  }
`
