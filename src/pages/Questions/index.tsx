import React from 'react'

import { Container } from './styles'

export default function Questions(): JSX.Element {
  return (
    <Container>
      <header>
        <h1>General Knowledge</h1>
      </header>

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
