import { LayerEntity } from '@/domain/entities/layer.entity'
import { LayerRepository } from '@/domain/repositories/layer.repository'
import { reorder } from '@/presentation/utils/reorder'

export const sortLayersUserCase: LayerRepository['sortLayerItem'] = (
  layers: LayerEntity[],
  sourceIndex: number,
  destinationIndex: number
) => {
  return reorder(layers, sourceIndex, destinationIndex)
}
