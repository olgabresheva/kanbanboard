import React from 'react';
import TaskCard from "./TaskCard";

function Column(props) {

    return (
        <div>
            {props.tasks
                .filter(el => el.status === props.status)
                .map(el => <TaskCard key={el.id} task={el} onChangeStatus={props.onChangeStatus}
                                     btnState={props.btnState} onBtnStateChange={props.onBtnStateChange}
                                     onTaskDelete={props.onTaskDelete}
                                     onChangePriority={props.onChangePriority}
                                     isPriorityBtnHidden={props.isPriorityBtnHidden}
                                     isStateBtnHidden={props.isStateBtnHidden}

                />)
            }

        </div>
    );
}

export default Column;
