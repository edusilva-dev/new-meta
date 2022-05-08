import styled from 'styled-components'

// Animations
import { Appear, FadeIn } from 'styles/animations'

// Colors
import colors from 'styles/colors'

export const SloganContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(statics/bg_1.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  transform: scale(1.1);

  opacity: 0;
  animation: ${Appear} 1.5s ease forwards;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.7) 80%);
  }

  @media screen and (min-width: 1011px) {
    background-position-y: -100px;
  }

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
  color: ${colors.white};
  text-shadow: 0 0 7px ${colors.black};

  opacity: 0;
  transform: translateY(100px);

  animation: ${FadeIn} 1.2s 500ms ease forwards;

  @media screen and (min-width: 539px) {
    margin-top: 25px;
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
  color: ${colors.white};
  text-shadow: 0 0 2px ${colors.black};

  margin-top: -10px;

  opacity: 0;
  transform: translateY(20px);

  animation: ${FadeIn} 1.5s 1.2s ease forwards;

  & mark {
    background: linear-gradient(
      -100deg,
      hsla(201, 90%, 64%, 1),
      hsla(201, 90%, 64%, 1) 50%,
      hsla(201, 90%, 64%, 1)
    );
    border-radius: 1em 0;
    padding: 0.5rem;

    color: ${colors.white};
    font-weight: 600;
    text-shadow: none;
  }

  @media screen and (max-width: 1010px) and (min-width: 539px) {
    font-size: 32px;
  }

  @media screen and (max-width: 539px) {
    font-size: 28px;

    margin-top: 10px;
  }
`
