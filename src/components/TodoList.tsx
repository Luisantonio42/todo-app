import React from "react";
import classes from './TodoList.module.css'

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className={classes.ul}>
      {props.items.map((todo) => {
        return (
          <li key={todo.id} className={classes.li}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
