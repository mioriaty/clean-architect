import { BoxShadowEntity } from '@/domain/entities/BoxShadow'
import { LayerEntity } from '@/domain/entities/Layer'

export interface LayerRepository {
  getLayerItem(layers: LayerEntity[], id: string): LayerEntity | null
  createLayerItem(): LayerEntity
  updateLayerItem(
    layers: LayerEntity[],
    id: string,
    settings: Partial<BoxShadowEntity>
  ): LayerEntity[]
  deleteLayerItem(layers: LayerEntity[], id: string): LayerEntity[]
}
