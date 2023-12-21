import { BoxShadowEntity } from '@/domain/entities/box-shadow.enitity'
import { LayerEntity } from '@/domain/entities/layer.entity'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { updateLayerUserCase } from '../update.usecase'

describe('updateLayerUserCase', () => {
  it('should update the settings of the layer item with the specified ID', () => {
    const layers: LayerEntity[] = [
      { id: '1', label: 'Layer 1', settings: defaultLayerItem.settings },
      { id: '2', label: 'Layer 2', settings: defaultLayerItem.settings },
      { id: '3', label: 'Layer 3', settings: defaultLayerItem.settings },
    ]
    const layerId = '2'
    const newSettings: Partial<BoxShadowEntity> = { blurRadius: 3 }

    const updatedLayers = updateLayerUserCase(layers, layerId, newSettings)

    expect(updatedLayers).toHaveLength(layers.length)
    expect(updatedLayers.some((layer) => layer.id === layerId)).toBe(true)
    expect(
      updatedLayers.find((layer) => layer.id === layerId)?.settings
    ).toEqual({
      ...defaultLayerItem.settings,
      ...newSettings,
    })
  })

  it('should not modify the layers array if the specified ID does not exist', () => {
    const layers: LayerEntity[] = [
      { id: '1', label: 'Layer 1', settings: defaultLayerItem.settings },
      { id: '2', label: 'Layer 2', settings: defaultLayerItem.settings },
      { id: '3', label: 'Layer 3', settings: defaultLayerItem.settings },
    ]
    const layerId = '4'
    const newSettings: Partial<BoxShadowEntity> = { blurRadius: 3 }

    const updatedLayers = updateLayerUserCase(layers, layerId, newSettings)

    expect(updatedLayers).toHaveLength(layers.length)
    expect(updatedLayers).toEqual(layers)
  })
})
