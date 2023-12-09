import { Theme, css } from '@emotion/react'

export const slider = ({ colors }: Theme) => css`
  color: red;
  
  ::-webkit-slider-thumb {
    background-color: ${colors.quaternary};
  }
`
