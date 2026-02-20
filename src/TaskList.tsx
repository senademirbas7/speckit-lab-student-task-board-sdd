import type { Task } from './App';

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
    if (tasks.length === 0) {
        return (
            <p className="text-center text-slate-500 py-8 italic">
                No tasks yet — add one above!
            </p>
        );
    }

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors group"
                >
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => onToggle(task.id)}
                        className="w-5 h-5 rounded accent-indigo-500 cursor-pointer flex-shrink-0"
                    />
                    <span
                        className={`flex-1 text-base transition-all duration-200 ${task.isCompleted
                                ? 'line-through text-slate-500'
                                : 'text-slate-100'
                            }`}
                    >
                        {task.text}
                    </span>
                    <button
                        onClick={() => onDelete(task.id)}
                        aria-label={`Delete task: ${task.text}`}
                        className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-400 transition-all duration-150 rounded focus:outline-none focus:opacity-100 focus:text-red-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
