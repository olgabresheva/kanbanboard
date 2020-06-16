import React, {useState} from 'react';
import TaskDeleteAlertConfirm from "./TaskDeleteAlertConfirm";

function TaskCard(props) {

    const leftBtn = (
        <svg className="bi bi-arrow-left-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fillRule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
            <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
        </svg>);

    const rightBtn = (
        <svg className="bi bi-arrow-right-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fillRule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
            <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
        </svg>);

    const upBtn = (<svg className="bi bi-chevron-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>);

    const downBtn = (
        <svg className="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>);

    const editBtn = (<svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
        <path fillRule="evenodd"
              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
    </svg>);

    const saveBtn = (
        <svg className="bi bi-check2-all" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            <path
                d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
        </svg>
    );

    const cancelBtn = (<svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg>);

    const [taskEdit, setTaskEdit] = useState([]);

    const taskNameEditer = (task) => {
        setTaskEdit(task);
    }

    const onTaskEditChange = (e) => {
        setTaskEdit({...taskEdit, name: e.target.value});
    }

    const saveTask = () => {
        props.onSaveTask(taskEdit);
        setTaskEdit([]);
    }

    const editCancel = () => {
        setTaskEdit([]);
    }

    return (
        <div>
            <div className="card">
                <div className="clearfix card-header sm-transparent">
                    {props.task.priority !== 'Low' &&
                    <span className="text-left"
                          onClick={() => props.onChangePriority({id: props.task.id, direction: 'down'})}
                    >{downBtn}</span>}
                    <span> </span>
                    <span>P: {props.task.priority}</span>
                    <span> </span>
                    {props.task.priority !== 'High' &&
                    <span onClick={() => props.onChangePriority({id: props.task.id, direction: 'up'})}
                    >{upBtn}</span>}
                </div>

                <div className="card-body">
                    {taskEdit.id === props.task.id
                        ? <>
                            <input type="text" value={taskEdit.name} onChange={onTaskEditChange}/><br/>
                            <button className="btn btn-outline-primary btn-sm" onClick={saveTask}>{saveBtn}</button>
                            <button className="btn btn-outline-dark btn-sm"
                                    onClick={editCancel}>{cancelBtn}</button>
                        </>
                        : <div>{props.task.name}</div>
                    }
                    <p/>
                    <div className="clearfix">
                        <TaskDeleteAlertConfirm onTaskDelete={props.onTaskDelete}
                                                task={props.task}/>
                        <span className="float-left" onClick={() => taskNameEditer(props.task)}>{editBtn}</span>

                        {props.task.status !== 'Done' &&
                        <span className="float-right"
                              onClick={() => props.onChangeStatus({id: props.task.id, direction: 'right'})}>
                            {rightBtn}</span>}
                        {props.task.status !== 'To Do' &&
                        <span className="float-right" onClick={() => props.onChangeStatus({
                            id: props.task.id, direction: 'left'
                        })}>{leftBtn}</span>}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TaskCard;
