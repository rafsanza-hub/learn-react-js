import { useState } from "react";

export default function TaskForm({setTasks}) {
    const [task, setTask] = useState("");

    function handleTaskChange(e) {
        setTask(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTasks((draft) => {
            draft.push(task);
            setTask("");
        })
    }
    return (
        <>
            <h1>Form Task</h1>
            <form>
                <input type="text" value={task} onChange={handleTaskChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}