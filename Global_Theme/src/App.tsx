import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/Header'
import { GlobalStyle } from './global'
import Light from './Themes/Light'

export function App() {
  return (
    <>
      <ThemeProvider theme={Light}>
        <GlobalStyle />
        <Header />
        <p>begin</p>
      </ThemeProvider>
    </>
  )
}
