import { Box } from '@/presentation/components/Box'
import { Slider } from '@/presentation/components/Slider'
import { SortableList } from '@/presentation/components/SortableList'
import { useLayerStore } from '@/stores/layer.store'

export const LayerContainer = () => {
  const { layers } = useLayerStore()

  return (
    <Box label="Box-shadow CSS generator">
      <Box label="Shift right">
        <Slider value={1} onChange={console.log} />
      </Box>

      <SortableList
        data={layers}
        renderItem={({ item, dragHandleProps }) => (
          <div {...dragHandleProps} key={item.id}>
            {item.label}
          </div>
        )}
        onDragEnd={console.log}
      />
    </Box>
  )
}
