import { LayerEntity } from '@/domain/entities/layer.entity'

export const transformBoxShadowToText = (layers: LayerEntity[]): string => {
  return `box-shadow: ${layers
    .map(
      (layer) =>
        `${layer.settings.offsetX}px ${layer.settings.offsetY}px ${
          layer.settings.blurRadius
        }px ${layer.settings.spreadRadius}px ${layer.settings.color} ${
          layer.settings.inset ? 'inset' : ''
        }`
    )
    .join(',\n')}`
}
