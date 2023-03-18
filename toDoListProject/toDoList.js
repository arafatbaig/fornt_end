const form = document.querySelector('form');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();

  if (taskText.length > 0) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', (e) => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});
