import React, { useRef } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { Todo } from '../../store';

import * as Types from '../../index.d';

interface Props {
  todo: Todo;
}

const showStatus: Types.TodoShowType[] = ['all', 'finished', 'unfinish'];

const Todos: React.FC<Props> = observer(({ todo }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const participantRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (!titleRef.current || !participantRef.current || !titleRef.current.value) return;
    const title = titleRef.current.value || '';
    const participant = participantRef.current.value || '佚名';
    todo.addTodo({ title, participant, status: 'unfinish' });
    titleRef.current.value = '';
    participantRef.current.value = '';
  };

  return (
    <div className=''>
      <h3>Wellcome to Todo</h3>
      <p className='status-wrap'>
        status:
        {showStatus.map(s => (
          <button key={s} onClick={() => todo.setShowType(s)} style={todo.showStatus === s ? { color: '#5f90ee' } : undefined}>
            {s}
          </button>
        ))}
        <small style={{ marginLeft: '1em' }}>{todo.showStatus}</small>
      </p>
      <small style={{ marginLeft: '1em' }}>
        finished todo task: {todo.finishedTodo.length} / {todo.todoList.length}
      </small>
      <ul>
        {todo.todoList
          .filter(t => todo.showStatus === 'all' || t.status === todo.showStatus)
          .map(t => (
            <li
              key={t.id}
              style={t.status === 'finished' ? { textDecoration: 'line-through', fontStyle: 'italic', fontWeight: 'lighter' } : undefined}
            >
              <input type='checkbox' id={`todo-task-${t.id}`} checked={t.status === 'finished'} onChange={() => todo.changeTodoStatus(t)} />
              <label htmlFor={`todo-task-${t.id}`} onDoubleClick={() => todo.editTodo(t)}>
                {t.title}
              </label>
              <small style={{ marginLeft: '1em' }}>
                <i>{t.participant}</i>
              </small>
            </li>
          ))}
      </ul>

      <p>
        <input type='text' placeholder='todo title' ref={titleRef} />
        <input type='text' placeholder='todo participant' ref={participantRef} />
        <button type='button' onClick={handleAddTodo}>
          add Todo
        </button>
        <button type='button' style={{ marginLeft: '3em' }} onClick={() => todo.clearTodos()}>
          clear All
        </button>
      </p>
    </div>
  );
});

Todos.displayName = 'Todos';

export default inject('todo')(Todos);
