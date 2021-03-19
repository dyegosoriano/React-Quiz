import React from 'react'

import { Container } from './styles'

import Header from 'components/Header'

export default function Questions(): JSX.Element {
  return (
    <Container>
      <Header title="General Knowledge" />

      <main>
        <span>
          The surface area of Russia is slightly larger than that of the dwarf
          planet Pluto.
        </span>

        <div className="box__options">
          <button>TRUE</button>
          <button>FALSE</button>
        </div>
      </main>
    </Container>
  )
}
