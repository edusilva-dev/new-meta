import styled from 'styled-components'

// Animations
import { PullLeft } from 'styles/animations'

// Colors
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

  @media screen and (max-width: 1010px) {
    width: 100%;
  }

  @media screen and (max-width: 539px) {
    padding: 20px 25px;
  }
`

export const Title = styled.span`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 600;
`
