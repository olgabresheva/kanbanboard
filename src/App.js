import React, {useState} from 'react';
import Column from './Column';
import {v4 as uuidv4} from 'uuid';

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
function App() {

    const initialtasks = [
        {
            id: uuidv4(),
            name: 'a1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            priority: 'High',
            status: 'To Do'
        },
        {
            id: uuidv4(),
            name: 'b2bbbbbbbbbbbbbbbbbbbbbbbbbb',
            priority: 'Low',
            status: 'To Do'
        },
        {
            id: uuidv4(),
            name: 'c3ccccccccccccccccccccccccc',
            priority: 'Medium',
            status: 'In Progress'
        },
        {
            id: uuidv4(),
            name: 'd4ddddddddddddddddddddddddd',
            priority: 'High',
            status: 'Done'
        },
        {
            id: uuidv4(),
            name: 'e5eeeeeeeeeeeeeeeeeeeeeeeeee',
            priority: 'Medium',
            status: 'In Review'
        },
    ]

    const [task, setTask] = useState(initialtasks);

    const [taskInput, setTaskInput] = useState('');
    const [isOpenTaskForm, setIsOpenTaskForm] = useState(false);

    const onClickCreateTask = () => {
        setIsOpenTaskForm(true);
    }

    const onCreateTaskCancel = () => {
        setIsOpenTaskForm(false);
        setTaskInput('');
        setIsActiveTaskCreateBtn(false);
        setIsOpenTaskForm(false);
    }

    const [isActiveTaskCreateBtn, setIsActiveTaskCreateBtn] = useState(true);

    const onInputChange = (e) => {
        (setIsActiveTaskCreateBtn(e.target.value.length < 4));
        setTaskInput(e.target.value);
    }

    const states = ['To Do', 'In Progress', 'In Review', 'Done'];

    const onChangeStatus = ({id, direction}) => {
        const updatedTasks = task.map(el => {
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
        setTask(updatedTasks);
    };

    const [btnState, setBtnState] = useState(true);

    const onBtnStateChange = (id) => {
        task.map(el => {
            if (el.id === id && el.status === 'To Do') {
                return setBtnState(false);
            }
        })
    }

    const onTaskDelete = (id) => {
        const taskListAfterDelete = task.filter(el => el.id !== id);
        setTask(taskListAfterDelete);
    }

    const onTaskCreate = (task) => {
        console.log(task);
        const afterTaskAdded = [...task];
        afterTaskAdded.push({id: uuidv4(), name: task, priority: 'High', status: 'To Do'});
        setTask(afterTaskAdded);
    }

    return (
        <div>
            <div className="container">
                <h1>Kanban</h1>

                {!isOpenTaskForm &&
                <button type="button" className="btn btn-primary" onClick={onClickCreateTask}>Create Task</button>}

                {isOpenTaskForm &&
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputTask">Task</label>
                        <input type="task" className="form-control" value={taskInput}
                               onChange={onInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary"
                            disabled={isActiveTaskCreateBtn}
                            onClick={onTaskCreate}>
                        Submit
                    </button>
                    <button type="cancel" className="btn btn-secondary" onClick={onCreateTaskCancel}>Cancel</button>
                </form>
                }
                <p/>

                <div className="row">
                    <div className="col-sm">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>To Do</h6>
                        </nav>
                        <Column task={task} status='To Do' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                    <div className="col-sm">
                        <nav className="card" className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>In Progress</h6>
                        </nav>
                        <Column task={task} status='In Progress' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                    <div className="col-sm">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>In Review</h6>
                        </nav>
                        <Column task={task} status='In Review' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                    <div className="col-sm">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <h6>Done</h6>
                        </nav>
                        <Column task={task} status='Done' onChangeStatus={onChangeStatus}
                                btnState={btnState} onBtnStateChange={onBtnStateChange}
                                onTaskDelete={onTaskDelete}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
