import React from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import Task from './Task';

class Column extends React.Component {
        constructor (props) {
        super(props);
        console.log(this.props.column);
    }
    render () {
        return (
            <div className="holder-dnd">
                <h3>{this.props.column.title}</h3>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
  
                        >
                            {this.props.tasks.map((task, index) =>
                                (<Task key={task.id} task={task} index={index} />)
                            )}
                            
                            {provided.placeholder}
                        </div> 
                    )}
                   
                </Droppable>
                
            </div>
        )
    }
}

export default Column