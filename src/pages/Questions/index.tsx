import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'

import { Container } from './styles'

import { QuestionsContext } from 'context/QuestionsContext'
import Header from 'components/Header'

export default function Questions(): JSX.Element {
  const { questions, handleResolvedQuestions } = useContext(QuestionsContext)
  const history = useHistory()

  const [counter, setCounter] = useState(0)

  function handleNextQuestion(isRight = false): void {
    handleResolvedQuestions(counter, isRight)

    if (counter < questions.length - 1) {
      setCounter(counter + 1)
    } else {
      history.push('/score')
    }
  }

  return (
    <Container>
      <Header title={questions[counter].category} />

      <main>
        <p>{questions[counter].question}</p>
      </main>

      <footer>
        <button onClick={async () => handleNextQuestion(true)}>TRUE</button>
        <button onClick={async () => handleNextQuestion()}>FALSE</button>
      </footer>
    </Container>
  )
}
