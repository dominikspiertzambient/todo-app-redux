import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

export interface Todo {
  body: string;
  title: string;
}

interface TodoContextProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todos: Todo[];
}

export const TodoContext = createContext<TodoContextProps>({
  setTodos: () => undefined,
  todos: [],
});

export const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([{ body: 'Wohnzimmer, Küche', title: 'Aufräumen' }]);

  return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
};
