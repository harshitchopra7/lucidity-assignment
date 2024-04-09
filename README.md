# Lucidity Frontend Assignment

The Project uses Typescript, React, Redux, Material UI, Custom CSS and Firebase for deployment.

Deployed link - (https://lucidity-assignment.web.app/).

## Project Structure

The project is structured as follows:

- **src/**: Contains the source code of the application.
  - **components/**: Contains reusable React components used throughout the application.
  - **screens/**: Contains UI screens.
  - **store/**: Contains Redux-related logic, including actions, reducers, and store configuration.
  - **App.tsx**: The root component of the application.
  - **index.tsx**: The entry point of the application.
- **public/**: Contains static assets and the HTML template for the application.
- **firebase.json**: Firebase configuration file for deployment settings.

## Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js
- npm or yarn

## Getting Started

To run the project locally, follow these steps:

```bash
git clone

npm install

npm run build

npm start
```

To deploy the project, follow these steps:

```bash
npm run build

firebase deploy
```
