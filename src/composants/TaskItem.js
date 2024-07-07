import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, toggleTask } from '../Store/tasksSlice';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id: task.id, description }));
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isDone ? 'done' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Mettre à jour</button>
        </form>
      ) : (
        <div>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.isDone ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
