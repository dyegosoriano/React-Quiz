import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

  body {
    background-color: #f0f0f0;
    height: 100vh;
    width: 100vw;

    -webkit-font-smoothing: antialised;
  }

  body, input, button, textarea {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    border-radius: 4px;
    padding: 8px;
    border: none;

    background: #ff6f00;
    color: #fff;

    cursor: pointer;
  }
}
`
