import Toast from 'components/Toast/Toast'
import React, { FC, useState, useEffect } from 'react'
import getPort from 'utils/getPort'

// Components
import CardList from './components/CardList/CardList'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Slogan from './components/Slogan/Slogan'

const App: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [submitAnswer, setSubmitAnswer] = useState<string>('')
  const [port, setPort] = useState<string>(getPort())

  useEffect(() => {
    const handleResize = () => {
      setPort(getPort())
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Header port={port} />

      <Main setScrollPosition={setScrollPosition}>
        {submitAnswer && <Toast message={submitAnswer} setSubmitAnswer={setSubmitAnswer} />}

        <Slogan port={port} />

        <CardList port={port} />

        <Contact port={port} scrollPosition={scrollPosition} setSubmitAnswer={setSubmitAnswer} />

        <Footer />
      </Main>
    </>
  )
}

export default App
