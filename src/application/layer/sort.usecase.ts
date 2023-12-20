import { LayerEntity } from '@/domain/entities/layer.entity'
import { layerService } from '@/infrastructure/services/layer.service'

export const sortLayersUserCase = (
  layers: LayerEntity[],
  sourceIndex: number,
  destinationIndex: number
) => {
  return layerService.sortLayerItem(layers, sourceIndex, destinationIndex)
}
