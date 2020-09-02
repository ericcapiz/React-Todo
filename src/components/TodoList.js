import React from 'react';
import TodoForm from './TodoForm';

class TodoList extends React.Component  {
    constructor(){
        super();
    }
    render(){
        return (
            <TodoForm />
        )
    }

}
export default TodoList

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
