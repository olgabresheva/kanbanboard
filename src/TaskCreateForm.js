import React from 'react';

function TaskCreateForm(props) {


    return (
        <div>

            {!props.isOpenTaskForm &&
            <button type="button" className="btn btn-primary" onClick={props.onClickCreateTask}>Create Task</button>}

            {props.isOpenTaskForm &&
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputTask">Task</label>
                    <input type="task" className="form-control" value={props.taskInput}
                           onChange={props.onInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary"
                        disabled={props.isActiveTaskCreateBtn}
                        onClick={props.onTaskCreate}>
                    Submit
                </button>
                <button type="cancel" className="btn btn-secondary" onClick={props.onCreateTaskCancel}>Cancel</button>
            </form>
            }
        </div>

    );
}

export default TaskCreateForm;
