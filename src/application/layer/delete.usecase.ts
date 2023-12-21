import { LayerEntity } from '@/domain/entities/layer.entity'
import { LayerRepository } from '@/domain/repositories/layer.repository'

export const deleteLayerUserCase: LayerRepository['deleteLayerItem'] = (
  layers: LayerEntity[],
  id: string
) => {
  return layers.filter((layer) => layer.id !== id)
}
