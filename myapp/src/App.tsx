import { useState } from 'react'

interface IEmployee {
  name: string
  salary: string
}


function App() {
  const [isVisible,setIsVisible] = useState<boolean>(true)
  const [employee,setEmployee] = useState<IEmployee>({
    name: "Supakorn",
    salary: ""
  })
  return (
    <>
      {isVisible && (<div>
        <h1>
           ชื่อ {employee.name} 
        </h1>
        <h2>เงินเดือน {employee.salary} บาท</h2>
      </div>)}
      <div>
           <button
            onClick={()=>{setEmployee(data=>({
              ...data,
              salary: (parseInt(data.salary) + 5000).toString()
            })
            )}}>เพิ่มเงินเดือน
           </button>
            <button onClick={()=>{setIsVisible(!isVisible)}}>{isVisible ? "ซ่อน" : "แสดง"}ข้อมูล
            </button>
        <hr />
        <input type="number" value={employee.salary} onChange={(e)=>setEmployee(data=>({
          ...data,
          salary: e.target.value
        }))} />       
      </div>
    </>
  )
}

export default App
