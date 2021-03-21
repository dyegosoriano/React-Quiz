import React, { useContext } from 'react'
import { MdDone, MdClear } from 'react-icons/md'
import { useHistory } from 'react-router'

import { Container } from './styles'

import { QuestionsContext } from 'context/QuestionsContext'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Score(): JSX.Element {
  const { score } = useContext(QuestionsContext)
  const history = useHistory()

  return (
    <Container>
      <Header title={`You score: ${score}`} />

      <ul>
        <li>
          <MdDone size={24} color="#1b5e20" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis
          ea velit adipisci quidem, eius similique debitis modi perferendis,
          harum deleniti consectetur vel officia dolor ullam aliquam. Nostrum,
          libero veniam?
        </li>
        <li>
          <MdClear size={24} color="#d50000" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis
          ea velit adipisci quidem, eius similique debitis modi perferendis,
          harum deleniti consectetur vel officia dolor ullam aliquam. Nostrum,
          libero veniam?
        </li>
      </ul>

      <Footer>
        <button onClick={() => history.push('/')}>!START AGAIN!</button>
      </Footer>
    </Container>
  )
}
