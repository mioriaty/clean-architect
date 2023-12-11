import { Theme, css } from '@emotion/react'

export const slider = css

export const range = ({ colors }: Theme) => css`
  input::-moz-range-progress {
    background: ${colors.primary}; //this progress background is only shown on Firefox
  }

  input::-moz-range-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    background: ${colors.primary};
    border: 1px solid ${colors.primary};
    cursor: pointer;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    background: ${colors.primary};
    border: 1px solid ${colors.primary};
    cursor: pointer;
  }

  input {
    appearance: none;
    width: 100%;
    height: 4px;
    background-color: ${colors.gray3};
    border-radius: 4px;
    outline: none;
    border: none;
    z-index: 2222;
  }
`

export const sliderValue = ({ colors }: Theme) => css`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    height: 45px;
    width: 45px;
    transform: translateX(-70%) scale(0);
    font-weight: 500;
    top: -40px;
    line-height: 55px;
    z-index: 2;
    color: ${colors.light};
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out;
  }

  span::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: ${colors.primary};
    border: 3px solid ${colors.light};
    z-index: -1;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-bottom-left-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
`

export const show = css`
  transform: translateX(-70%) scale(1);
`

export const field = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`
export const value = ({ colors }: Theme) => css`
  position: absolute;
  font-size: 18px;
  color: ${colors.primary};
  font-weight: 600;
`

export const left = css`
  left: -22px;
`
export const right = css`
  right: -43px;
`
