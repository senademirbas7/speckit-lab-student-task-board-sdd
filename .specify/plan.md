# Implementation Plan: Task Board

## Architecture
- `App.tsx`: Main container and state management.
- `TaskInput.tsx`: Form component for new tasks.
- `TaskList.tsx`: Renders the list of tasks.
- `useLocalStorage.ts`: Custom hook for persistence logic.

## Data Schema
```typescript
interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}