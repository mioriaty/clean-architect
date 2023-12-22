import { Box } from '@/presentation/components/box'
import { useLayerStore } from '@/stores/layer.store'

export const BoxShadowPreview = () => {
  const { layers } = useLayerStore()

  return (
    <Box
      label="Box Shadow"
      containerCss={{ minHeight: '500px' }}
      labelCss={{ fontSize: '16px' }}
    >
      <div
        css={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          minHeight: '500px',
          maxHeight: '500px',
        }}
      >
        {layers.map((layer, index) => {
          const zIndex = layers.length - index
          return (
            <div
              key={layer.id}
              css={{
                boxShadow: `
            ${layer.settings.offsetX}px 
            ${layer.settings.offsetY}px 
            ${layer.settings.blurRadius}px 
            ${layer.settings.spreadRadius}px 
            ${layer.settings.color} 
            ${layer.settings.inset ? 'inset' : ''}
          `,
                width: '200px',
                height: '200px',
                margin: '10px',
                backgroundColor: 'white',
                zIndex,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          )
        })}
      </div>
    </Box>
  )
}
