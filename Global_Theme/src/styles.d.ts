import 'styled-components'
import { ThemeType } from './Themes/Themes'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
