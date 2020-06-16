import React from 'react';
import TaskCard from "./TaskCard";

function Column(props) {

    return (
        <div>
            {props.tasks
                .filter(el => el.status === props.status)
                .map(el => <p key={el.id}><TaskCard key={el.id} task={el} onChangeStatus={props.onChangeStatus}
                                        onTaskDelete={props.onTaskDelete}
                                        onChangePriority={props.onChangePriority}
                                        onSaveTask={props.onSaveTask}
                /></p>)
            }
        </div>
    );
}

export default Column;
