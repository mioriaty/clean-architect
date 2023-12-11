import { LayerEntity } from '@/domain/entities/Layer'
import { LayerRepository } from '@/domain/repositories/Layer'

export const selectLayerUserCase: LayerRepository['getLayerItem'] = (layers: LayerEntity[], layerId: string) => {
  return layers.find((layer) => layer.id === layerId) || null
}
