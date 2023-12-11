import { Theme, css } from '@emotion/react'

export const container = ({ colors }: Theme) => css`
  border: 1px solid ${colors.gray3};
  border-radius: 4px;
  padding: 10px 12px;
`

export const label = ({ colors, fonts }: Theme) => css`
  font-size: 14px;
  color: ${colors.gray9};
  font-family: ${fonts.primary};
  margin-top: 0;
  margin-bottom: 4px;
`
