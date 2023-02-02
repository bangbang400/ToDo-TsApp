import { Todo } from '../types/Todo';
import { deleteTodoData } from '../apis/todos';


export const TodoItem = ({todo, toggleTodoListItemStatus, deleteTodoListItem}: {todo: Todo; toggleTodoListItemStatus: any; deleteTodoListItem: any}) => {
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
    const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

    return (
        <>
        {todo.content}
        <button onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
        <button onClick={handleDeleteTodoListItem}>削除</button>
        </>
    );
};