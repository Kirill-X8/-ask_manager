let task = 'Изучить JS';

let completedTaskCount = 0;

function showTask(task) {
  if (task === '') {
    console.log('Задача отсутствует');
  } else {
    console.log(`Задача: ${task}`);
  }
}
showTask(task);


function setTask(taskDescription) {
  if (task !== '') {
    console.log('Не могу добавить задачу, завершите или удалите предыдущую');
  } else {
    task = taskDescription;
  }
}
setTask('Изучить React');
console.log(task);


function compleTask() {
  if (task === '') {
    console.log('Нет задачи');
  } else {
    task = '';
    completedTaskCount++;
  }
}
compleTask();
console.log(task);
console.log(completedTaskCount);


function deleteTask() {
  if (task === '') {
    console.log('Удалять нечего, задача отсутствует');
  } else {
    task = ''
    console.log('Задача удалена');
  }
}
deleteTask();

