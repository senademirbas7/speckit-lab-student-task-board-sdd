# Feature Spec: Core Task Board

## Description
A single-page application that allows students to manage their daily academic tasks with persistence.

## Functional Requirements
1. **Task Creation:** Users can input a task title and add it to the list.
2. **Completion Toggle:** Users can click a checkbox to mark a task as done (ui: strikethrough).
3. **Deletion:** Users can remove a task from the list.
4. **Data Persistence:** Use `window.localStorage` to save and load tasks.

## User Interface
- A clean header: "Student Task Board".
- An input field with an "Add" button.
- A list displaying tasks with a checkbox and a delete icon.