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

export const importantTaskListFilter = (tasks: Task[]) => {
  return tasks.filter((task: Task) => {
    return task.taskImportantStatus;
  });
};

export const taskInCurrentDayFilter = (tasks: Task[]) => {
  const currentDateDay = new Date().getDate();

  return tasks.filter((task: Task) => {
    return (
      task.taskDateFrom.getDate() === currentDateDay &&
      task.taskDateTill.getDate() === currentDateDay
    );
  });
};

export const taskInCurrentMonthFilter = (tasks: Task[]) => {
  const currentDate = new Date();

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return tasks.filter((task: Task) => {
    return (
      (task.taskDateTill.getMonth() === month + 1 &&
        task.taskDateTill.getFullYear() === year) ||
      (task.taskDateTill.getMonth() === month &&
        task.taskDateTill.getFullYear() === year)
    );
  });
};
