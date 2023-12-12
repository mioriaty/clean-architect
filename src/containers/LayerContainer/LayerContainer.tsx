import { Box } from '@/presentation/components/Box'
import { LayerItem } from '@/presentation/components/LayerItem'
import { Slider } from '@/presentation/components/Slider'
import { SortableList } from '@/presentation/components/SortableList'
import { useLayerStore } from '@/stores/layer.store'

export const LayerContainer = () => {
  const { layers, selectedLayer, selectLayer, updateLayer } = useLayerStore()

  return (
    <Box
      label="Box-shadow CSS generator"
      containerCss={{ width: '50%' }}
      labelCss={{ fontSize: '24px' }}
    >
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
              checked={selectedLayer.settings.inset}
              onChange={(e) => {
                updateLayer(selectedLayer.id, { inset: e.target.checked })
              }}
            />
          </Box>

          <Box label="Color">
            <input
              type="color"
              value={selectedLayer.settings.color}
              onChange={(e) => {
                updateLayer(selectedLayer.id, { color: e.target.value })
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
        <SortableList
          data={layers}
          renderItem={({ item, dragHandleProps }) => (
            <div {...dragHandleProps} key={item.id}>
              <LayerItem
                name={item.label}
                selected={selectedLayer?.id === item.id}
                onClick={() => {
                  selectLayer(item.id)
                }}
              />
            </div>
          )}
          onDragEnd={console.log}
        />
      </Box>
    </Box>
  )
}
