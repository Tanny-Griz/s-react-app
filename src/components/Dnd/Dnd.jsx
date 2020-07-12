import React from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'some 1' },
        'task-2': { id: 'task-2', content: 'some 2' },
        'task-3': { id: 'task-3', content: 'some 3' },
        'task-4': { id: 'task-4', content: 'some 4' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'] ,
        },
    },
    columnOrder: ['column-1'],
}

class Dnd extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: initialData,

        }
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    // state = initialData;
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         columns: {
    //             'column-1': {
    //                 id: 'column-1',
    //                 title: 'title-1',
    //                 taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    //               }              
    //         },
    //         columnOrder : ['column-1'],
    //     }
    // }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if(!destination) {
            return;
        }
        if(
            destination.droppableId == source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.data.columns[source.droppableId];
        const newTaskIds = column.taskIds;
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        console.log(newTaskIds);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state.data,
            columns: {
                ...this.state.data.columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newState);
    }
    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
               {this.state.data.columnOrder.map(columnId => {
                const column = this.state.data.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.data.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} />
                } )
                }
            </DragDropContext>
        );
    }
}

export default Dnd