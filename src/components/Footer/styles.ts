import styled from 'styled-components'
import colors from 'styles/colors'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;

  margin-top: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};

  border-top: 1px solid ${colors.lightGray};
`

export const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
`
