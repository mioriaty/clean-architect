import { LayerEntity } from '@/domain/entities/Layer'

export const deleteLayerUserCase = (layers: LayerEntity[], layerId: string) => {
  return layers.filter((layer) => layer.id !== layerId)
}
