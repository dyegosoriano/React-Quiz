import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'

import { QuestionsProvider } from 'context/QuestionsContext'
import Routes from './routes'

const App = (): JSX.Element => (
  <>
    <QuestionsProvider>
      <Router>
        <Routes />
      </Router>
    </QuestionsProvider>

    <GlobalStyle />
  </>
)

export default App
