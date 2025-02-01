import { useState } from "react";
import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
   
    const [tasks, setTasks] = useImmer([]);

 

    

    return (
        <div>
            <TaskForm setTasks={setTasks} />
            <TaskList tasks={tasks} />
        </div>
    )
}