import { BoxShadowEntity } from '@/domain/entities/BoxShadow'

export interface LayerEntity {
  id: string
  label: string
  settings: BoxShadowEntity
}
