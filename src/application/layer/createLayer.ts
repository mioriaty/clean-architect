import { layerService } from '@/infrastructure/services/layer.service'

export const createLayerUserCase = () => {
  return layerService.createLayerItem()
}
