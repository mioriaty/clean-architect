import { LayerEntity } from '@/domain/entities/Layer'
import { layerService } from '@/infrastructure/services/layer.service'

export const deleteLayerUserCase = (layers: LayerEntity[], layerId: string) => {
  return layerService.deleteLayerItem(layers, layerId)
}
