import React, { createContext, useEffect, useState } from 'react'
import api from 'services/api'

interface contextInterface {
  questions: questionsInterface[]
  score: number
}

interface questionsInterface {
  correct_answer: string
  difficulty: string
  question: string
  category: string
}

export const QuestionsContext = createContext<contextInterface>(
  {} as contextInterface
)

export const QuestionsProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<questionsInterface[]>([])
  const [score, setScore] = useState<number>(0)

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

  useEffect(() => {
    getQuestions()
    setScore(17)
  }, [])

  return (
    <QuestionsContext.Provider value={{ questions, score }}>
      {children}
    </QuestionsContext.Provider>
  )
}
