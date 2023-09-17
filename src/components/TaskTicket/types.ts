export interface WrapperProps {
  totalTaskWidth: number;
}

export interface SubTask {
  id: string;
  subTaskText: string;
  doneStatus: boolean;
}

export interface ModalDate {
  fromDate: Date;
  tillDate: Date;
  fromTime: Date;
  tillTime: Date;
}
export interface TaskTicketProps {
  id: string;
  timeFrom: Date;
  task: Task;
  timeTill: Date;
  taskDateFrom: Date;
  taskDateTill: Date;
  taskTitle: string;
  taskDescription: string;
  sortTag: string;
  setChangedTaskStatusToActive: () => void;
  handleSetId: (id: string) => void;
  setModalName: React.Dispatch<React.SetStateAction<string>>;
  taskImportantStatus: boolean;
  subTasks: Array<SubTask>;
  doneStatus: boolean;
  setDate: React.Dispatch<React.SetStateAction<ModalDate>>;
  setModalTitle: React.Dispatch<React.SetStateAction<string>>;
  setModalTextContent: React.Dispatch<React.SetStateAction<string>>;
  setSubTaskList: React.Dispatch<React.SetStateAction<SubTask[]>>;
  setImportantTaskStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setTicketForChangeDoneStatus: React.Dispatch<React.SetStateAction<boolean>>;
  doneTasks: Task[];
  allTasks: Task[];
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
