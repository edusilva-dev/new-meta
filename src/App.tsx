import React, { FC, useState } from 'react'

// Components
import CardList from './components/CardList/CardList'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Slogan from './components/Slogan/Slogan'
import Toast from 'components/Toast/Toast'
import About from 'components/About/About'

const App: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [submitAnswer, setSubmitAnswer] = useState<string>('')

  return (
    <>
      <Header />

      <Main setScrollPosition={setScrollPosition}>
        {submitAnswer && <Toast message={submitAnswer} setSubmitAnswer={setSubmitAnswer} />}

        <Slogan />

        <About />

        <CardList />

        <Contact scrollPosition={scrollPosition} setSubmitAnswer={setSubmitAnswer} />

        <Footer />
      </Main>
    </>
  )
}

export default App
