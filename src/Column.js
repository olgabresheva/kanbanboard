import React from 'react';
import TaskCard from "./TaskCard";

function Column(props) {


    return (
        <div>
            {props.task
                .filter(el => el.status === props.status)
                .map(el => <TaskCard key={el.id} task={el} onChangeStatus={props.onChangeStatus}
                                     btnState={props.btnState} onBtnStateChange={props.onBtnStateChange}
                                     onTaskDelete={props.onTaskDelete}/>)
            }


        </div>
    );
}

export default Column;
