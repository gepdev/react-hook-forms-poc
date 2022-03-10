import React from "react"
import { useForm } from "react-hook-form"

export default function Basic(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch("name"))

  return (
    <>
      <h1>Basic form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-1">
          <label htmlFor="">Name</label>
          <input className="form-control" {...register("name")} />
        </div>
        <div className="my-1">
          <label htmlFor="">Surname</label>
          <input className="form-control" {...register("surname", { required: true })} />
          {errors.surname && <span>This is a required field</span>}
        </div>
        <div className="mt-2">
          <button className="btn btn-primary" type="submit">Send</button>
        </div>
      </form>
    </>
  )
}
