import { BoxProps } from '@/presentation/components/Box/types'
import { FC } from 'react'
import * as styles from './styles'

export const Box: FC<BoxProps> = ({ children, label, containerCss: css, labelCss }) => {
  return (
    <div css={[styles.container, css]}>
      <p css={[styles.label, labelCss]}>{label}</p>
      <div>{children}</div>
    </div>
  )
}
