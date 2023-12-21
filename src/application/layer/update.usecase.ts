import { LayerRepository } from '@/domain/repositories/layer.repository'

export const updateLayerUserCase: LayerRepository['updateLayerItem'] = (
  layers,
  layerId,
  settings
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
