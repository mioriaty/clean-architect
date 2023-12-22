import { LayerItem } from '@/presentation/components/layer-item'
import { SortableList } from '@/presentation/components/sortable-list'
import { useLayerStore } from '@/stores/layer.store'

export const ListLayers = () => {
  const { layers, idActive, selectLayer, removeLayer, sortLayers } =
    useLayerStore()
  const selectedLayer = layers.find((layer) => layer.id === idActive)

  return (
    <SortableList
      data={layers}
      renderItem={({ item, dragHandleProps }) => (
        <div {...dragHandleProps} key={item.id} data-layer-id={item.id}>
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
  )
}
