import React, { FC, useContext } from 'react';
import { TodoContext } from '../../../../Providers/Todo';
import { Col, Row } from 'antd';
import { Todo } from './Todo/Todo';

export const List: FC = () => {
  const { todos } = useContext(TodoContext);
  let todoList: JSX.Element = <p>Keine Todos verfügbar.</p>;

  if (todos?.length > 0) {
    todoList = (
      <Row gutter={[24, 24]} type='flex'>
        {todos.map((props, index) => (
          <Col key={`task_${index}`} xs={24} md={12} lg={8}>
            <Todo {...props} />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <div className='container'>
      <h1>Todos</h1>
      {todoList}
    </div>
  );
};
