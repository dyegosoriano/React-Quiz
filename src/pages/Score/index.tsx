import React, { useContext } from 'react'
import { MdDone, MdClear } from 'react-icons/md'
import { useHistory } from 'react-router'

import { Container } from './styles'

import { QuestionsContext } from 'context/QuestionsContext'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Score(): JSX.Element {
  const { score, answered } = useContext(QuestionsContext)
  const history = useHistory()

  return (
    <Container>
      <Header title={`You score: ${score}%`} />

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
        <button onClick={() => history.push('/')}>!START AGAIN!</button>
      </Footer>
    </Container>
  )
}
