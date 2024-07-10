import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type TodoType = {
  id: number;
  todo: string;
  isDone: boolean;
};
type States = {
  todos: Array<TodoType> | [];
};

type Actions = {
  addTodo: (todo: TodoType) => void;
  toggleTodo: (id: number, isChecked: boolean) => void;
  deletTodo: (id: number) => void;
};

// devtools 추가
export const todoStore = create<States & Actions>()(
  devtools(
    // persist 추가, 코드짤 때 중괄호 다시 한번 확인하기
    persist(
      (set) => ({
        todos: [],
        addTodo: (todo: TodoType) =>
          set((state) => ({ todos: [todo, ...state.todos] })),
        // 투두리스트 확인
        toggleTodo: (id: number, isChecked: boolean) =>
          set((state) => ({
            todos: state.todos.map((item) => {
              if (item.id === id) {
                item.isDone = isChecked;
              }
              return item;
            }),
          })),
        // 투두 리스트 삭제
        deletTodo: (id: number) =>
          set((state) => ({
            todos: state.todos.filter((item) => item.id !== id),
          })),
      }),
      //
      { name: "todoStore" }
    )
  )
);
