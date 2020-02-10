import React, { FC } from 'react';
import { Todo as TodoProps } from '../../../../../Providers/Todo/Todo';
import Card from 'antd/lib/card';

export const Todo: FC<TodoProps> = ({ title, body }) => {
  const test = {};

  return (
    <Card title={title}>
      <p>{body}</p>
    </Card>
  );
};
