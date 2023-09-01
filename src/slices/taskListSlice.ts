import { createSlice } from '@reduxjs/toolkit';

interface Task {
  id: string;
  taskTitle: string;
  taskDescription: string;
  taskImportantStatus: boolean;
  taskDateFrom: Date;
  taskDateTill: Date;
  taskTimeFrom: Date;
  taskTimeTill: Date;
}

interface Tasks {
  tasks: Task[];
}

const initialState: Tasks = {
  tasks: [],
};

let id = 0;

const tasksListSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      id += 1;
      state.tasks.push({
        id: id.toString(),
        taskTitle: action.payload.taskTitle,
        taskDescription: action.payload.taskDescription,
        taskImportantStatus: action.payload.taskImportantStatus,
        taskDateFrom: action.payload.taskDateFrom,
        taskDateTill: action.payload.taskDateTill,
        taskTimeFrom: action.payload.taskTimeFrom,
        taskTimeTill: action.payload.taskTimeTill,
      });
    },
  },
});

export const { addNewTask } = tasksListSlice.actions;

export default tasksListSlice.reducer;
