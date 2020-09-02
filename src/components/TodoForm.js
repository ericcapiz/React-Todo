import React from 'react';

class TodoForm extends React.Component  {
    constructor(props){
        super(props);
        this.state ={
            itemText: ""
        }
    }
    render(){
        return (
            <form>
                <input type="text" placeholder="Add To List"></input>
                <button>Add To List</button>
                <button>Remove Completed</button>
            </form>
        )
    }

}
export default TodoForm