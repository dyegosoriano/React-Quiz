import React, { createContext, useEffect, useState } from 'react'

interface contextInterface {
  score: number
}

export const QuestionsContext = createContext<contextInterface>(
  {} as contextInterface
)

export const QuestionsProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState<number>(0)

  useEffect(() => setScore(17), [])

  return (
    <QuestionsContext.Provider value={{ score }}>
      {children}
    </QuestionsContext.Provider>
  )
}
