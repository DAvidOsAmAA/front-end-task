import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as yup from "yup"
const AddTask = () => {


  const validationSchema= yup.object({
    title:yup.string("title must be string").required("title must be required").matches(/[a-zA-Z]/,"must be string"),
    description:yup.string()
  })

  const showSuccessAlert = () => {
    Swal.fire({
      timer: 2000,
      text: "Task added successfully",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "Agree",
      customClass: {
        confirmButton: "btn btn-success",
      },
    });
  };


  
  const TaskObj = {
    title: " ",
    description:""
  }


  async function onSubmit(values) {
    try{
      const {data}= await axios.post("http://localhost:3001/task/add",values)
      console.log(data)
      showSuccessAlert()
    }catch(err){
      console.log(err)
    }

  }


  const myFormik = useFormik({

    initialValues: TaskObj,

    onSubmit: onSubmit,

validationSchema:validationSchema

  })






  return (
    <div className='w-75 m-auto  p-5'>
      <h2>Add Task :</h2>
      <form onSubmit={myFormik.handleSubmit}>


        <label htmlFor="title" className='my-2 mx-1'>Title:</label>
        <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.title} id='title' placeholder='title'  className='form-control' />
        {myFormik.errors.title && myFormik.touched.title ? <div className='alert alert-danger mt-1'>{myFormik.errors.title}</div> : null}


        <label className='my-2 mx-1' htmlFor='description' >Description (optional):</label>
        <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.description} id='description' placeholder='description' className='form-control' />

        <button type='submit' disabled={!(myFormik.isValid && myFormik.dirty)} className='btn btn-success mt-5'>Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
