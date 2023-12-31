import React from 'react'

const List = ({
    id, title, completed, todoData, setTodoData, provided, snapshot}) => {

    console.log("Lists Component")

    const handleCompleteChange =(id) =>{
        let newTodoData = todoData.map(data => {
          if(id === id){
            completed = !completed;
          }
          return data;
        })
        setTodoData(newTodoData);
      }
       
      const handleClick = (id) =>{
        let newTodoData = todoData.filter(data => id !== id)
        console.log('newTodoData', newTodoData)
        setTodoData(newTodoData)
      }

  return (
    
        <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
        className ={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100" } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
       
        <div className="items-center ">
        <input type="checkbox" 
        defaultChecked={completed} 
        onChange={()=>handleCompleteChange(id)}/>{""}
        <span className={completed ? "line-through" :undefined}>{title}</span>
        </div>
        <div className ="px-4 py-1 float-right">
      <button  onClick={() => handleClick(id)}>x</button>
      
        </div>
        </div>
        
  )
}

export default List