import React, {useState, useEffect} from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos";
import { Todo } from "../types/Todo";
import { deleteTodoData } from '../apis/todos';

export const useTodo = () => {
    const [todoList,setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        todoData.getAllData().then((todo) => {
            console.log(...todo);
            setTodoList([...todo].reverse);
        });
    }, []);

    const toggleTodoListItemStatus = (id: string, done: boolean) => {
        const todoItem = todoList.find((item: Todo) => item.id === id);

        const newTodoItem: Todo = {...todoItem!, done: !done};
        
        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item: updatedTodo));
            setTodoList(newTodoList);
        });
    };

    const addTodoListItem = (todoContent: string) => {
        const newTodoItem = {id: ulid(), content: todoContent, done: false};

        todoData.deleteTodoData(newTodoItem).then((addTodo) => {
            setTodoList([addTodo, ...todoList]);
        });
    };

    const deleteTodoListItem = (id: string) => {
        totoData.deleteTodoData(id).then((deletedid) => {
            const newTodoList = todoList.filter((item) => item.id !== deletedid);
            setTodoList(newTodoList);
        });
    };

    return { todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem};
};