import { Interpolation, Theme } from '@emotion/react'
import { ReactNode } from 'react'

export interface BoxProps {
  label: string
  children: ReactNode
  css?: Interpolation<Theme>
  labelCss?: Interpolation<Theme>
}
