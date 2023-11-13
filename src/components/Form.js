import React from 'react'

export default function Form({handleSubmit, value1, value2, setValue}) {

  
  console.log("Form Component")

    const handleChange =(e) =>{
        setValue(e.target.value1, e.target.value2)
      }

  return (
    <form onSubmit = {handleSubmit} className ="flex pt-3 static">
          <div name="지출항목" className="m-3">
            <div name="지출항목-title"
                  className="text-orange-300">지출 항목</div>
            <input
              type = "text"
              name = "value1"
              className ="px-3 w-full py-2 mr-4 text-gray-500 border-0 border-b-2 border-solid border-gray-200"
              placeholder = "예) 렌트비"
              value1={value1}
              onChange = {handleChange} />
          </div>
          <div name="비용" className="m-3">
              <div name="비용-title"
                  className="text-orange-300">비용</div>
              <input
              type = "text"
              name = "value2"
              className ="px-3 w-full py-2 mr-4 text-gray-500 border-0 border-b-2 border-solid border-gray-200"
              placeholder = "0"
              value2={value2}
              onChange = {handleChange} />
            <input 
              type = "submit"
              value="제출"
              className="p-2 m-5 text-green-500 border-2 border-rgb(142,169,89) rounded shadow-2xl hover:text-white hover:bg-blue-200"/>
          </div>
    </form>
  )
}
