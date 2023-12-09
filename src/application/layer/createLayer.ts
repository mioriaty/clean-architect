import { LayerEntity } from '@/domain/entities/Layer'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'

export const createLayerUserCase = (): LayerEntity => {
  return defaultLayerItem
}
