import { COLOR, ColorSet } from '@constants/color'

import { ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'
import Global from '@/styles/Global'

interface CdsProviderProps {
  themeColor?: Partial<ColorSet>
  children: ReactNode
}

export interface Theme {
  color: ColorSet
}

const Provider = ({ themeColor, children }: CdsProviderProps) => {
  const color = {
    ...COLOR,
    ...themeColor,
  }

  return (
    <>
      <Global />
      <ThemeProvider theme={{ color }}>{children}</ThemeProvider>
    </>
  )
}

export default Provider
