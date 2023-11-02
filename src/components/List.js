import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({todoData, setTodoData}) {
    

    
       const handleCompleteChange =(id) =>{
        let newTodoData = todoData.map(data => {
          if(data.id === id){
            data.completed = !data.completed;
          }
          return data;
        })
        setTodoData(newTodoData);
      }
       
      const handleClick = (id) =>{
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log('newTodoData', newTodoData)
        setTodoData(newTodoData)
      }

  return (
    <div>
      <DragDropContext>
        <Droppable droppableId='HI'>
          {(provided)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
            
        {todoData.map((data, index) => (

          <Draggable key={data.id} draggableId = {data.id.toString()} index={index}>

            {(provided, snapshot) => (

            <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
            className ={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100" } "flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
           
            <div className="items-center ">
            <input type="checkbox" 
            defaultChecked={data.completed} 
            onChange={()=>handleCompleteChange(data.id)}/>{""}
            <span className={data.completed ? "line-through":undefined}>{data.title}</span>
            </div>
            <div className ="px-4 py-1 float-right">
          <button  onClick={() => handleClick(data.id)}>x</button>
          
            </div>
            </div>
            )}
            </Draggable>
        ))}
        {provided.placeholder}
        </div>
        )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
