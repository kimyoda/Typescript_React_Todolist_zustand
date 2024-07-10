import { useState } from "react";
import { todoStore } from "./state/todoStore";

function App() {
  const [todo, setTodo] = useState("");
  const todoState = todoStore();

  const randomId = (): number => {
    const min = 1000;
    const max = 9999;
    return Math.round(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length > 0) {
      todoState.addTodo({
        id: randomId(),
        todo: todo,
        isDone: false,
      });
      setTodo("");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[600px] p-3 rounded-md shadow-lg bg-[#242424]">
          <h1 className="font-bold text-3xl">Todos</h1>
          <p>Add your daily task</p>

          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <input
                type="text"
                value={todo}
                className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-red-400 border border-red-400"
                placeholder="할일을 입력해주세요"
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
          </form>
          {/* todo 리스트를 렌더링 */}
          <div className="mt-5">
            {todoState.todos.length > 0 &&
              todoState.todos.map((item) => (
                <div className="w-full rounded-lg p-2 border border-blue-300 mb-2 flex justify-between items-center">
                  <h1>{item.todo}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
