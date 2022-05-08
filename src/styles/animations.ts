import { keyframes } from 'styled-components'

export const Appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(20px);
  }
`

export const PullLeft = (from: number) => keyframes`
  from { 
    opacity: 0;
    transform: translateX(${from}px);
  }

  to { 
    opacity: 1;
    transform: translateX(0px);
  }
`

export const PullRight = (from: number) => keyframes`
  from { 
    opacity: 0;
    transform: translateX(${from}px);
  }

  to { 
    opacity: 1;
    transform: translateX(0px);
  }
`
