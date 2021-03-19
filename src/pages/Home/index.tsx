import React from 'react'
import { useHistory } from 'react-router'

import { Container } from './styles'

import Footer from 'components/Footer'
import Header from 'components/Header'

export default function Home(): JSX.Element {
  const history = useHistory()

  return (
    <Container>
      <Header title="!!!WELCOME TO QUIZ!!!" />

      <main>
        <p>10 questions will be shown to you.</p>
        <p>Can you get maximum score?</p>
      </main>

      <Footer>
        <button onClick={() => history.push('/questions')}>START</button>
      </Footer>
    </Container>
  )
}
