import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      text-align: center;
    }

    .box__options {
      margin-top: 16px;
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
