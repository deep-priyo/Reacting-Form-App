import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="mt-10 flex justify-center ">
      <form className="flex gap-10" onSubmit={handleSubmit(data => handleFormSubmitData(data))}>
        <input {...register('name')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="name" />
        <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="email" />
        <input {...register('image')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="imageurl" />
        <input className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold" type="submit" />
      </form>
    </div>);
};

export default Form;
