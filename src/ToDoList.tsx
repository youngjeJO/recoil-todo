import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  Email: 'string';
  First_Name: 'string';
  Last_Name: 'string';
  User_Name: 'string';
  Password: 'string';
  Password1: 'string';
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError('Password1', { message: 'password are not the same' }, { shouldFocus: true });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('Email', {
            required: ' Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'only naver.com emails allowed',
            },
          })}
          placeholder='Email'
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register('First_Name', {
            required: true,
            validate: {
              noJo: (value) => (value.includes('jo') ? 'no Jo allowed' : true),
              noJe: (value) => (value.includes('je') ? 'no Je allowed' : true),
            },
          })}
          placeholder='First Name'
        />
        <span>{errors?.First_Name?.message}</span>
        <input {...register('Last_Name', { required: true })} placeholder='Last Name' />
        <span>{errors?.Last_Name?.message}</span>
        <input
          {...register('User_Name', { required: true, minLength: 10 })}
          placeholder='User Name'
        />
        <span>{errors?.User_Name?.message}</span>
        <input
          {...register('Password', {
            required: true,
            minLength: { value: 5, message: 'your password is too short.' },
          })}
          placeholder='Password'
        />
        <span>{errors?.Password?.message}</span>
        <input
          {...register('Password1', { required: 'password is required', minLength: 5 })}
          placeholder='Password1'
        />
        <span>{errors?.Password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

// function ToDoList() {
//   const [toDo, setToDo] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder='Write a to do' />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
