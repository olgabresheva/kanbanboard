import React, {useState} from 'react';
import Column from './Column';
import {v4 as uuidv4} from 'uuid';
import TaskCreateForm from "./TaskCreateForm";

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
function App() {

    const initialtasks = [
        {
            id: uuidv4(),
            name: 'task 1: study!',
            priority: 'High',
            status: 'To Do'
        },
        {
            id: uuidv4(),
            name: 'task 2: study more!',
            priority: 'Low',
            status: 'To Do'
        },
        {
            id: uuidv4(),
            name: 'task 3: test',
            priority: 'Medium',
            status: 'In Progress'
        },
        {
            id: uuidv4(),
            name: 'task 4: read documentation',
            priority: 'High',
            status: 'Done'
        },
        {
            id: uuidv4(),
            name: 'task 5: practice',
            priority: 'Medium',
            status: 'In Review'
        },
    ]

    const [tasks, setTasks] = useState(initialtasks);

    const states = ['To Do', 'In Progress', 'In Review', 'Done'];

    const onChangeStatus = ({id, direction}) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'left') {
                    el.status = states[states.indexOf(el.status) - 1];
                }
                if (direction === 'right') {
                    el.status = states[states.indexOf(el.status) + 1];
                }
                return el
            } else return el;
        });
        setTasks(updatedTasks);
    };

    const [btnState, setBtnState] = useState(true);

    const onBtnStateChange = (id) => {
        tasks.map(el => {
            if (el.id === id && el.status === 'To Do') {
                return setBtnState(false);
            }
        })
    }

    const onTaskDelete = (id) => {
        const taskListAfterDelete = tasks.filter(el => el.id !== id);
        setTasks(taskListAfterDelete);
    }

    const onTaskCreate = (taskInput) => {
        console.log(taskInput);
        const updatedTaskList = [...tasks];
        updatedTaskList.push({id: uuidv4(), name: taskInput, priority: 'High', status: states[0]});
        setTasks(updatedTaskList);
    }


    return (
        <div>
            <div className="container">
                <h1>Kanban</h1>
                <TaskCreateForm onTaskCreate={onTaskCreate}/>

                <p/>

                <div className="row">
                    <div className="col-sm">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>To Do</h6>
                        </nav>
                        <Column tasks={tasks} status='To Do' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                    <div className="col-sm">
                        <nav className="card" className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>In Progress</h6>
                        </nav>
                        <Column tasks={tasks} status='In Progress' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                    <div className="col-sm">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>In Review</h6>
                        </nav>
                        <Column tasks={tasks} status='In Review' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                    <div className="col-sm">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>Done</h6>
                        </nav>
                        <Column tasks={tasks} status='Done' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
