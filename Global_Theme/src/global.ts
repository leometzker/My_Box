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
    
    ul {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    li {
      font-size: 1rem;
      margin: 1.5rem;
    }
  }
 `
