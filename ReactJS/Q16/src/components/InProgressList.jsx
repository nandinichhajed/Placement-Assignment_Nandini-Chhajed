import React from "react";

const InProgressList = ({ todos ,markComplete}) => {
  return (
    <div className="card w-full bg-base-300 shadow-xl h-full">
      <div className="card-body">
        <h3 className="text-2xl">👉 In Progress ...</h3>
        <div
          className="w-full mx-auto 
          "
        >
          {todos && todos.map((todo) => (
               <div className="card w-full bg-base-100 shadow-xl my-2 " key={todo.id}>
               <div className="card-body">
                 <h6 className="card-title text-xs">{Date.now()}</h6>
                 <p className="text-xl">{todo?.title}</p>
                 <div className="card-actions justify-end">
                   <div className="badge badge-warning" role="button" onClick={() => markComplete(todo.id)}>
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

export default InProgressList;
