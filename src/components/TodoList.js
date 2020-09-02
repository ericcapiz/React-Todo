import React from 'react';
import Item  from './Item';


const TodoList = props =>  {
    
    return(
        <div className="list">
            {props.data.map(item =>{
                
                return <Item item={item} key={item.id} toggleItem={props.toggleItem} />
            })}
            <button type="submit" onClick={props.clearTask}>Clear Completed Tasks</button>
        </div>
    )
         
}
export default TodoList

