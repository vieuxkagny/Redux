import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Store/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      dispatch(addTask({ id: uuidv4(), description, isDone: false }));
      setDescription('');
    } else {
      alert('Veuillez remplir la description.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Ajouter Tâche</button>
    </form>
  );
};

export default AddTask;
