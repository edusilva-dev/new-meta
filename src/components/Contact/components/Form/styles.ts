import styled from 'styled-components'
import { PullLeft } from 'styles/animations'
import colors from 'styles/colors'

export const FormContainer = styled.form`
  width: 50%;
  height: fit-content;

  padding: 20px 35px;

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
