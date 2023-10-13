import { useState } from "react";



function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAdd = () => {
        setTasks((items) => [...items, task])
        setTask('')
    };

    const handleRemove = (item) => {
        setTasks(tasks.filter(task => task !== item))
        // console.log(item);
    }
    return (
        <div>
            <input
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button> <br />
            <ul>
                {
                    tasks.map(
                        (task, index) => <li key={index}>{task} <button onClick={() => handleRemove(task)}>X</button></li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;