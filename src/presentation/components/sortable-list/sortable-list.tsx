import { SortableProps } from '@/presentation/components/sortable-list/types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';



const SortableList = <T extends { id: string }>({
  data,
  renderItem,
  keyExtractor = item => item.id,
  itemCss,
  containerCss,
  droppableId = 'droppable',
  type,
  ...rest
}: SortableProps<T>) => {
  return (
    <DragDropContext {...rest}>
      <Droppable type={type} droppableId={droppableId}>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef} css={containerCss}>
            {data.map((item, index) => (
              <Draggable key={keyExtractor(item)} draggableId={item.id} index={index}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      style={{
                        ...provided.draggableProps.style,
                        ...(provided.draggableProps.style?.transform
                          ? {
                              transform: `${provided.draggableProps.style?.transform?.replace(/\(.*,/g, '(0,')}`,
                            }
                          : {}),
                      }}
                      css={itemCss}
                    >
                      {renderItem({
                        item,
                        index,
                        dragHandleProps: provided.dragHandleProps ? provided.dragHandleProps : undefined,
                        isDragging: snapshot.isDragging,
                      })}
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default SortableList;
