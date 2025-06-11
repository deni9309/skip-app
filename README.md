# Skip App Redesign
This is a redesigned “Choose Your Skip Size” page built using modern React tooling. The main goal was to refresh the UI/UX while preserving functionality. The application fetches data for skip options from a remote API and displays them in a responsive layout.

## Technologies Used
- **React (with TypeScript)**
Ensures maintainable, scalable, and type-safe code.

- **Vite**
Provides a fast development environment and efficient production builds.

- **Tailwind CSS & DaisyUI**
Offers utility-first styling and pre-styled components for rapid UI development and consistent design.

- **Axios**
For making HTTP requests to the skip API endpoint.

- **Lucide React**
A collection of lightweight, customizable icons used across the UI.

- **React Router Dom**
Enables straightforward client-side routing.

- **ESLint & Prettier**
Enforces consistent code formatting and helps catch minor issues early.

## Project Structure
- **public/**
    Static files (images, icons, etc.) go here.
- **src/** Contains all core application code.
    - **components/** contains page-level components.
      - **shared/** holds reusable UI components.
    App.tsx is the main application entry point.
    - **lib/**
    Collection of reusable utility functions and helper methods that provide common functionality across the entire application.
    - **interfaces/**
    Collection of TypeScript interfaces and type definitions that ensure type safety and maintain consistency across the entire application.

## Approach
Design & Layout:

Focused on a modern, clean look with a card-based layout for skip listings.
Incorporated responsive design principles to adapt the interface for both mobile and desktop.

## Data Fetching:

Used Axios to fetch skip options from the provided API endpoint.
Implemented loading and error handling states for improved UX.

## Responsiveness & UX:

Utilized Tailwind’s responsive utility classes for improved layout on smaller screens.
## DaisyUI components simplified styling consistency and theme switching.

## Type Safety & Maintainability:

Leveraged TypeScript to reduce runtime errors and ensure type definitions are enforced.
Organized code into smaller, reusable components for better maintainability and clarity.

## Version Control:

Kept changes in a dedicated Git branch (if relevant), making frequent commits with clear messages to track progress and facilitate collaboration.


## Getting Started

**Clone the Repository**
```
git clone https://github.com/deni9309/skip-app.git
````

**Install Dependencies**
```
cd skip-app
npm install
```

**Run the Development Server**

```
npm run dev
```
Open http://localhost:5173

**Build for Production**
```
npm run build
npm run preview
```

**Future Improvements**

- The progress steps in the header that are currently static should be made dynamic based on the selected container, with user progression only enabled when a container is chosen. However, these steps remain static for now and are planned for future enhancements.
- Implement more robust form validation and error handling using React Hook Form combined with Zod for schema validation and zodResolver for seamless integration.
- Consider adding a global state management solution (e.g. Zustand) if the application grows in complexity.


