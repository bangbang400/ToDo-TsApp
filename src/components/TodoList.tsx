import {TodoTitle} from "./TodoTitle";
import {TodoItem} from "./TodoItem";
import {Todo} from "../types/Todo";
import { deleteTodoData } from '../apis/todos';

export const TodoList = ({
    TodoList,
    toggleTodoListStatus,
    deleteTodoListItem,
    title,
    as,
}: {
    todoList: Todo[];
    toggleTodoListItemStatus: (id: string, status: boolean) => void;
    deleteTodoListItem: (id: string) => void;
    title: string;
    as: string;
}) => {
    return (
        <>
        {TodoList.length !== 0 && (
            <>
            <TodoTitle title={title} as={as}/>
            <ul>
                {TodoList.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} key={todo.id} 
                        toggleTodoListItemStatus={toggleTodoListStatus}
                        deleteTodoListItem={deleteTodoListItem}/>
                    </li>
                ))}
            </ul>
            </>
        )}
        </>
    );
};