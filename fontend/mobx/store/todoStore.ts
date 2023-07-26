import { makeAutoObservable } from 'mobx';

import * as Types from '../index.d';

export class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  /** 自增，记录当前新增的todo的Id */
  currentId = 10;

  showStatus: Types.TodoShowType = 'all';

  todoList: Types.Todo[] = [
    {
      id: 0,
      title: '看完红宝书',
      status: 'finished',
      participant: 'hec9527',
    },
    {
      id: 1,
      title: '学习mobx',
      status: 'unfinish',
      participant: 'hec',
    },
    {
      id: 2,
      title: '复习redux-react关于RTK的用法',
      status: 'finished',
      participant: 'hec9527',
    },
    {
      id: 3,
      title: '了解中高级前端工作内容以及岗位职责',
      status: 'unfinish',
      participant: 'Mickey',
    },
  ];

  get finishedTodo() {
    return this.todoList.filter(t => t.status === 'finished');
  }

  get unfinishedTodo() {
    return this.todoList.filter(t => t.status === 'unfinish');
  }

  setShowType(type: Types.TodoShowType) {
    this.showStatus = type;
  }

  addTodo(todo: Omit<Types.Todo, 'id'>) {
    this.todoList.push({ id: ++this.currentId, ...todo });
  }

  changeTodoStatus(todo: Types.Todo) {
    const cTodo = this.todoList.find(t => t.id === todo.id);
    if (cTodo) {
      console.log(this.todoList[0]);
      cTodo.status = cTodo.status === 'finished' ? 'unfinish' : 'finished';
      console.log(this.todoList[0]);
    }
  }

  clearTodos() {
    this.todoList = [];
  }

  editTodo(todo: Types.Todo) {
    const cTodo = this.todoList.find(t => t.id === todo.id);
    if (cTodo) {
      // 此处只能修改cTodo的值，不能直接重新赋值
      cTodo.title = prompt('请输入todo的标题', todo.title) || '';
      cTodo.participant = prompt('请输入todo的参与者', todo.participant) || '';
    }
  }
}

export default new TodoStore();
