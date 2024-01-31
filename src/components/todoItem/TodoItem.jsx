import React  from 'react'
import styles from '../todoItem/todoItem.module.css'


const TodoItem = (props) => {
  
  const deleteTaskApi = async (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    props.setTasks(props.tasks.sort(el => el._id === id))
    props.setRemove(props.tasks)
  }

  const execStatus = (target, check, elem) => {
    if (check) {
      target.setAttribute('disabled', 'true')
      props.setBody({...elem, status: check})
    }
  }

  const editTask = ({_id, task, taskName}) => {
    props.setBody({
      _id: _id,
      taskName: taskName,
      task: task,
      status: false
    })
    props.setModal(false)    
  } 

  return (
    <>
      {props.tasks && props.tasks.map(elem => { 
        return (
            <div className={styles.item} key={elem._id}>
              <input type='checkbox' defaultChecked={elem.status} id={elem._id} onClick={(event) => {execStatus(event.target, event.target.checked, elem)}}/>
              <label className={styles.task} htmlFor={elem._id}>{elem.taskName}</label>
              <button onClick={() => {editTask(elem)}}>✎</button>
              <button onClick={() => {deleteTaskApi(elem._id)}}>✘</button>
            </div>
      )})}
    </>
  )
}



export default TodoItem