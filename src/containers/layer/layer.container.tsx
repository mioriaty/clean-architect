import { AddLayer } from '@/containers/layer/components/add-layer'
import { LayerSettings } from '@/containers/layer/components/layer-settings'
import { ListLayers } from '@/containers/layer/components/list-layers'
import { Box } from '@/presentation/components/box'

export const LayerContainer = () => {
  return (
    <Box label="Box-shadow CSS generator" labelCss={{ fontSize: '24px' }}>
      <LayerSettings />

      <Box label="Layers" labelCss={{ marginBottom: '8px', fontSize: '16px' }}>
        <AddLayer />
        <ListLayers />
      </Box>
    </Box>
  )
}
