import { LayerRepository } from '@/domain/repositories/layer.repository'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { v4 } from 'uuid'

export const createLayerUserCase: LayerRepository['createLayerItem'] = () => {
  return {
    ...defaultLayerItem,
    id: v4(),
  }
}
