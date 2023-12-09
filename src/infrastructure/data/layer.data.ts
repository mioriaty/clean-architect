import { BoxShadowEntity } from '@/domain/entities/BoxShadow'
import { LayerEntity } from '@/domain/entities/Layer'
import { v4 } from 'uuid'

const defaultBoxShadow: BoxShadowEntity = {
  inset: false,
  offsetX: 0,
  offsetY: 0,
  blurRadius: 0,
  spreadRadius: 0,
  color: 'rgba(0, 0, 0, 0.5)',
}

export const defaultLayerItem: LayerEntity = {
  id: v4(),
  label: defaultBoxShadow.color,
  settings: defaultBoxShadow,
}
