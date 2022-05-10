import styled from 'styled-components'

// Animations
import { PullRight } from 'styles/animations'

// Colors
import colors from 'styles/colors'

export const ToastContainer = styled.div`
  width: 300px;
  height: fit-content;

  display: flex;
  align-items: center;

  padding: 10px;

  border: 1px solid ${colors.green};
  border-radius: 10px;

  background-color: ${colors.white};

  transform: translateX(420px);

  position: fixed;
  top: 80px;
  right: 30px;

  cursor: pointer;

  z-index: 100;

  animation: ${PullRight(420)} 1s ease forwards;

  > svg {
    width: 20px;
    height: 20px;
    fill: ${colors.green};

    margin-right: 10px;
  }

  @media screen and (max-width: 539px) {
    right: 10px;
  }
`
