export type TodoType = 'finished' | 'unfinish';

export type TodoShowType = 'all' | TodoType;

export interface Todo {
  id: number;
  title: string;
  status: TodoType;
  participant: string;
}
