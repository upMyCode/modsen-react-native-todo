import {
  importantTaskListFilter,
  taskInCurrentDayFilter,
  taskInCurrentMonthFilter,
  taskInProcessDoneStatusFilter,
  taskIsDoneStatusFilter,
} from '@src/helpers/filters';
import { useAppSelector } from '@src/store/hooks';

export default function useGetTasksCategoriesLists() {
  const ALL_TASKS = useAppSelector((state) => {
    return state.tasksListSlice.tasks;
  });
  const DONE_TASKS = useAppSelector((state) => {
    return state.tasksListSlice.doneTasks;
  });

  const IMPORTANT_TASK_LIST = importantTaskListFilter(ALL_TASKS);
  const TASK_IS_DONE_STATUS = taskIsDoneStatusFilter(ALL_TASKS);
  const TASK_IN_PROCESS = taskInProcessDoneStatusFilter(ALL_TASKS);
  const TASK_IN_CURRENT_DAY = taskInCurrentDayFilter(ALL_TASKS);
  const TASK_IN_CURRENT_MONTH = taskInCurrentMonthFilter(ALL_TASKS);

  return {
    IMPORTANT_TASK_LIST,
    TASK_IS_DONE_STATUS,
    TASK_IN_PROCESS,
    ALL_TASKS,
    TASK_IN_CURRENT_DAY,
    TASK_IN_CURRENT_MONTH,
    DONE_TASKS,
  };
}
