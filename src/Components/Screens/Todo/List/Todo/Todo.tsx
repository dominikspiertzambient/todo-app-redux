import React, { FC } from 'react';
import { Todo as TodoProps } from '../../../../../Providers/Todo/Todo';
import Card from 'antd/lib/card';
import { Done } from './Done';

export const Todo: FC<TodoProps> = ({ title, body }) => (
  <Card title={title} extra={<Done title={title} />}>
    <p>{body}</p>
  </Card>
);
