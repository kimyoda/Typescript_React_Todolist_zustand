import { useState } from "react";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[600px] p-3 rounded-md shadow-lg bg-[#242424]">
          <h1 className="font-bold text-3xl">Todos</h1>
          <p>Add your daily task</p>

          <form action="">
            <div className="mt-5">
              <input
                type="text"
                className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-red-400 border border-red-400"
                placeholder="할일을 입력해주세요"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
