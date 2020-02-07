import React, {createContext, Dispatch, FC, SetStateAction, useState} from 'react';

export interface Task {
  title: string;
  body: string;
}

interface TasksContextProps {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  setTasks: () => undefined
});

export const TasksProvider: FC = ({children}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>
};
