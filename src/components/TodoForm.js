import React from 'react';

class TodoForm extends React.Component  {
    constructor(props){
        super(props);
        this.state ={
            itemText: "",
        }
    }
    changeHandler =(e)=>{
        this.setState({itemText: e.target.value})
    }
    submitHandler = (e)=>{
        e.preventDefault();
        this.props.addItem(this.state.itemText)
        this.setState({ itemText: "" });
    }
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" task="itemText" placeholder="Add To List" value ={this.state.itemText} onChange={this.changeHandler}></input>
                <button type="submit">Add To List</button>
            </form>
        )
    }

}
export default TodoForm