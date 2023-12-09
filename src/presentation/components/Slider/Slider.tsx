import { SliderProps } from '@/presentation/components/Slider/types';
import { FC } from 'react';
import * as styles from './styles';

export const Slider: FC<SliderProps> = ({
  onChange,
  value,
  max = 100,
  min = 0,
  step = 1,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value))
  }

  return (
    <input
      type="range"
      onChange={handleChange}
      value={value}
      max={max}
      min={min}
      step={step}
      css={styles.slider}
    />
  )
}
