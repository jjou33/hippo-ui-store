/* eslint-disable @typescript-eslint/no-empty-interface */

import '@emotion/react'
import type { Theme as CdsTheme } from '@/styles/Provider'

declare module '@emotion/react' {
  export interface Theme extends CdsTheme {}
}
