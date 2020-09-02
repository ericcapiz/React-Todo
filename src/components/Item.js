import React from 'react';

const Item = props =>{
    return (
        <div className={`item${props.item.completed ? " completed" : ""}`} 
        onClick={e=>props.toggleList(props.item.id)}>
            {props.item.task}
        </div>
    );
};
export default Item;