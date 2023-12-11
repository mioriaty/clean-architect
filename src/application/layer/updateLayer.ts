import { BoxShadowEntity } from '@/domain/entities/BoxShadow'
import { LayerEntity } from '@/domain/entities/Layer'
import { LayerRepository } from '@/domain/repositories/Layer'

export const updateLayerUserCase: LayerRepository['updateLayerItem'] = (
  layers: LayerEntity[],
  layerId: string,
  settings: Partial<BoxShadowEntity>
) => {
  return layers.map((layer) => {
    if (layer.id === layerId) {
      return {
        ...layer,
        settings: {
          ...layer.settings,
          ...settings,
        },
      }
    }
    return layer
  })
}
