interface DateCategory {
  dateCategory: string;
}

interface Category {
  taskCategoryName: string;
}

interface Categories {
  categories: Category[];
}

interface ModalStatus {
  status: boolean;
}

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

interface Tasks {
  tasks: Task[];
  doneTasks: Task[];
}

export interface State {
  modalStatusReducer: ModalStatus;
  categoriesListReducer: Categories;
  tasksListSlice: Tasks;
  addDateCategorySlice: DateCategory;
}
