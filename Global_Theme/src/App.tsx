import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ChangeButton } from './components/ChangeButton'
import { Header } from './components/Header/Header'
import { GlobalStyle } from './global'
import { useStorageTheme } from './Hook/useStorageTheme'
import Themes, { ThemeType } from './Themes/Themes'

// export const [] = useState('')

export function App() {
  const [tema, setTema] = useState(() => {
    const storageTheme = localStorage.getItem('meuTema')

    if (storageTheme) {
      return JSON.parse(storageTheme)
    } else {
      return Themes.Dark
    }
  })

  function handleChangeTheme() {
    setTema(tema.title === 'Dark' ? Themes.Light : Themes.Dark)
  }

  useEffect(() => {
    useStorageTheme('meuTema', tema)
  }, [tema])

  return (
    <>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Header />
        <h1>Alterando o tema da aplicação</h1>
        <ChangeButton handleChangeTheme={handleChangeTheme} />
      </ThemeProvider>
    </>
  )
}
