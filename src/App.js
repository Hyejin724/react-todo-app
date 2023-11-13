import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App(){
  console.log("App Component")

const [todoData, setTodoData] = useState([])
const [value, setValue] = useState("")

const handleSubmit = (e) => {
  //form안에서 input을 전송할 때 페이지 reload되는 것을 막아줌. 
  e.preventDefault();

  //새로운 할 일 데이터
  let newTodo = {
    id : Date.now(),
    title : value,
    complete : false,
  };
  //원래 있던 할 일에 새로운 할 일 더해주기
  // ...는 전개 연산자
  setTodoData(prev =>
    [...prev, newTodo]);
  setValue("");
}

    return(
      <div className="p-20 items-center justify-center w-screen h-screen bg-orange-200">
        
        <h1 className="title">예산 계산기</h1>
        <div className="w-full p-3 m-4 bg-white rounded shadow >
        <div className="w-full p-3 m-4 bg-white rounded shadow  md:max-w-lg  lg:max-w-lg>
        
          <div className="flex justify-between mb-3">
          </div>
          <Lists todoData = {todoData} setTodoData={setTodoData} />
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        </div>     
        <div className="absolute flex text-lg font-semibold " > 총지출: <input type ="text" className="bg-orange-200"/> 원</div>
      </div>
    )
  } 