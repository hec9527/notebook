import React, { useState } from 'react';
import SectionTitle from '../components/section-title';

const list = [
  {
    img: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'alice',
    mail: 'alice@google.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'miles',
    mail: 'miles@google.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'julia',
    mail: 'alice@google.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'julia1',
    mail: 'alice@google.com',
  },
];

type Keys = 'email';
type Value = { [K in Keys]: string };

const Component: React.FC = () => {
  const [value, setValue] = useState({
    email: '123@qq.com.',
  } as Value);

  const change = (k: Keys, v: string) => {
    setValue(p => ({ ...p, [k]: v }));
  };

  return (
    <div className='px-8 flex-1 pb-20 text-blue-400 max-h-screen overflow-auto'>
      <SectionTitle>hover, focus, active</SectionTitle>
      <button className='border-spacing-4 rounded-sm border px-4 py-2 hover:bg-sky-400 hover:text-white active:bg-sky-600 focus:bg-blue-700 mr-4'>
        click me
      </button>

      <button className='border-spacing-4 rounded-md border px-4 py-2 hover:bg-sky-400 hover:text-white active:bg-sky-600 focus:bg-blue-700'>
        click me
      </button>

      <SectionTitle>First, last, odd, and even</SectionTitle>
      <div className='max-w-sm'>
        <ul role='list' className='p-6 divide-y divide-slate-200'>
          {list.map(l => (
            <li className='flex p-4 first:pt-0 last:pb-0 even:bg-sky-50 odd:bg-red-50' key={l.name}>
              <img className='h-10 w-10 rounded-full' src={l.img} alt='' />
              <div className='ml-3 overflow-hidden'>
                <p className='text-sm font-medium text-slate-900'>{l.name}</p>
                <p className='text-sm text-slate-500 truncate'>{l.mail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <SectionTitle>Form states</SectionTitle>
      <form className='w-72 rounded-2xl bg-white p-4 border'>
        <label className='block'>
          <span className='block text-sm text-medium text-slate-700'>UserName</span>
          <input type='text' value='Saga' readOnly disabled className='btn' />
        </label>
        <label className='block'>
          <span className='block text-sm text-medium text-slate-700'>email</span>
          <input
            type='email'
            value={value.email || ''}
            onChange={e => change('email', e.target.value)}
            pattern='[\w\d\.]*\@\.com$'
            required
            className='btn'
          />
        </label>
        <label className='block'>
          <span className='block text-sm text-medium text-slate-700'>address</span>
          <input type='text' required className='btn' />
        </label>
      </form>

      <SectionTitle>Styling based on parent state</SectionTitle>
      <div className='group max-w-xs m-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-md space-y-3 hover:bg-sky-500 hover:ring-sky-500 focus-within:bg-green-500 cursor-pointer'>
        <h3 className='text-slate-500 group-hover:text-white group-focus-within:text-pink-500'>New Project</h3>
        <p className='text-slate-500 group-hover:text-white group-focus-within:text-pink-500 text-sm font-semibold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <input
          type='text'
          placeholder='请输入一点内容'
          className='block mt-3 rounded-md border-slate-500 border px-3 py-1 focus:ring-1 ring-sky-300 focus:border-sky-500 outline-none placeholder:text-xs placeholder:text-slate-400/70 text-slate-500'
        />
      </div>

      <SectionTitle>Styling based on sibling state</SectionTitle>
      <form className='block max-w-sm'>
        <label className='block'>
          <span className='block'>Email</span>
          <input
            type='email'
            className='peer px-3 py-1 rounded-md border border-slate-500 invalid:ring-1 invalid:ring-pink-500 invalid:border-pink-500'
            required
            pattern='\d*\@qq\.com'
          />
          <span className='peer-invalid:block hidden text-pink-500'>请输入内容</span>
        </label>
      </form>
    </div>
  );
};

Component.displayName = 'Component';

export default Component;
