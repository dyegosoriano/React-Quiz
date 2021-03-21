import React, { createContext, useEffect, useState } from 'react'

import api from 'services/api'

interface ContextInterface {
  handleResolvedQuestions: (indexQuestion: number, isRight: boolean) => void
  questions: QuestionsInterface[]
  answered: AnsweredInterface[]
  score: number
}

interface QuestionsInterface {
  correct_answer: string
  difficulty: string
  question: string
  category: string
}

interface AnsweredInterface {
  question: string
  isRight: boolean
}

export const QuestionsContext = createContext<ContextInterface>(
  {} as ContextInterface
)

export const QuestionsProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionsInterface[]>([])
  const [answered, setAnswered] = useState<AnsweredInterface[]>([])
  const [score, setScore] = useState(0)

  async function getQuestions(): Promise<void> {
    try {
      const response = await api.get(
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
      )

      setQuestions(response.data.results)
    } catch (error) {
      console.log(error.message)
      alert('Ocorreu um erro ao carregar os dados da API.')
    }
  }

  function handleResolvedQuestions(
    indexQuestion: number,
    isRight: boolean
  ): void {
    const currentQuestion = questions[indexQuestion]

    const newAnswered = {
      isRight: (currentQuestion.correct_answer === 'True') === isRight,
      question: currentQuestion.question
    }

    setAnswered([...answered, newAnswered])
  }

  useEffect(() => {
    getQuestions()
    setScore(17)
  }, [])

  return (
    <QuestionsContext.Provider
      value={{
        handleResolvedQuestions,
        questions,
        answered,
        score
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}
