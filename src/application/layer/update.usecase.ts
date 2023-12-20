import { BoxShadowEntity } from '@/domain/entities/box-shadow.enitity'
import { LayerEntity } from '@/domain/entities/layer.entity'
import { layerService } from '@/infrastructure/services/layer.service'

export const updateLayerUserCase = (
  layers: LayerEntity[],
  layerId: string,
  settings: Partial<BoxShadowEntity>
) => {
  return layerService.updateLayerItem(layers, layerId, settings)
}
