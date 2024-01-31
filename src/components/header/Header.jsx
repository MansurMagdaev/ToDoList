import React from 'react'
import styles from '../header/Header.module.css'

export const Header = (props) => {

  const resetTask = () => {
    
    props.setModal(true)
    props.setBody({
      taskName: null,
      task: null,
      status: false
    })
  }

  const apiAddTask = async (body, method) => {
    if (body.taskName && body.task) {
      try {
        fetch(`http://localhost:5000/tasks${body._id ? '/' + body._id : ''}`, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
      } catch (error) {
          console.log(error) 
      }
    }
    resetTask()
  }

  return (
    <>
        <h1 className={styles.header}>Планировшик задач</h1>
        {
        props.modal 
        ? 
          <div className={styles.choose}>
          <select>
            <option>Все задачи</option>
            <option>Выполненные задачи</option>
            <option>Неполненные задачи</option>
          </select>
          <button onClick={() => {props.setModal(!props.modal)}}>Новая задача</button>
          </div>
        :
            props.bodyTask._id
            ?
            <>
              <button className={styles.addBut} onClick={() => {apiAddTask(props.bodyTask, 'PATCH')}}>Изменить</button>
              <button className={styles.addBut} onClick={resetTask}>Отмена</button> 
            </>
            :
            <>
              <button className={styles.addBut} onClick={() => {apiAddTask(props.bodyTask, 'POST')}}>Добавить</button>
              <button className={styles.addBut} onClick={resetTask}>Отмена</button> 
            </>
        }
    </>
  )
}
