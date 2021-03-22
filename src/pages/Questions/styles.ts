import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 100px 1fr 100px;

  main {
    padding: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      max-width: 720px;
      width: 100%;

      text-align: center;
      font-weight: 300;
      font-size: 2rem;
    }
  }

  footer {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
      background: #455a64;
      color: #fff;

      :hover {
        background: #37474f;
      }
    }
  }
`
