import { ColorPickerProps } from '@/presentation/components/ColorPicker/types'
import { FC } from 'react'

export const ColorPicker: FC<ColorPickerProps> = ({ color, onChange }) => {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    />
  )
}
