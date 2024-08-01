import React, { useState } from 'react';
import './TodoList.css'
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className='Container'>
      <h1 className='Title'>TO-DO LIST</h1>
      <div className='Entry-Feild'>
      <input 
        className='Input'
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Add a new task" 
      />
      <button className='ADD-BTN' onClick={handleAddTask} >Add</button>
      </div>
     
      <ul className='UL-list'>
        {tasks.map((task, index) => (
          <li className='List' key={index} >
            {task}
           <img className='Delete' onClick={() => handleDeleteTask(index)} 
            src="src/assets/delete.png" alt="" />             
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
