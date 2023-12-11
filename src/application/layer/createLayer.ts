import { LayerRepository } from '@/domain/repositories/Layer'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'

export const createLayerUserCase: LayerRepository['createLayerItem'] = () => {
  return defaultLayerItem
}
