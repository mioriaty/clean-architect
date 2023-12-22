import { defaultLayerItem } from '../../../infrastructure/data/layer.data'
import { createLayerUserCase } from '../create.usecase'

describe('createLayerUserCase', () => {
  it('should return a new layer item with a unique ID', () => {
    const layerItem = createLayerUserCase()

    // You can also add more assertions to validate the other properties of the layer item
    expect(layerItem).to.have.property('id')
    expect(layerItem).to.have.property('label')
    expect(layerItem).to.have.property('settings')

    // You can also assert specific values if needed
    expect(layerItem.label).to.equal(defaultLayerItem.label)
    expect(layerItem.settings).to.equal(defaultLayerItem.settings)
  })
})
