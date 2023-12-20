import { FC, useRef } from 'react'
import { createPortal } from 'react-dom'

import { createPortalWrapper } from '@/presentation/components/portal/create-portal-wrapper'
import { useOuterClick } from '@/presentation/hooks/use-click-outer'
import { PortalProps } from './types'

const portalWrapperEl = createPortalWrapper()
document.body.append(portalWrapperEl)

export const Portal: FC<PortalProps> = ({
  visible,
  bodyCss,
  containerCss,
  overlay,
  children,
  onOutsideClick,
}) => {
  const childRef = useRef<HTMLDivElement>(null)
  
  useOuterClick(
    childRef.current,
    () => {
      if (visible) {
        onOutsideClick?.()
      }
    },
    [visible]
  )

  const renderContent = (
    <div css={containerCss}>
      {overlay}
      <div ref={childRef} css={bodyCss}>
        {visible && children}
      </div>
    </div>
  )

  return createPortal(renderContent, portalWrapperEl)
}
