import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  firstName: string;
  lastName: string;
  age: string;
}

export default function App() {
  const form = useForm<IFormInputs>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log('data', data);
  };

  console.log('form', form);

  if (errors.firstName?.type === 'required') {
    console.log('请输入firstName');
    // errors.firstName.ref?.focus?.({ preventScroll: false });
  } else if (errors.age) {
    console.log('请输入年龄');

    errors.age.ref?.focus?.({ preventScroll: false });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='fullscreen-form'>
      <input {...register('firstName', { required: true })} />
      <input {...register('lastName', { required: true })} />
      <input {...register('age', { required: true })} />
      <input type='submit' />
    </form>
  );
}
