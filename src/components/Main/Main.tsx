import React, { FC, useEffect, useRef } from 'react'

// Styled Components
import { MainContainer } from './styles'

interface IMainProps {
  setScrollPosition: Function
}

const Main: FC<IMainProps> = ({ setScrollPosition, children }) => {
  const mainRef = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    mainRef.current?.addEventListener('scroll', () => {
      setScrollPosition(mainRef.current.scrollTop)
    })
  }, [])

  return (
    <MainContainer id="home" ref={mainRef}>
      {children}
    </MainContainer>
  )
}

export default Main
