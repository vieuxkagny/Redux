import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    setTasks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTask, updateTask, toggleTask, setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
