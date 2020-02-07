import React, {FC, useContext} from 'react';
import {TasksContext} from '../../../../Providers/Tasks';

export const List: FC = () => {
  const {tasks} = useContext(TasksContext);

  if(tasks?.length > 0) {
   return (
     <>
       <h1>Todos</h1>
       {tasks.map(({body, title}) => (
         <div key={`task_`}>
           <h2>{title}</h2>
           <p>{body}</p>
         </div>
       ))}
     </>
   );
  }

  return <p>Keine Todos verfügbar.</p>
}
