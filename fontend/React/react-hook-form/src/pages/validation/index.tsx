import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>表单校验，可以通过registry添加校验项，但是这些校验项并不会应用到元素上</p>
      <hr />

      <label>FirstName</label>
      {/* maxLength 等 */}
      <input type='text' maxLength={6} {...register('firstName', { required: true, maxLength: 5 })} />

      <br />
      <label>lastName</label>
      <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />

      <br />
      <label>age</label>
      <input type='number' {...register('age', { min: 18, max: 99 })} />

      <br />
      <input type='submit' />
    </form>
  );
}
