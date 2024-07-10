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
                <div
                  className="w-full rounded-lg p-2 border border-blue-300 mb-2 flex justify-between items-center"
                  key={item.id}
                >
                  <h1 className={`${item.isDone ? "line-through" : ""}`}>
                    {item.todo}
                  </h1>
                  <div className="flex">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        todoState.toggleTodo(item.id, e.target.checked)
                      }
                      checked={item.isDone}
                    />
                    {/* Lucide icon 활용 */}
                    <button onClick={() => todoState.deletTodo(item.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash-2 text-green-300 ml-2.5"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
