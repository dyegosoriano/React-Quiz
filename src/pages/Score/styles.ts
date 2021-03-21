import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 100px 1fr 100px;

  ul {
    height: calc(100vh - 200px);
    overflow-y: scroll;

    li {
      max-width: 720px;
      width: 100%;
      list-style-type: none;
      text-align: justify;
      font-size: 1.2rem;
      font-weight: 300;
      margin: 32px auto;
      padding: 0 16px;

      svg {
        margin-right: 6px;
        position: relative;
        top: 6px;
      }
    }
  }
`
