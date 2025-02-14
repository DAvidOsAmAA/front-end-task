import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

function ShowTask() {



  const [allTasks, setAllTasks] = useState([])

  const [isLoading, setIsLoading] = useState(true)


  async function getAllTasks() {
    try {
      const { data } = await axios.get("http://localhost:3001/task/getAllTasks")
      console.log(data)
      setIsLoading(false)
      setAllTasks(data.allTasks)
    } catch (err) {
      console.log(err, "error")
    }
  }

  async function deleteTask(taskId) {
    try {
      const res = await axios.delete(`http://localhost:3001/task/delete/${taskId}`)
      getAllTasks()
    } catch (err) {
      console.log(err, "error")
    }
  }


  async function updateTask(taskId) {
    try {
      const res = await axios.put(`http://localhost:3001/task/update/${taskId}`)
      getAllTasks()
    } catch (err) {
      console.log(err, "error")
    }
  }



  useEffect(() => {
    getAllTasks()
  }, [])
  if (isLoading) return <div><Loading /></div>
  return (
    <div className='row my-5 mx-5 bg-light rounded '>

      {allTasks?.map((task, index) => (
        (task.completed == true) ? (
          <div className='col-md-6  my-3'>
            <ul class="list-group">
              <li class="list-group-item list-group-item-danger d-flex justify-content-between">
                <p>status: copleted tasks 👌</p>
                <div>
                  <button className=' btn' onClick={() => deleteTask(task._id)} >🗑️</button>
                </div>
              </li>
              <li class="list-group-item list-group-item-success">title: <span className='text-dark'>{task.title}</span></li>
              <li class="list-group-item list-group-item-info">{task.description || "there is no description"}</li>
            </ul>
          </div>
        )
          :
          <div className='col-md-6  my-3 '>
            <ul class="list-group">
              <li class="list-group-item list-group-item-danger d-flex justify-content-between">
                <p >status: un copleted tasks ❌</p>
                <div>
                <button className=' btn' onClick={() => deleteTask(task._id)} >🗑️</button>
                 <button className='mx-2 btn' onClick={() => updateTask(task._id)} >✔</button>
                 </div>
                 </li>
              <li class="list-group-item list-group-item-success">title: <span className='text-dark'>{task.title}</span></li>
              <li class="list-group-item list-group-item-info">{task.description || "there is no description"} </li>
            </ul>
          </div>
        // )

      ))}


    </div>
  )
}

export default ShowTask
