import React from 'react'
import { useHistory } from 'react-router'

import { Container } from './styles'

export default function Home(): JSX.Element {
  const history = useHistory()

  return (
    <Container>
      <header>
        <h1>!!!WELCOME TO QUIZ!!!</h1>
      </header>

      <main>
        <p>10 questions will be shown to you.</p>
        <p>Can you get maximum score?</p>
      </main>

      <footer>
        <button onClick={() => history.push('/questions')}>START</button>
      </footer>
    </Container>
  )
}
