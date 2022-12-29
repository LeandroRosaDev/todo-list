import { Container, Input, Button, Flex, Spacer, Item } from './styles';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task) return alert('Preencha uma tarefa');
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };
  const removeTask = (id) => {
    const newList = tasks.filter((task) => task.id != id);
    setTasks(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newList = tasks;
    newList[index].checked = !checked;
    setTasks([...newList]);
  };
  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />
      <Flex>
        <Input
          value={task}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer />
      <ul>
        {tasks.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i className="bx bx-check"></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i className="bx bx-trash"></i>
                </button>
              </Flex>
            </Item>
            <Spacer />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;
