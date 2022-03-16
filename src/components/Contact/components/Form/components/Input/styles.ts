import styled from 'styled-components'
import colors from 'styles/colors'

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;

  padding: 0 10px;

  background-color: ${colors.white};

  border: 2px solid ${colors.gray};
  border-radius: 6px;

  box-shadow: 0 0 5px 1px ${colors.lightGray};

  transition: border-color 0.2s ease;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &:focus {
    border-color: ${colors.black};
  }
`
