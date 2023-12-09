import { LayerEntity } from '@/domain/entities/Layer'

export const selectLayerUserCase = (layers: LayerEntity[], layerId: string) => {
  return layers.find((layer) => layer.id === layerId) || null
}
