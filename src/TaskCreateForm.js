import React, {useState} from 'react';

function TaskCreateForm(props) {

    const [taskInput, setTaskInput] = useState('');
    const [isActiveTaskCreateBtn, setIsActiveTaskCreateBtn] = useState(true);


    const onInputChange = (e) => {
        (setIsActiveTaskCreateBtn(e.target.value.length < 4));
        setTaskInput(e.target.value);
    }

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

    const taskCreate = (e) => {
        e.preventDefault();
        {
            props.onTaskCreate(taskInput)
        }
        ;
        setTaskInput('');
    }

    return (
        <div>

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
                        onClick={taskCreate}
                        disabled={isActiveTaskCreateBtn}>
                    Submit
                </button>
                <button type="cancel" className="btn btn-secondary" onClick={onCreateTaskCancel}>Cancel</button>
            </form>
            }
        </div>

    );
}

export default TaskCreateForm;
