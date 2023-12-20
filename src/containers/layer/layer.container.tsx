import { Box } from '@/presentation/components/box'
import { Button } from '@/presentation/components/button'
import { ColorPicker } from '@/presentation/components/color-picker'
import { LayerItem } from '@/presentation/components/layer-item'
import { Slider } from '@/presentation/components/slider'
import { SortableList } from '@/presentation/components/sortable-list'
import { useLayerStore } from '@/stores/layer.store'

export const LayerContainer = () => {
  const {
    layers,
    idActive,
    selectLayer,
    updateLayer,
    addLayer,
    removeLayer,
    sortLayers,
  } = useLayerStore()
  const selectedLayer = layers.find((layer) => layer.id === idActive)

  return (
    <Box label="Box-shadow CSS generator" labelCss={{ fontSize: '24px' }}>
      {selectedLayer && (
        <>
          <Box label="Shift right" containerCss={{ marginBottom: '10px' }}>
            <Slider
              value={selectedLayer.settings.offsetX}
              onChange={(val) => {
                updateLayer(selectedLayer.id, { offsetX: val })
              }}
            />
          </Box>

          <Box label="Shift down" containerCss={{ marginBottom: '10px' }}>
            <Slider
              value={selectedLayer.settings.offsetY}
              onChange={(val) => {
                updateLayer(selectedLayer.id, { offsetY: val })
              }}
            />
          </Box>

          <Box label="Blur" containerCss={{ marginBottom: '10px' }}>
            <Slider
              value={selectedLayer.settings.blurRadius}
              onChange={(val) => {
                updateLayer(selectedLayer.id, { blurRadius: val })
              }}
            />
          </Box>

          <Box label="Spread" containerCss={{ marginBottom: '10px' }}>
            <Slider
              value={selectedLayer.settings.spreadRadius}
              onChange={(val) => {
                updateLayer(selectedLayer.id, { spreadRadius: val })
              }}
            />
          </Box>

          <Box label="Inset" containerCss={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              value={selectedLayer.settings.inset.toString()}
              checked={selectedLayer.settings.inset}
              onChange={(e) => {
                updateLayer(selectedLayer.id, { inset: e.target.checked })
              }}
            />
          </Box>

          <Box label="Color">
            <ColorPicker
              color={selectedLayer.settings.color}
              onChange={(color) => {
                updateLayer(selectedLayer.id, { color })
              }}
            />
          </Box>
        </>
      )}

      <div
        css={{
          width: '100%',
          height: '1px',
          backgroundColor: '#ccc',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      />

      <Box label="Layers" labelCss={{ marginBottom: '8px', fontSize: '16px' }}>
        <Button css={{ marginBottom: '10px' }} onClick={addLayer}>
          Add Layer
        </Button>
        <SortableList
          data={layers}
          renderItem={({ item, dragHandleProps }) => (
            <div {...dragHandleProps} key={item.id}>
              <LayerItem
                name={item.settings.color}
                selected={selectedLayer?.id === item.id}
                onClick={() => {
                  selectLayer(item.id)
                }}
                onRemove={() => removeLayer(item.id)}
              />
            </div>
          )}
          onDragEnd={(result) => {
            if (!result.destination) {
              return
            }
            sortLayers(result.source.index, result.destination.index)
          }}
        />
      </Box>
    </Box>
  )
}
