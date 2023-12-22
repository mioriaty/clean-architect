import { Box } from '@/presentation/components/box'
import { transformBoxShadowToText } from '@/presentation/utils/transformBoxShadowToText'
import { useLayerStore } from '@/stores/layer.store'

export const BoxShadowResult = () => {
  const { layers } = useLayerStore()

  return (
    <Box label="Code" labelCss={{ fontSize: '16px' }}>
      <textarea
        css={{
          width: '100%',
          minHeight: '100px',
          maxHeight: '100px',
          border: 'none',
          outline: 'none',
          resize: 'none',
          backgroundColor: '#f5f5f5',
          padding: '10px',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}
        readOnly
        value={transformBoxShadowToText(layers)}
      />
    </Box>
  )
}
