import { FC, useState } from 'react'

import { Portal } from '@/presentation/components/portal'
import { useMeasure } from '@/presentation/hooks/use-measure'
import * as styles from './styles'
import { TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = ({
  text,
  children,
  className,
  css,
  placement = 'top',
  portal,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [visible, setVisible] = useState(false)

  const { height, left, setMeasure, top, width } = useMeasure()

  if (!portal) {
    return (
      <div
        onClick={onClick}
        onMouseEnter={(event) => {
          setMeasure(event)
          setVisible(true)
          onMouseEnter?.(event)
        }}
        onMouseLeave={(event) => {
          setVisible(false)
          onMouseLeave?.(event)
        }}
        data-tooltip={text}
        css={[
          styles.container,
          styles.tooltip,
          styles.placementTooltip(placement),
          css,
        ]}
        className={className}
      >
        {children}
      </div>
    )
  }

  const renderTooltip = () => {
    if (!text) {
      return
    }
    return (
      <div
        css={[
          styles.tooltipText,
          styles.placementTooltipText(placement, top, left, width, height),
        ]}
      >
        {text}
      </div>
    )
  }

  return (
    <div
      css={[styles.container, css]}
      onClick={onClick}
      onMouseEnter={(event) => {
        setMeasure(event)
        setVisible(true)
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        setVisible(false)
        onMouseLeave?.(event)
      }}
    >
      <Portal visible={visible}>{renderTooltip()}</Portal>
      {children}
    </div>
  )
}
