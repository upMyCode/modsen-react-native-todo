import 'react-native-get-random-values';

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  taskTitle: string;
  taskDescription: string;
  taskImportantStatus: boolean;
  taskDateFrom: Date;
  taskDateTill: Date;
  taskTimeFrom: Date;
  taskTimeTill: Date;
  subTasks: Array<string>;
  doneStatus: boolean;
}

interface Tasks {
  tasks: Task[];
  doneTasks: Task[];
}

const initialState: Tasks = {
  tasks: [],
  doneTasks: [],
};

const tasksListSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        taskTitle: action.payload.taskTitle,
        taskDescription: action.payload.taskDescription,
        taskImportantStatus: action.payload.taskImportantStatus,
        taskDateFrom: action.payload.taskDateFrom,
        taskDateTill: action.payload.taskDateTill,
        taskTimeFrom: action.payload.taskTimeFrom,
        taskTimeTill: action.payload.taskTimeTill,
        subTasks: action.payload.subTasks,
        doneStatus: action.payload.doneStatus,
      });
    },

    setTaskAsDone: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload.id;
      });
      state.doneTasks.push(action.payload.task);
    },
    setTaskAsInProgress: (state, action) => {
      state.doneTasks = state.doneTasks.filter((task) => {
        return task.id !== action.payload.id;
      });

      state.tasks.push(action.payload.task);
    },
  },
});

export const { addNewTask, setTaskAsDone, setTaskAsInProgress } =
  tasksListSlice.actions;

export default tasksListSlice.reducer;
