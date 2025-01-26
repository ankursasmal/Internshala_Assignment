# Todo App

A feature-rich Todo application that allows users to add, edit, and delete tasks. The application includes authentication features such as signup and login, leveraging Redux Toolkit for state management. Auth data and todos are persisted using localStorage.

## Features

### 1. Authentication
- **Signup:** Users can create an account by providing basic details.
- **Login:** Users can log in to access their personalized Todo list.
- **LocalStorage Integration:** Authentication state is persisted across page reloads using localStorage.

### 2. Todo List Management
- **Add Todo:** Users can create a new task with a task name and due date.
- **Edit Todo:** Users can edit existing tasks directly from the list.
- **Delete Todo:** Remove tasks that are no longer needed.
- **Persistent State:** All todos are managed using Redux Toolkit and persist across sessions.

### 3. Routing
- **Add Todo Page:** A dedicated route for adding new tasks.
- **Login Page:** Route for user login.
- **Signup Page:** Route for user signup.

## Tech Stack

- **Frontend Framework:** React.js
- **State Management:** Redux Toolkit
- **Styling:** CSS Modules
- **Authentication & Persistence:** LocalStorage

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository_link>
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd <project-directory-name>
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Access the App**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure

```plaintext
src/
|-- Redux/
|   |-- UserSlice.js          // Redux slice for managing todos and user state

|-- store/
|   |-- Store.js
|-- components/
    |-- TodoTable.jsx   // Todo list table with add, edit, delete functionality
|   |-- Login.jsx       // Route for user login
|   |-- Signup.jsx      // Route for user signup
|-- style/
    |-- TodoTable.module.css // CSS module for styling TodoTable
    |-- Login.module.css
```

## Key Functionality

### Add Todo
- Navigate to the "Add Todo" page and enter task details.
- Click "Add Task" to save the task. The task is stored in Redux and persisted in localStorage.

### Edit Todo
- Click the "Edit" button next to a task.
- Modify the task details and save the changes.
- The updated task is reflected in the list.

### Delete Todo
- Click the "Delete" button next to a task to remove it from the list.

### Authentication
- Use the signup page to create an account.
- Log in using the credentials on the login page.
- Authentication and todos are stored locally to maintain state across sessions.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

 
 
