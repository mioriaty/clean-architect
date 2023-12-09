import { LayerEntity } from '@/domain/entities/Layer'

export interface LayerRepository {
  getLayerItems(): LayerEntity[]
  getLayerItem(id: string): LayerEntity
  createLayerItem(layerItem: LayerEntity): LayerEntity
  updateLayerItem(layerItem: LayerEntity): LayerEntity
  deleteLayerItem(id: string): void
}
