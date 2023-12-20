import { LayerItemProps } from '@/presentation/components/layer-item/types'
import { FC } from 'react'
import * as styles from './styles'

export const LayerItem: FC<LayerItemProps> = ({
  name,
  onClick,
  onRemove,
  selected,
}) => {
  return (
    <div
      className={`layer-item ${selected ? 'selected' : ''}`}
      css={styles.container(selected)}
      onClick={onClick}
    >
      <div className="layer-item__name">{name}</div>
      <div>
        <div className="layer-item__remove" onClick={onRemove} css={styles.clear}>
          x
        </div>
      </div>
    </div>
  )
}
