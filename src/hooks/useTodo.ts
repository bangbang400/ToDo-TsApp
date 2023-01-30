import React, {useState, useEffect} from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos";
import { Todo } from "../types/Todo";

export const useTodo = () => {
    const [todoList,setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        todoData.getAllData().then((todo) => {
            console.log(...todo);
            setTodoList([...todo].reverse);
        });
    }, []);
}