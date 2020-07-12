import React from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

class Task extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props.task.content);
    }
    render() {
        return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided) =>(
                <div className="card"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}

                ><p>{this.props.task.content}</p></div>
            )}
        </Draggable>
        )
    }
}

export default Task