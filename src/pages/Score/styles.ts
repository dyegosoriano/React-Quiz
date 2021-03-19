import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 100px 1fr 100px;

  ul {
    max-height: calc(100vh - 200px);
    overflow-y: scroll;

    li {
      margin: 0 16px 16px 16px;
      list-style-type: none;
      text-align: justify;

      svg {
        margin-right: 6px;
        position: relative;
        top: 6px;
      }
    }
  }
`
