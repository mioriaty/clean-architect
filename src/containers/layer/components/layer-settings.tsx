import { Box } from '@/presentation/components/box'
import { ColorPicker } from '@/presentation/components/color-picker'
import { Slider } from '@/presentation/components/slider'
import { useLayerStore } from '@/stores/layer.store'

export const LayerSettings = () => {
  const { layers, idActive, updateLayer } = useLayerStore()
  const selectedLayer = layers.find((layer) => layer.id === idActive)

  const Divider = (
    <div
      css={{
        width: '100%',
        height: '1px',
        backgroundColor: '#ccc',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    />
  )

  if (selectedLayer) {
    return (
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

        {Divider}
      </>
    )
  }

  return Divider
}
