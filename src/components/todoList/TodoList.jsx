import React, { useEffect, useState } from 'react'
import styles from '../todoList/todoList.module.css'
import TodoItem from '../todoItem/TodoItem'

const TodoList = (props) => {

  const [tasks, setTasks] = useState([])
  const [removeElement, setRemove] = useState(tasks)

  useEffect(() => {

    try {
      fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then(data => setTasks(data))
    } catch (error) {
      console.log(error)
    }
  }, [removeElement])


  return (
    <>
        <div className={styles.list}>
            <TodoItem setBody={props.setBody} setModal={props.setModal} tasks={tasks} setTasks={setTasks} setRemove={setRemove}/>
        </div>
    </>
  )
}

export default TodoList