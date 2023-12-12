import { BoxShadowEntity } from '@/domain/entities/BoxShadow'
import { LayerEntity } from '@/domain/entities/Layer'
import { LayerRepository } from '@/domain/repositories/Layer'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'

class LayerService implements LayerRepository {
  getLayerItem(layers: LayerEntity[], id: string): LayerEntity | null {
    return layers.find((layer) => layer.id === id) || null
  }
  createLayerItem(): LayerEntity {
    return defaultLayerItem
  }
  updateLayerItem(
    layers: LayerEntity[],
    id: string,
    settings: Partial<BoxShadowEntity>
  ): LayerEntity[] {
    return layers.map((layer) => {
      if (layer.id === id) {
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
  deleteLayerItem(layers: LayerEntity[], id: string): LayerEntity[] {
    return layers.filter((layer) => layer.id !== id)
  }
}

export const layerService = new LayerService()
