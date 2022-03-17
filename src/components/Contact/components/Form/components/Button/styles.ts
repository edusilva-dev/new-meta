import styled from 'styled-components'

// Colors
import colors from 'styles/colors'

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;

  margin-top: 20px;

  border: 1px solid ${colors.gray};
  border-radius: 6px;

  background-color: ${colors.lightBlue};

  color: ${colors.white};
  font-size: 18px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: grayscale(0.2);
  }

  &:active {
    opacity: 1;
    background-color: ${colors.blue};
  }
`
