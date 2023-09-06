export interface WrapperProps {
  totalTaskWidth: number;
}

export interface TaskTicketProps {
  id: string;
  timeFrom: Date;
  timeTill: Date;
  taskTitle: string;
  taskDescription: string;
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
  subTasks: Array<string>;
  doneStatus: boolean;
}
