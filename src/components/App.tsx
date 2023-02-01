import React, { useRef } from 'react';

import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";
import { deleteTodoData } from '../apis/todos';

function App() {
  // カスタムフック・・・複数のコンポーネントの中に存在する共通の処理を取り出して作成した関数
  const { todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }

    addTodoListItem(inputEl.current!.value);
    inputEl.current!.value = "";
  };

  const incompletedList = todoList.filter((todo: Todo) => !todo.done);
  const completeList = todoList.filter((todo: Todo) => todo.done);

  return (
    <>
      <TodoTitle title="Todoアプリ" as="h1" />
      <TodoAdd buttonText="Todoを追加する" inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList todoList={incompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="未完了のリスト" as="h2" />
      <TodoList todoList={completeList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="完了リスト" as="h2" />
    </>
  );
}

export default App;
