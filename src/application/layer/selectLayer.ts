import { LayerEntity } from '@/domain/entities/Layer'
import { layerService } from '@/infrastructure/services/layer.service'

export const selectLayerUserCase = (layers: LayerEntity[], layerId: string) => {
  return layerService.getLayerItem(layers, layerId)
}
