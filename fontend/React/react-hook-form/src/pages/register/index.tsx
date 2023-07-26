import { useForm, SubmitHandler } from 'react-hook-form';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export default function App() {
  const form = useForm<IFormInput>();
  const { register, handleSubmit } = form;
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  console.log(form);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register('firstName')} />
      <label>Gender Selection</label>
      <select defaultValue='other' {...register('gender')}>
        <option value='female'>female</option>
        <option value='male'>male</option>
        <option value='other'>other</option>
      </select>
      <button type='submit'>submit</button>
    </form>
  );
}
