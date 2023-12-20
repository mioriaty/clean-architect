import { BoxProps } from '@/presentation/components/box/types'
import { FC } from 'react'
import * as styles from './styles'

export const Box: FC<BoxProps> = ({ children, label, containerCss: css, labelCss }) => {
  return (
    <div css={[styles.container, css]}>
      <p css={[styles.label, labelCss]}>{label}</p>
      {children}
    </div>
  )
}
