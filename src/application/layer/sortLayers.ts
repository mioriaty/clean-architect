import { LayerEntity } from '@/domain/entities/Layer'
import { layerService } from '@/infrastructure/services/layer.service'

export const sortLayersUserCase = (
  layers: LayerEntity[],
  sourceIndex: number,
  destinationIndex: number
) => {
  return layerService.sortLayerItem(layers, sourceIndex, destinationIndex)
}
