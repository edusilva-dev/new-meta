import styled from 'styled-components'

// Colors
import colors from 'styles/colors'

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

export const Text = styled.span`
  color: ${colors.white};
  font-size: 16px;

  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 5px;
  }

  &:first-child {
    font-size: 18px;
    font-weight: 500;
  }

  & svg {
    width: 15px;
    height: 15px;
  }

  @media screen and (max-width: 539px) {
    width: 100%;

    &:not(:first-child) {
      font-size: 9px;
    }
  }
`
