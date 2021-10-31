import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Haircut',
      day: 'Feb 6th at 4:00pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Dentist Appt',
      day: 'Feb 7th at 7:30am',
      reminder: true
    },
    {
      id: 1,
      text: 'Shopping',
      day: 'Feb 8th at 2:30pm',
      reminder: false
    }
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask} 
          onToggle={toggleReminder}
          />)
        : ('You have no tasks!')}
      
    </div>
  );
}

export default App;
