import { LayerEntity } from '@/domain/entities/layer.entity'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { sortLayersUserCase } from '../sort.usecase'

describe('sortLayersUserCase', () => {
  it('should reorder the layers array based on the source and destination indices', () => {
    const layers: LayerEntity[] = [
      { id: '1', label: 'Layer 1', settings: defaultLayerItem.settings },
      { id: '2', label: 'Layer 2', settings: defaultLayerItem.settings },
      { id: '3', label: 'Layer 3', settings: defaultLayerItem.settings },
    ]
    const sourceIndex = 0
    const destinationIndex = 2

    const updatedLayers = sortLayersUserCase(
      layers,
      sourceIndex,
      destinationIndex
    )

    expect(updatedLayers).to.deep.equal([
      { id: '2', label: 'Layer 2', settings: defaultLayerItem.settings },
      { id: '3', label: 'Layer 3', settings: defaultLayerItem.settings },
      { id: '1', label: 'Layer 1', settings: defaultLayerItem.settings },
    ])
  })
})
