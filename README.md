# React Todo App with User-Based Local Storage

This is a simple **Todo App** built using **React** that supports:

* Adding tasks
* Completing and deleting tasks
* Filtering (all / completed / pending)
* Persistent local storage per user

## Getting Started

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Features

### User-Based Local Storage

Each user's todo list is stored separately in local storage using a unique key based on the logged-in username.

### Todo Functionality

* `AddTodo` allows users to input a new task.
* `TodoList` displays tasks based on the selected filter.
* `Filter` buttons let you view all/completed/pending todos.

### Persistent Data

Todos are saved to localStorage and restored when the same user logs in again.



## Authentication Placeholder

Currently, login is simulated by saving a `loggedInUser` object to localStorage:

## License

This project is open source and free to use for educational purposes.
