import { ChangeButtonStyle } from './styled'

interface props {
  handleChangeTheme(): void
}

export function ChangeButton({ handleChangeTheme }: props) {
  return (
    <ChangeButtonStyle onClick={handleChangeTheme}>
      Alterar tema
    </ChangeButtonStyle>
  )
}
