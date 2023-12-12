import { SliderProps } from '@/presentation/components/Slider/types'
import { Tooltip } from '@/presentation/components/Tooltip'
import { FC, useEffect, useState } from 'react'
import * as styles from './styles'

export const Slider: FC<SliderProps> = ({
  onChange,
  value,
  max = 100,
  min = 0,
  step = 1,
}) => {
  const [rangeValue, setRangeValue] = useState(value)

  useEffect(() => {
    if (value) {
      setRangeValue(value)
    }
  }, [])

  useEffect(() => {
    onChange(rangeValue)
  }, [rangeValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(event.target.value))
  }

  return (
    <div css={styles.range}>
      <Tooltip
        text={rangeValue.toString()}
        css={{ width: '100%', display: 'block !important' }}
      >
        <input
          type="range"
          onChange={handleChange}
          value={rangeValue}
          defaultValue={rangeValue}
          max={max}
          min={min}
          step={step}
        />
      </Tooltip>
    </div>
  )
}
