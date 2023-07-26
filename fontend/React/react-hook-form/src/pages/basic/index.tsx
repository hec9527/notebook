import { useForm, SubmitHandler } from 'react-hook-form';

type FormDate = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDate>();

  const onSubmit: SubmitHandler<FormDate> = data => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  console.log(register('example', { required: true, max: 1000 }));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue='test' {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input autoFocus {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
}
