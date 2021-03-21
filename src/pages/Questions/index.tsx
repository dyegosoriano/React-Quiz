import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'

import { Container } from './styles'

import { QuestionsContext } from 'context/QuestionsContext'
import Header from 'components/Header'

export default function Questions(): JSX.Element {
  const { questions } = useContext(QuestionsContext)
  const history = useHistory()

  const [counter, setCounter] = useState(0)

  function handleNextQuestion(): void {
    if (counter < questions.length - 1) {
      setCounter(counter + 1)
    } else {
      history.push('/score')
    }
  }

  return (
    <Container>
      <Header title="General Knowledge" />

      <main>
        <span>{questions[counter].question}</span>

        <div className="box__options">
          <button onClick={handleNextQuestion}>TRUE</button>
          <button onClick={handleNextQuestion}>FALSE</button>
        </div>
      </main>
    </Container>
  )
}
