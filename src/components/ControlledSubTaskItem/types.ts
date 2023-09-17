export interface SubTask {
  id: string;
  subTaskText: string;
  doneStatus: boolean;
}
export interface Task {
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

export interface SubTaskItemProps {
  subtask: string;
  idSubtask: string;
  idTask: string;
  task: Task;
}
