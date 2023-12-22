import { LayerEntity } from '@/domain/entities/layer.entity'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { deleteLayerUserCase } from '../delete.usecase'

describe('deleteLayerUserCase', () => {
  it('should remove the layer item with the specified ID from the layers array', () => {
    const layers: LayerEntity[] = [
      { id: '1', label: 'Layer 1', settings: defaultLayerItem.settings },
      { id: '2', label: 'Layer 2', settings: defaultLayerItem.settings },
      { id: '3', label: 'Layer 3', settings: defaultLayerItem.settings },
    ]
    const idToDelete = '2'

    const updatedLayers = deleteLayerUserCase(layers, idToDelete)

    expect(updatedLayers).to.have.length(layers.length - 1)
    expect(updatedLayers.some((layer) => layer.id === idToDelete)).to.be.false
  })

  it.only('should not modify the layers array if the specified ID does not exist', () => {
    const layers: LayerEntity[] = [
      { id: '1', label: 'Layer 1', settings: defaultLayerItem.settings },
      { id: '2', label: 'Layer 2', settings: defaultLayerItem.settings },
      { id: '3', label: 'Layer 3', settings: defaultLayerItem.settings },
    ]
    const idToDelete = '4'

    const updatedLayers = deleteLayerUserCase(layers, idToDelete)

    expect(updatedLayers).to.have.length(layers.length)
    expect(updatedLayers).to.deep.equal(layers)
  })
})
