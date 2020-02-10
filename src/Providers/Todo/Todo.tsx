import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

export interface Todo {
  body: string;
  title: string;
}

interface TodoContextProps {
  setTasks: Dispatch<SetStateAction<Todo[]>>;
  tasks: Todo[];
}

export const TodoContext = createContext<TodoContextProps>({
  tasks: [],
  setTasks: () => undefined,
});

export const TodoProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  return <TodoContext.Provider value={{ tasks, setTasks }}>{children}</TodoContext.Provider>;
};
