import React from 'react';
import TaskCard from "./TaskCard";

function Column(props) {

    return (
        <div>
            {props.tasks
                .filter(el => el.status === props.status)
                .map(el => <p><TaskCard key={el.id} task={el} onChangeStatus={props.onChangeStatus}
                                        onTaskDelete={props.onTaskDelete}
                                        onChangePriority={props.onChangePriority}
                /></p>)
            }
        </div>
    );
}

export default Column;
