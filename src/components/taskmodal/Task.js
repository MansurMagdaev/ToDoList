import React from 'react'
import styles from '../taskmodal/Task.module.css'

const Task = (props) => {


  return (
    <div className={styles.task}>
        <span>Название задачи</span>
        <input type='text' onBlur={(e) => props.setBody({...props.bodyTask, taskName: e.target.value})} defaultValue={props.bodyTask.taskName || ''}/>
        <span>Описание</span>
        <textarea onBlur={(e) => props.setBody({...props.bodyTask, task: e.target.value})} defaultValue={props.bodyTask.task || ''}></textarea>
    </div>
  )
}

export default Task