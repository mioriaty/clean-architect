import { LayerEntity } from '@/domain/entities/layer.entity'
import { LayerRepository } from '@/domain/repositories/layer.repository'

export const deleteLayerUserCase = (
  layerService: LayerRepository,
  layers: LayerEntity[],
  id: string
) => {
  return layerService.deleteLayerItem(layers, id)
}
