import useLocalStorage from './useLocalStorage';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('student-tasks', []);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((t) => t.isCompleted).length;

  return (
    <div className="min-h-screen bg-slate-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-100 tracking-tight">
            Student Task Board
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            {tasks.length === 0
              ? 'Nothing here yet'
              : `${completedCount} of ${tasks.length} task${tasks.length !== 1 ? 's' : ''} complete`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700 p-6">
          <TaskInput onAdd={addTask} />
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
