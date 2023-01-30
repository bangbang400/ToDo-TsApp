import axios from "axios";
import {Todo} from "../types/Todo";

// サーバAPIとのアクセス
const todoDataUrl = "http://localhost:3100/todos";


// 全てのリストを取得する
export const getAllData = async() => {
    const response = await axios.get(todoDataUrl);
    return response.data;
}

// 1件のTODOを追加
export const addData = async (todo: Todo) => {
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
}
// 1件削除
export const deleteTodoData = async (id: string) => {
    await axios.delete('${todoDataUrl}/${id}');
    return id;
}
// 1件更新
export const updateData = async (id: string, todo: Todo) => {
    const response = await axios.put('${todoDataUrl}/${id}', todo);
    return response.data;
}