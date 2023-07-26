import counter from './counterStore';
import todo from './todoStore';

export type Count = typeof counter;
export type Todo = typeof todo;

export default {
  counter,
  todo,
};
