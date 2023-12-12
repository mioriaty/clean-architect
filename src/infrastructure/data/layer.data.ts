import { BoxShadowEntity } from '@/domain/entities/BoxShadow'
import { LayerEntity } from '@/domain/entities/Layer'

const defaultBoxShadow: BoxShadowEntity = {
  inset: false,
  offsetX: 3,
  offsetY: 3,
  blurRadius: 1,
  spreadRadius: 1,
  color: 'rgba(0, 0, 0, 0.5)',
}


export const DEFAULT_LAYER_ID = 'default_layer_id'

export const defaultLayerItem: LayerEntity = {
  id: 'default_layer_id',
  label: defaultBoxShadow.color,
  settings: defaultBoxShadow,
}
