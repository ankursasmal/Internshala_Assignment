 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../style/TodoTable.module.css';
import { addUser, delUser, editUser } from '../Redux/UserSlice';

const TodoTable = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.user.value);

  const [newTask, setNewTask] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');
  const [editTask, setEditTask] = useState('');
  const [editTaskDate, setEditTaskDate] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (newTask && newTaskDate) {
      const newTaskObject = {
        task: newTask,
        date: newTaskDate,
        serialNo: todos.length + 1,
      };
      dispatch(addUser(newTaskObject));
      setNewTask('');
      setNewTaskDate('');
    }
  };

  const handleEdit = (id, task, date) => {
    setEditId(id);
    setEditTask(task);
    setEditTaskDate(date);
  };

  const handleSaveEdit = () => {
    if (editTask && editTaskDate) {
      dispatch(editUser({ id: editId, task: editTask, date: editTaskDate }));
      setEditTask('');
      setEditTaskDate('');
      setEditId(null);
    }
  };

  const handleDelete = (id) => {
    console.log(id);  
    dispatch(delUser(id));
  };

useEffect(()=>{

},[])

  return (
    <div className={styles.container}>
      <h2>Todo List</h2>
      <input
        style={{ marginBottom: '5px' }}
        type="text"
        placeholder="Task Name"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className={styles.input}
      />
      <input
        type="date"
        value={newTaskDate}
        onChange={(e) => setNewTaskDate(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleAdd} className={styles.addButton}>
        Add Task
      </button>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Task</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.serialNo}</td>
              <td>
                {editId === todo.id ? (
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className={styles.input}
                  />
                ) : (
                  todo.task
                )}
              </td>
              <td>
                {editId === todo.id ? (
                  <input
                    type="date"
                    value={editTaskDate}
                    onChange={(e) => setEditTaskDate(e.target.value)}
                    className={styles.input}
                  />
                ) : (
                  todo.date
                )}
              </td>
              <td>
                {editId === todo.id ? (
                  <button onClick={handleSaveEdit} className={styles.editButton}>
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo.id, todo.task, todo.date)}
                    className={styles.editButton}
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(todo.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
