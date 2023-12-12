import { createLayerUserCase } from '@/application/layer/createLayer'
import { deleteLayerUserCase } from '@/application/layer/deleteLayer'
import { sortLayersUserCase } from '@/application/layer/sortLayers'
import { updateLayerUserCase } from '@/application/layer/updateLayer'
import { LayerEntity } from '@/domain/entities/Layer'
import { DEFAULT_LAYER_ID, defaultLayerItem } from '@/infrastructure/data/layer.data'
import { create } from 'zustand'

export interface LayerStore {
  layers: LayerEntity[]
  idActive: string
  addLayer(): void
  removeLayer(id: string): void
  selectLayer(id: string): void
  updateLayer(id: string, settings: Partial<LayerEntity['settings']>): void
  sortLayers(sourceIndex: number, destinationIndex: number): void
}

export const useLayerStore = create<LayerStore>((set) => ({
  layers: [defaultLayerItem],
  idActive: DEFAULT_LAYER_ID,
  addLayer() {
    const newLayer = createLayerUserCase()
    set((state) => ({ layers: state.layers.concat(newLayer) }))
  },
  removeLayer(id) {
    set((state) => ({
      layers: deleteLayerUserCase(state.layers, id),
    }))
  },
  selectLayer(id) {
    set((state) => ({
      ...state,
      idActive: id,
    }))
  },
  updateLayer(id, settings) {
    set((state) => ({
      layers: updateLayerUserCase(state.layers, id, settings),
    }))
  },
  sortLayers(sourceIndex, destinationIndex) {
    set((state) => ({
      layers: sortLayersUserCase(state.layers, sourceIndex, destinationIndex),
    }))
  },
}))

// Logger middleware
useLayerStore.subscribe((state) => {
  console.log('State changed:', state)
})
