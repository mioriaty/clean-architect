import { createLayerUserCase } from '@/application/layer/createLayer'
import { deleteLayerUserCase } from '@/application/layer/deleteLayer'
import { selectLayerUserCase } from '@/application/layer/selectLayer'
import { updateLayerUserCase } from '@/application/layer/updateLayer'
import { LayerEntity } from '@/domain/entities/Layer'
import { defaultLayerItem } from '@/infrastructure/data/layer.data'
import { create } from 'zustand'

export interface LayerStore {
  layers: LayerEntity[]
  selectedLayer: LayerEntity | null
  addLayer(): void
  removeLayer(id: string): void
  selectLayer(id: string): void
  updateLayer(id: string, settings: Partial<LayerEntity['settings']>): void
}

export const useLayerStore = create<LayerStore>((set) => ({
  layers: [defaultLayerItem],
  selectedLayer: null,
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
      selectedLayer: selectLayerUserCase(state.layers, id)
    }))
  },
  updateLayer(id, settings) {
    set((state) => ({
      layers: updateLayerUserCase(state.layers, id, settings)
    }))
  },
}))

// Logger middleware
useLayerStore.subscribe((state) => {
  console.log("State changed:", state);
});
