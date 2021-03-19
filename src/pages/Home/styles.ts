import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 100px 1fr 100px;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      text-align: center;
      font-size: 2rem;
    }
  }
`
