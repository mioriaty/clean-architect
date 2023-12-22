import { Button } from '@/presentation/components/button'
import { useLayerStore } from '@/stores/layer.store'

export const AddLayer = () => {
  const { addLayer } = useLayerStore()

  return (
    <Button
      data-create="create-layer"
      css={{ marginBottom: '10px' }}
      onClick={addLayer}
    >
      Add Layer
    </Button>
  )
}
