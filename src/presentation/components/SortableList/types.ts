import { Interpolation, Theme } from '@emotion/react';
import { ReactNode } from 'react';
import { DragDropContextProps, DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

interface DataDefault {
  id: string;
}

export interface RenderItemParam<T extends DataDefault> {
  item: T;
  index: number;
  dragHandleProps?: DraggableProvidedDragHandleProps;
  isDragging: boolean;
}

export interface SortableProps<T extends DataDefault> extends Omit<DragDropContextProps, 'children'> {
  data: T[];
  renderItem: ({ item, index, dragHandleProps }: RenderItemParam<T>) => ReactNode;
  keyExtractor?: (item: T) => string;
  itemCss?: Interpolation<Theme>;
  containerCss?: Interpolation<Theme>;
  droppableId?: string;
  type?: string;
}