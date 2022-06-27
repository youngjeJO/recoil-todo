import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

// interface IForm {
//   Email: 'string';
//   First_Name: 'string';
//   Last_Name: 'string';
//   User_Name: 'string';
//   Password: 'string';
//   Password1: 'string';
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>();
//   const onValid = (data: IForm) => {
//     if (data.Password !== data.Password1) {
//       setError('Password1', { message: 'password are not the same' }, { shouldFocus: true });
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onValid)}>
//         <input
//           {...register('Email', {
//             required: ' Email is required',
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: 'only naver.com emails allowed',
//             },
//           })}
//           placeholder='Email'
//         />
//         <span>{errors?.Email?.message}</span>
//         <input
//           {...register('First_Name', {
//             required: true,
//             validate: {
//               noJo: (value) => (value.includes('jo') ? 'no Jo allowed' : true),
//               noJe: (value) => (value.includes('je') ? 'no Je allowed' : true),
//             },
//           })}
//           placeholder='First Name'
//         />
//         <span>{errors?.First_Name?.message}</span>
//         <input {...register('Last_Name', { required: true })} placeholder='Last Name' />
//         <span>{errors?.Last_Name?.message}</span>
//         <input
//           {...register('User_Name', { required: true, minLength: 10 })}
//           placeholder='User Name'
//         />
//         <span>{errors?.User_Name?.message}</span>
//         <input
//           {...register('Password', {
//             required: true,
//             minLength: { value: 5, message: 'your password is too short.' },
//           })}
//           placeholder='Password'
//         />
//         <span>{errors?.Password?.message}</span>
//         <input
//           {...register('Password1', { required: 'password is required', minLength: 5 })}
//           placeholder='Password1'
//         />
//         <span>{errors?.Password1?.message}</span>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }
const todoState = atom<IToDo[]>({
  key: 'todo',
  default: [],
});

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [toDos, setToDos] = useRecoilState(todoState);

  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [...oldToDos, { text: toDo, id: Date.now(), category: 'TO_DO' }]);
    setValue('toDo', '');
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('toDo', { required: 'please write a to do' })}
          placeholder='Write a to do'
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
