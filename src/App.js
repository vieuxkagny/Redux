import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './composants/AddTask';
import TaskList from './composants/TaskList';
import { setTasks } from './Store/tasksSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch(setTasks(storedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>Gestionnaire de Tâches</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
