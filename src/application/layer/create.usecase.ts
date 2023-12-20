import { LayerRepository } from '@/domain/repositories/layer.repository'

export const createLayerUserCase = (layerService: LayerRepository) => {
  return layerService.createLayerItem()
}
