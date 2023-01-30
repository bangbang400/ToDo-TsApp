import React from 'react';

import {useTodo} from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import {TodoAdd} from "./TodoAdd";
import {TodoList} from "./TodoList";
import { TodoTitle } from "./TodoTitle";

function App() {
// カスタムフック・・・複数のコンポーネントの中に存在する共通の処理を取り出して作成した関数
const {todoList, toggleTodoListItemStatus,}
  return (
    <p>ToDoアプリの練習</p>    
  );
}

export default App;
