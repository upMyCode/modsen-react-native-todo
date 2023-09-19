import {
  importantTaskListFilter,
  searchReadCategory,
  searchSchoolCategory,
  searchShopCategory,
  searchWorkCategory,
  taskInCurrentDayFilter,
  taskInCurrentMonthFilter,
  taskInCurrentWeekFilter,
  userCategory,
  workOutCategory,
} from '@src/helpers/filters';
import { useAppSelector } from '@src/store/hooks';

export interface SubTask {
  id: string;
  subTaskText: string;
  doneStatus: boolean;
}
interface Task {
  id: string;
  taskTitle: string;
  taskDescription: string;
  taskImportantStatus: boolean;
  taskDateFrom: Date;
  taskDateTill: Date;
  taskTimeFrom: Date;
  taskTimeTill: Date;
  subTasks: Array<SubTask>;
  doneStatus: boolean;
}

export default function useGetTasksCategoriesLists(
  sortTag?: string,
  searchData?: string
) {
  const ALL_TASKS_PRELOAD: Task[] = useAppSelector((state) => {
    return state.tasksListSlice.tasks;
  });
  const DONE_TASKS_PRELOAD: Task[] = useAppSelector((state) => {
    return state.tasksListSlice.doneTasks;
  });

  const DATE_CATEGORY = useAppSelector((state) => {
    return state.addDateCategorySlice.dateCategory;
  });
  const categories = useAppSelector((state) => {
    return state.categoriesListReducer.categories;
  });

  interface CATEGORIES {
    [key: string]: number;
  }

  let MAIN_MENU_DEFAULT_FILTER_CATEGORIES: CATEGORIES = {
    readCategory: searchReadCategory(ALL_TASKS_PRELOAD).length,
    schoolCategory: searchSchoolCategory(ALL_TASKS_PRELOAD).length,
    workCategory: searchWorkCategory(ALL_TASKS_PRELOAD).length,
    shopCategory: searchShopCategory(ALL_TASKS_PRELOAD).length,
    workOutCategory: workOutCategory(ALL_TASKS_PRELOAD).length,
  };

  const addCategory = (tasks: Task[]) => {
    for (let i = 0; i < categories.length; i += 1) {
      const categoryName = categories[i].taskCategoryName;

      MAIN_MENU_DEFAULT_FILTER_CATEGORIES[categoryName] = userCategory(
        tasks,
        categoryName
      ).length;
    }
  };

  addCategory(ALL_TASKS_PRELOAD);

  let IMPORTANT_TASK_LIST: Task[] = importantTaskListFilter(ALL_TASKS_PRELOAD);
  let DONE_TASKS: Task[] = DONE_TASKS_PRELOAD;
  let ALL_TASKS: Task[] = ALL_TASKS_PRELOAD;

  const getCustomCategories = (tasks: Task[]) => {
    for (let i = 0; i < categories.length; i += 1) {
      if (categories[i].taskCategoryName === sortTag) {
        if (sortTag) {
          const CUSTOM = userCategory(tasks, sortTag);

          ALL_TASKS = CUSTOM;
        }
      }
    }
  };

  function sortByTagCategory(
    tag: string,
    taskListByDate: Task[],
    doneTaskListByDate: Task[]
  ) {
    switch (tag) {
      case 'important':
        IMPORTANT_TASK_LIST = importantTaskListFilter(taskListByDate);
        break;
      case 'done': {
        DONE_TASKS = doneTaskListByDate;
        break;
      }
      case 'daily': {
        const DONE_TASK_IN_CURRENT_DAY =
          taskInCurrentDayFilter(DONE_TASKS_PRELOAD);
        const TASK_IN_CURRENT_DAY = taskInCurrentDayFilter(ALL_TASKS_PRELOAD);

        ALL_TASKS = TASK_IN_CURRENT_DAY;
        DONE_TASKS = DONE_TASK_IN_CURRENT_DAY;
        break;
      }
      case 'read': {
        ALL_TASKS = searchReadCategory(taskListByDate);
        break;
      }
      case 'school': {
        ALL_TASKS = searchSchoolCategory(taskListByDate);
        break;
      }
      case 'work': {
        ALL_TASKS = searchWorkCategory(taskListByDate);
        break;
      }
      case 'shop': {
        ALL_TASKS = searchShopCategory(taskListByDate);
        break;
      }
      case 'workout': {
        ALL_TASKS = workOutCategory(taskListByDate);
        break;
      }
      case 'search': {
        if (searchData) {
          ALL_TASKS = userCategory(taskListByDate, searchData);
        }
        break;
      }
      default:
        getCustomCategories(taskListByDate);
    }
  }

  if (DATE_CATEGORY === 'Today') {
    const TASK_IN_CURRENT_DAY = taskInCurrentDayFilter(ALL_TASKS_PRELOAD);
    const TASK_IN_CURRENT_DAY_DONE = taskInCurrentDayFilter(DONE_TASKS_PRELOAD);
    ALL_TASKS = TASK_IN_CURRENT_DAY;

    MAIN_MENU_DEFAULT_FILTER_CATEGORIES = {
      readCategory: searchReadCategory(TASK_IN_CURRENT_DAY).length,
      schoolCategory: searchSchoolCategory(TASK_IN_CURRENT_DAY).length,
      workCategory: searchWorkCategory(TASK_IN_CURRENT_DAY).length,
      shopCategory: searchShopCategory(TASK_IN_CURRENT_DAY).length,
      workOutCategory: workOutCategory(TASK_IN_CURRENT_DAY).length,
    };

    addCategory(TASK_IN_CURRENT_DAY);

    if (sortTag) {
      sortByTagCategory(sortTag, TASK_IN_CURRENT_DAY, TASK_IN_CURRENT_DAY_DONE);
    }
  } else if (DATE_CATEGORY === 'Month') {
    const TASK_IN_CURRENT_MONTH = taskInCurrentMonthFilter(ALL_TASKS_PRELOAD);
    const TASK_IN_CURRENT_MONTH_DONE =
      taskInCurrentMonthFilter(DONE_TASKS_PRELOAD);

    ALL_TASKS = TASK_IN_CURRENT_MONTH;

    MAIN_MENU_DEFAULT_FILTER_CATEGORIES = {
      readCategory: searchReadCategory(TASK_IN_CURRENT_MONTH).length,
      schoolCategory: searchSchoolCategory(TASK_IN_CURRENT_MONTH).length,
      workCategory: searchWorkCategory(TASK_IN_CURRENT_MONTH).length,
      shopCategory: searchShopCategory(TASK_IN_CURRENT_MONTH).length,
      workOutCategory: workOutCategory(TASK_IN_CURRENT_MONTH).length,
    };

    addCategory(TASK_IN_CURRENT_MONTH);

    if (sortTag) {
      sortByTagCategory(
        sortTag,
        TASK_IN_CURRENT_MONTH,
        TASK_IN_CURRENT_MONTH_DONE
      );
    }
  } else if (DATE_CATEGORY === 'Week') {
    const TASK_IN_CURRENT_WEEK = taskInCurrentWeekFilter(ALL_TASKS_PRELOAD);
    const TASK_IN_CURRENT_WEEK_DONE =
      taskInCurrentWeekFilter(DONE_TASKS_PRELOAD);

    ALL_TASKS = TASK_IN_CURRENT_WEEK;

    MAIN_MENU_DEFAULT_FILTER_CATEGORIES = {
      readCategory: searchReadCategory(TASK_IN_CURRENT_WEEK).length,
      schoolCategory: searchSchoolCategory(TASK_IN_CURRENT_WEEK).length,
      workCategory: searchWorkCategory(TASK_IN_CURRENT_WEEK).length,
      shopCategory: searchShopCategory(TASK_IN_CURRENT_WEEK).length,
      workOutCategory: workOutCategory(TASK_IN_CURRENT_WEEK).length,
    };

    addCategory(TASK_IN_CURRENT_WEEK);

    if (sortTag) {
      sortByTagCategory(
        sortTag,
        TASK_IN_CURRENT_WEEK,
        TASK_IN_CURRENT_WEEK_DONE
      );
    }
  } else if (DATE_CATEGORY === 'all') {
    if (sortTag) {
      sortByTagCategory(sortTag, ALL_TASKS_PRELOAD, DONE_TASKS_PRELOAD);
    }
  }

  return {
    IMPORTANT_TASK_LIST,
    DONE_TASKS,
    ALL_TASKS,
    MAIN_MENU_DEFAULT_FILTER_CATEGORIES,
  };
}
