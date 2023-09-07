import {
  importantTaskListFilter,
  taskInCurrentDayFilter,
  taskInCurrentMonthFilter,
} from '@src/helpers/filters';
import { useAppSelector } from '@src/store/hooks';

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

export default function useGetTasksCategoriesLists(sortTag?: string) {
  const ALL_TASKS_PRELOAD: Task[] = useAppSelector((state) => {
    return state.tasksListSlice.tasks;
  });
  const DONE_TASKS_PRELOAD: Task[] = useAppSelector((state) => {
    return state.tasksListSlice.doneTasks;
  });
  const DATE_CATEGORY = useAppSelector((state) => {
    return state.addDateCategorySlice.dateCategory;
  });

  let IMPORTANT_TASK_LIST: Task[] = importantTaskListFilter(ALL_TASKS_PRELOAD);
  let DONE_TASKS: Task[] = DONE_TASKS_PRELOAD;
  let ALL_TASKS: Task[] = ALL_TASKS_PRELOAD;

  if (DATE_CATEGORY === 'Today') {
    if (sortTag) {
      if (sortTag === 'important') {
        const TASK_IN_CURRENT_DAY = taskInCurrentDayFilter(ALL_TASKS_PRELOAD);

        IMPORTANT_TASK_LIST = importantTaskListFilter(TASK_IN_CURRENT_DAY);
      }
      if (sortTag === 'done') {
        const DONE_TASK_IN_CURRENT_DAY =
          taskInCurrentDayFilter(DONE_TASKS_PRELOAD);

        DONE_TASKS = DONE_TASK_IN_CURRENT_DAY;
      }
      if (sortTag === 'daily') {
        const DONE_TASK_IN_CURRENT_DAY =
          taskInCurrentDayFilter(DONE_TASKS_PRELOAD);
        const TASK_IN_CURRENT_DAY = taskInCurrentDayFilter(ALL_TASKS_PRELOAD);

        ALL_TASKS = TASK_IN_CURRENT_DAY;
        DONE_TASKS = DONE_TASK_IN_CURRENT_DAY;
      }
    }
  } else if (DATE_CATEGORY === 'Month') {
    if (sortTag) {
      if (sortTag === 'important') {
        const TASK_IN_CURRENT_MONTH =
          taskInCurrentMonthFilter(ALL_TASKS_PRELOAD);

        IMPORTANT_TASK_LIST = importantTaskListFilter(TASK_IN_CURRENT_MONTH);
      }
      if (sortTag === 'done') {
        const DONE_TASK_IN_CURRENT_MONTH =
          taskInCurrentMonthFilter(DONE_TASKS_PRELOAD);

        console.log(DONE_TASK_IN_CURRENT_MONTH);

        DONE_TASKS = DONE_TASK_IN_CURRENT_MONTH;
      }
      if (sortTag === 'daily') {
        const DONE_TASK_IN_CURRENT_DAY =
          taskInCurrentDayFilter(DONE_TASKS_PRELOAD);
        const TASK_IN_CURRENT_DAY = taskInCurrentDayFilter(ALL_TASKS_PRELOAD);

        ALL_TASKS = TASK_IN_CURRENT_DAY;
        DONE_TASKS = DONE_TASK_IN_CURRENT_DAY;
      }
    }
  }

  return {
    IMPORTANT_TASK_LIST,
    DONE_TASKS,
    ALL_TASKS,
  };
}
