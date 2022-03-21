import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import tema from '../themes.json'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu';
    color: ${tema.fontColor};
  }
  body{
    height: 100vh;
  }
  @font-face {
    font-family: 'Fontinha';
    src: url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    font-weight: 400;
    font-style: normal;
  }

  ::-webkit-scrollbar {
      width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: #dddddd;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #010101;
  }
  ::-webkit-scrollbar-thumb:hover {
      border: 1px solid white;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
