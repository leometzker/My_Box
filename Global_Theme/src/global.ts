import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0 auto;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
    display: flex;
    justify-content: center;
    

    h1 {
      font-size: 2.5rem;
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
  }
 `
