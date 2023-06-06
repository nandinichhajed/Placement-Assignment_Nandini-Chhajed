import React from "react";
const CompletedList = ({ todos, deleteTask }) => {
  return (
    <div className="card w-full bg-base-300 shadow-xl h-full">
      <div className="card-body">
        <h3 className="text-2xl">👉 Completed</h3>
        <div
          className="w-full mx-auto 
          "
        >
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
                      onClick={() => deleteTask(todo.id)}
                    >
                      Delete
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

export default CompletedList;
