import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'notDone') {
      return !task.isDone;
    } else {
      return true;
    }
  });

  return (
    <div className="task-list">
      <div>
        <button onClick={() => setFilter('all')}>Toutes</button>
        <button onClick={() => setFilter('done')}>Terminées</button>
        <button onClick={() => setFilter('notDone')}>Non terminées</button>
      </div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
