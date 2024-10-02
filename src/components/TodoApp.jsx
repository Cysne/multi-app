import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 50px auto;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await fetchTasks();
      setTasks(storedTasks);
    };
    loadTasks();
  }, []);

  const addTask = () => {
    const newTask = { id: Date.now().toString(), text: newTaskText };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setNewTaskText('');
  };

  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const updateTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editingTaskText } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setEditingTaskId(null);
    setEditingTaskText('');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <Container>
      <Title>Todo App</Title>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={() => updateTask(task.id)}
              />
            ) : (
              <>
                {task.text}
                <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoApp;