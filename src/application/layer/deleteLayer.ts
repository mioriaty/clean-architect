import { LayerEntity } from '@/domain/entities/Layer'
import { LayerRepository } from '@/domain/repositories/Layer'

export const deleteLayerUserCase: LayerRepository['deleteLayerItem'] = (
  layers: LayerEntity[],
  layerId: string
) => {
  return layers.filter((layer) => layer.id !== layerId)
}
