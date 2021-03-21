import React, { useContext, useEffect, useState } from 'react'
import { MdDone, MdClear } from 'react-icons/md'
import { useHistory } from 'react-router'

import { Container } from './styles'

import { QuestionsContext } from 'context/QuestionsContext'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Score(): JSX.Element {
  const { answered, resetQuestions } = useContext(QuestionsContext)
  const history = useHistory()

  const [questionsRight, setQuestionsRight] = useState(0)

  function handleClick(): void {
    resetQuestions()
    history.push('/')
  }

  useEffect(() => {
    const hits = answered.filter(item => item.isRight).length
    const totalQuestions = answered.length

    const percentageHits = Math.floor((hits * 100) / totalQuestions)

    setQuestionsRight(percentageHits)
  }, [answered])

  return (
    <Container>
      <Header title={`You score: ${questionsRight}%`} />

      <ul>
        {answered.map(question => (
          <li key={question.question}>
            {question.isRight ? (
              <MdDone size={24} color="#1b5e20" />
            ) : (
              <MdClear size={24} color="#d50000" />
            )}
            {question.question}
          </li>
        ))}
      </ul>

      <Footer>
        <button onClick={handleClick}>!START AGAIN!</button>
      </Footer>
    </Container>
  )
}
