import { BoxShadowEntity } from '@/domain/entities/BoxShadow'
import { LayerEntity } from '@/domain/entities/Layer'
import { layerService } from '@/infrastructure/services/layer.service'

export const updateLayerUserCase = (
  layers: LayerEntity[],
  layerId: string,
  settings: Partial<BoxShadowEntity>
) => {
  return layerService.updateLayerItem(layers, layerId, settings)
}
