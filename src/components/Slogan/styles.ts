import styled from 'styled-components'

// Animations
import { FadeIn } from 'styles/animations'

// Colors
import colors from 'styles/colors'

export const SloganContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1010px) and (min-width: 539px) {
    padding: 0 25px;
  }

  @media screen and (max-width: 539px) {
    padding: 0 25px;
  }
`

export const Title = styled.h1`
  font-size: 96px;
  font-weight: 500;
  text-align: center;
  color: ${colors.black};

  opacity: 0;
  transform: translateY(100px);

  animation: ${FadeIn} 1.5s ease forwards;

  @media screen and (min-width: 539px) {
    margin-top: 100px;
  }

  @media screen and (max-width: 1010px) and (min-width: 539px) {
    font-size: 58px;
  }

  @media screen and (max-width: 539px) {
    margin-top: 50px;
    font-size: 32px;
  }
`

export const SloganText = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  color: ${colors.lightBlue};

  margin-top: -10px;

  opacity: 0;
  transform: translateY(20px);

  animation: ${FadeIn} 1.5s 500ms ease forwards;

  @media screen and (max-width: 1010px) and (min-width: 539px) {
    font-size: 32px;
  }

  @media screen and (max-width: 539px) {
    font-size: 28px;

    margin-top: 10px;
  }
`
