import { BoxShadowPreview } from '@/containers/preview/components/box-shadow-preview'
import { BoxShadowResult } from '@/containers/preview/components/box-shadow-result'
import { Box } from '@/presentation/components/box'

export const PreviewContainer = () => {
  return (
    <Box label="Preview" labelCss={{ fontSize: '24px' }}>
      <BoxShadowPreview />

      <BoxShadowResult />
    </Box>
  )
}
