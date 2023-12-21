import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { createLayerUserCase } from '../create.usecase'

describe('createLayerUserCase', () => {
  it('should return a new layer item with a unique ID', () => {
    const layerItem = createLayerUserCase()

    expect(layerItem).toHaveProperty('id')
    expect(typeof layerItem.id).toBe('string')
    expect(layerItem.id).toHaveLength(36) // Assuming you are using UUID v4

    // You can also add more assertions to validate the other properties of the layer item
    expect(layerItem).toHaveProperty('id')
    expect(layerItem).toHaveProperty('label')
    expect(layerItem).toHaveProperty('settings')

    // You can also assert specific values if needed
    expect(layerItem.label).toBe(defaultLayerItem.label)
    expect(layerItem.settings).toEqual(defaultLayerItem.settings)
  })
})
