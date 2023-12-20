import { createLayerUserCase } from '../create.usecase'

describe('createLayerUserCase', () => {
  it('should call createLayerItem method of layerService', () => {
    // Arrange
    const layerService = {
      createLayerItem: jest.fn(),
    } as any

    // Act
    createLayerUserCase(layerService)

    // Assert
    expect(layerService.createLayerItem).toHaveBeenCalled()
  })
})
