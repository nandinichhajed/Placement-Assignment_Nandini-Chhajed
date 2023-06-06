import { useState } from "react";
import TodoList from "../components/TodoList";
import InProgressList from "../components/InProgressList";
import CompletedList from "../components/CompletedList";
import todos from "../data";
// import Navbar from "../components/Navbar";

const Home = () => {
    const [tasks, setTasks] = useState(todos);
    const [inProgressTasks, setInProgressTasks] = useState(
        tasks.filter(
            (task) => task.completed === false && task.isInProgress === true
        )
    );
    const [completedTodos, setCompletedTodos] = useState(
        tasks.filter(
            (task) => task.completed === true && task.isInProgress === false
        )
    );

    // function to mark todo as complete
    const markComplete = (id) => {
        const todo = tasks.find((todo) => todo.id === id);
        todo.completed = true;
        setInProgressTasks(inProgressTasks.filter((task) => task.id !== id));
        setCompletedTodos([todo, ...completedTodos]);
    };

    // function to mark the task as in progress
    const markInProgress = (id) => {
        const todo = tasks.find((todo) => todo.id === id);
        todo.isInProgress = true;
        setInProgressTasks([todo, ...inProgressTasks]);
    };

    // function to delete the task.
    const deleteTask = (id) => {
        setCompletedTodos(completedTodos.filter((task) => task.id !== id));
    };

    // function to add new task
    const setNewTodo = (todo) => {
        setTasks([todo, ...tasks]);
    };

    return (
        <>
            <div className="flex flex-col  items-center justify-center ">
                <div className="container mx-auto px-4 my-4   ">
                    <div className="grid md:grid-cols-12 gap-4 mx-auto ">
                        <div className="md:col-span-4  middle  ">
                            <TodoList
                                todos={tasks.filter(
                                    (todo) =>
                                        todo.completed === false &&
                                        todo.isInProgress === false
                                )}
                                markComplete={markComplete}
                                markInProgress={markInProgress}
                                setNewTodo={setNewTodo}
                            />
                        </div>
                        <div className="md:col-span-4  middle ">
                            <InProgressList
                                todos={inProgressTasks}
                                markComplete={markComplete}
                            />
                        </div>
                        <div className="md:col-span-4  middle ">
                            <CompletedList
                                todos={completedTodos}
                                deleteTask={deleteTask}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
