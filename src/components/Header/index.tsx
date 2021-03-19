import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface headerProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

const Header: React.FC<headerProps> = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
)

export default Header
