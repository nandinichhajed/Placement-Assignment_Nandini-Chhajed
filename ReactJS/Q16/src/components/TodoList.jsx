import React from "react";
import AddTaskForm from "./AddTaskForm";

const TodosList = ({ todos, markComplete, markInProgress, setNewTodo }) => {
  return (
    <div className="card w-full bg-base-300 shadow-xl h-full ">
      <div className="card-body ">
        <h3 className="text-2xl mb-5">👉 Todos</h3>
        <div
          className="w-full mx-auto 
          "
        >
          <AddTaskForm setNewTodo={setNewTodo} />
          {todos &&
            todos.map((todo) => (
              <div
                className="card w-full bg-base-100 shadow-xl my-2 "
                key={todo.id}
              >
                <div className="card-body">
                  <h6 className="card-title text-xs">{Date.now()}</h6>
                  <p className="text-xl">{todo?.title}</p>
                  <div className="card-actions justify-end">
                    <div
                      className="badge badge-primary "
                      role="button"
                      onClick={() => markInProgress(todo.id)}
                    >
                      In Progress...
                    </div>
                    <div
                      className="badge badge-warning"
                      role="button"
                      onClick={() => markComplete(todo.id)}
                    >
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodosList;
