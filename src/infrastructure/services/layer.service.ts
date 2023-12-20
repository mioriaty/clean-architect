import { BoxShadowEntity } from '@/domain/entities/box-shadow.enitity'
import { LayerEntity } from '@/domain/entities/layer.entity'
import { LayerRepository } from '@/domain/repositories/layer.repository'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { reorder } from '@/presentation/utils/reorder'
import { v4 } from 'uuid'

class LayerService implements LayerRepository {
  createLayerItem(): LayerEntity {
    return {
      ...defaultLayerItem,
      id: v4(),
    }
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
  sortLayerItem(
    layers: LayerEntity[],
    sourceIndex: number,
    destinationIndex: number
  ): LayerEntity[] {
    return reorder(layers, sourceIndex, destinationIndex)
  }
}

export const layerService = new LayerService()
