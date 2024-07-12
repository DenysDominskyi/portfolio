import { createGlobalStyle } from 'styled-components';
import './App.css';

import { Home } from './layout/pages/home/Home';
import { Header } from './layout/header/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    body {
      font-family: "Fira Code", monospace;
      background-color: #282C33;
    }

    ul{
      list-style-type: none;
    }

    a {
      text-decoration: none;
    }

    button {
      all: unset;
      display: inline-block;
      cursor: pointer;
    }
`