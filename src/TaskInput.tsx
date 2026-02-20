import { useState } from 'react';

interface TaskInputProps {
    onAdd: (text: string) => void;
}

function TaskInput({ onAdd }: TaskInputProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;
        onAdd(trimmed);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-2 rounded-lg border border-slate-600 bg-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
                type="submit"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                Add
            </button>
        </form>
    );
}

export default TaskInput;
