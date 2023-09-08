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
  const year = currentDate.getFullYear();

  return tasks.filter((task: Task) => {
    return (
      task.taskDateTill.getFullYear() === year &&
      task.taskDateTill.getMonth() === currentDate.getMonth()
    );
  });
};

const getWeek = (date: Date) => {
  const startDate = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));

  return Math.ceil(days / 7);
};

export const taskInCurrentWeekFilter = (tasks: Task[]) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return tasks.filter((task: Task) => {
    const currentWeek = getWeek(currentDate);
    const taskWeek = getWeek(task.taskDateTill);

    return task.taskDateTill.getFullYear() === year && currentWeek === taskWeek;
  });
};

export const searchReadCategory = (tasks: Task[]) => {
  const re = /read| read[A-Za-z]*|book| book/gi;

  return tasks.filter((task) => {
    return re.test(task.taskTitle) || re.test(task.taskDescription);
  });
};

export const searchSchoolCategory = (tasks: Task[]) => {
  const re =
    /school|teacher|subject[A-Za-z]*|lesson[A-Za-z]*|pupil[A-Za-z]|homework[A-Za-z]*]/gi;

  return tasks.filter((task) => {
    return re.test(task.taskTitle) || re.test(task.taskDescription);
  });
};

export const searchWorkCategory = (tasks: Task[]) => {
  const re = /work[A-Za-z]*|salary|job[A-Za-z]*|boss[A-Za-z]*|money[A-Za-z]/gi;

  return tasks.filter((task) => {
    return re.test(task.taskTitle) || re.test(task.taskDescription);
  });
};

export const searchShopCategory = (tasks: Task[]) => {
  const re = /shop[A-Za-z]*|market[A-Za-z]*|store|buy[A-Za-z]*|money[A-Za-z]/gi;

  return tasks.filter((task) => {
    return re.test(task.taskTitle) || re.test(task.taskDescription);
  });
};

export const workOutCategory = (tasks: Task[]) => {
  const re =
    /horizontal bar[A-Za-z]*|gym|muscles|dumbbell[A-Za-z]*|barbell[A-Za-z]/gi;

  return tasks.filter((task) => {
    return re.test(task.taskTitle) || re.test(task.taskDescription);
  });
};

export const userCategory = (tasks: Task[], tag: string) => {
  const re = new RegExp(tag, 'gi');

  return tasks.filter((task) => {
    return re.test(task.taskTitle) || re.test(task.taskDescription);
  });
};
