import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 100px 1fr;

  main {
    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      max-width: 720px;
      width: 100%;

      text-align: center;
      font-weight: 300;
      font-size: 2rem;
    }

    .box__options {
      margin-top: 32px;
      max-width: 300px;
      width: 100%;

      display: flex;
      justify-content: space-around;

      button {
        background: #455a64;
        color: #fff;

        :hover {
          background: #37474f;
        }
      }
    }
  }
`
