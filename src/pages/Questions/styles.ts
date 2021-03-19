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
      font-size: 2rem;
      text-align: center;
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
