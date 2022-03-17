import styled from 'styled-components'

// Images
import logoImage from 'assets/images/logo.png'

export const MainContainer = styled.main`
  height: calc(100vh - 72px);

  overflow-y: auto;
  overflow-x: hidden;

  position: relative;

  &:before {
    content: '';

    position: fixed;
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;

    background-image: url(${logoImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.1;

    z-index: -1;
  }
`
