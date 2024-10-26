//@ts-nocheck
import React from 'react'
import { Form, useForm } from 'react-hook-form'


function Forms() {
  const {register,handleSubmit, formState:{errors},reset}=useForm();
  const onSubmit=(data)=>{
    alert(`name:${data.name}
      email:${data.email}
      age:${data.age}
      

      
      `)
      reset()
     
  }

  return (
  <>
  <h2>react form</h2>
  <form  onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="name">Name:</label>
    <input type='text' id='name' {...register("name",{required:"name is requried"})} />
      {errors.name && <p>name is required</p>}

      <label htmlFor="email">email:</label>
      <input type='email' id="email" {...register("email",{required:"email is required", pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email is invalid',
            }})} />
      {errors.email && <p>email invalid</p>}
      <label htmlFor="age">age:</label>
      <input type='number' id='age' {...register("age",{required:true})}/>
      {errors.age && <p>age is required</p>}
      <button type='submit'>submit</button>

  </form>
  </>
  )
}

export default Forms