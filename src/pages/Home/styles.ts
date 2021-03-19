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

  header,
  footer {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: #ff6f00;
      color: #fff;

      padding: 8px;
      border: none;
      border-radius: 4px;
    }
  }
`
