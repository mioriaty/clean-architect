import { BoxShadowEntity } from '@/domain/entities/box-shadow.enitity'

export interface LayerEntity {
  id: string
  label: string
  settings: BoxShadowEntity
}
