export interface Task {
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

export interface SubTaskItemProps {
  subtask: string;
  idSubtask: string;
  idTask: string;
  task: Task;
}
