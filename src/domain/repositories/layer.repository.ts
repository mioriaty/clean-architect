import { BoxShadowEntity } from '@/domain/entities/box-shadow.enitity'
import { LayerEntity } from '@/domain/entities/layer.entity'

export interface LayerRepository {
  createLayerItem(): LayerEntity
  updateLayerItem(
    layers: LayerEntity[],
    id: string,
    settings: Partial<BoxShadowEntity>
  ): LayerEntity[]
  deleteLayerItem(layers: LayerEntity[], id: string): LayerEntity[]
  sortLayerItem(layers: LayerEntity[], sourceIndex: number, destinationIndex: number): LayerEntity[]
}
