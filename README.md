# Roshn Frontend

A modern React application created using Vite for development. This app uses various libraries for state management, routing, and UI components.

# Description

This React application fetches a list of users from an API and displays them in a table with pagination. When a user is clicked, it navigates to a details page showing more information about the selected user. The app uses React Router for navigation and Redux Toolkit for state management. It implements error handling by retrying the API call up to three times in case of failure, and displays appropriate error messages if the data cannot be loaded.

## Features

- **React** for building the UI
- **Vite** for fast development and build
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Radix UI** for accessible UI components
- **Axios** for making HTTP requests
- **React Icons** for scalable icons

## Libraries Used

- `@radix-ui/react-primitive`: A low-level component primitive for building custom UI components.
- `@radix-ui/themes`: Provides accessible UI themes for Radix UI components.
- `@reduxjs/toolkit`: A set of tools for efficient Redux development.
- `react-redux`: Official bindings for Redux in React.
- `react-router-dom`: Declarative routing for React.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `react-icons`: A library of icons for React.
- `web-vitals`: Provides tools to measure performance metrics of your app.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Gourav01dev/roshan-demo.git
   cd roshan-demo

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
