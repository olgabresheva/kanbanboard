import React from 'react';
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

    return (
        <div>
            <div className="card">
                <div className="clearfix">
                    <span className="card-header bg-transparent border-primary">
                        P: {props.task.priority}</span>
                    {props.task.priority !== 'High' &&
                    <span onClick={() => props.onChangePriority({id: props.task.id, direction: 'up'})}
                    >{upBtn}</span>}
                    {props.task.priority !== 'Low' &&
                    <span onClick={() => props.onChangePriority({id: props.task.id, direction: 'down'})}
                    >{downBtn}</span>}
                </div>

                <div className="card-body">
                    <div>
                        {props.task.name}
                    </div>
                    <p/>
                    <div className="clearfix">
                        <TaskDeleteAlertConfirm onTaskDelete={props.onTaskDelete}
                                                task={props.task}/>

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
