import styled from 'styled-components'
import colors from 'styles/colors'

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 75px;

  margin-top: 20px;
  padding: 10px;

  background-color: ${colors.white};

  border: 2px solid ${colors.gray};
  border-radius: 6px;

  box-shadow: 0 0 5px 1px ${colors.lightGray};

  resize: none;

  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${colors.black};
  }
`
