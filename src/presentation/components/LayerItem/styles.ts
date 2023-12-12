import { Theme, css } from '@emotion/react'

export const container =
  (active: boolean) =>
  ({ colors }: Theme) => css`
    display: flex;
    background-color: ${active ? colors.gray3 : colors.light};
    padding: 8px;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    &:hover {
      background-color: ${colors.gray3};
    }
  `

export const clear = ({ colors,fonts }: Theme) => css`
  color: red;
  background-color: ${colors.gray1};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.secondary};
`
