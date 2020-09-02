import React from 'react';
import { data } from './components/Todo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data:data,
    }
  }

  toggleList = itemId=>{
    this.setState({
      data: this.state.data.map(item=>{
        if(itemId===item.id){
          return{
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  clearTask = ()=>{
    this.setState({
      data: this.state.data.filter(item=>{
        return !item.completed;
      })
    })
  }

  addItem = itemText =>{
    const newItem = {
      task:itemText,
      completed: false,
      id: Date.now()
    }
    this.setState({
      data:[...this.state.data, newItem]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList data={this.state.data} toggleList={this.toggleList}
        clearTask={this.clearTask}></TodoList>
        </div>
      
    );
  }
}

export default App;
