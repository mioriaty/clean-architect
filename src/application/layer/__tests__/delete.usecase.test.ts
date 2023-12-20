import { LayerEntity } from '@/domain/entities/layer.entity'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { deleteLayerUserCase } from '../delete.usecase'

describe('deleteLayerUserCase', () => {
  it('should delete a layer item', () => {
    // Arrange
    const layerService = {
      deleteLayerItem: jest.fn(),
    } as any

    const layers: LayerEntity[] = [
      {
        id: '1',
        label: 'layer 1',
        settings: defaultLayerItem.settings,
      },
      {
        id: '2',
        label: 'layer 2',
        settings: defaultLayerItem.settings,
      },
    ]
    const id = '1'

    // Act
    deleteLayerUserCase(layerService, layers, id)

    // Assert
    expect(layerService.deleteLayerItem).toHaveBeenCalledWith(layers, id)
  })
})
