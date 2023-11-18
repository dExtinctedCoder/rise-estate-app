# Rise Real Estate App

![Rise Real Estate App Logo](public/rise.png)

## Overview

Welcome to the Rise Real Estate App repository! This application is designed to simplify real estate transactions by providing a modern and user-friendly platform. It includes features such as property listings, search functionalities, user accounts, and interactive tools for both buyers and sellers.

## Table of Contents

- [Rise Real Estate App](#rise-real-estate-app)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Firebase Configuration](#firebase-configuration)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Features

- **Property Listings:** Browse through a comprehensive list of available properties.
- **Search Functionalities:** Easily find properties based on various criteria.
- **User Accounts:** Create and manage your user account.
- **Interactive Tools:** Tools for buyers and sellers to facilitate transactions.
- **Firebase Authentication:** Secure user authentication with Firebase.

## Technologies

- **Frontend:**

  - [React](https://react.dev)
  - [Tailwind CSS](https://tailwindcss.com/brand)

- **Backend:**

  - [Firebase Authentication](https://firebase.google.com/products/auth)

- **Database:**

  - [Firebase Firestore](https://firebase.google.com/products/firestore)

- **Development Tools:**
  - [Vite](https://vitejs.dev.guide/)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and yarn or npm
- Git
- Firebase Account and Project

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dExtinctedCoder/rise-estate-app
cd rise-estate-app
```

1. Install dependencies:

yarn

```bash
yarn
```

npm

```bash
npm install
```

1. Start the development server:

yarn

```bash
yarn dev
```

npm

```bash
npm run start
```

Visit [http://localhost:5173/](http://localhost:5173/) to view the app in your browser.

## Usage

A modern application simplifying real estate transactions.
Features include:
**property listings**
**search**
**user accounts**
**interactive tools for buyers and sellers.**

## Firebase Configuration

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Set up Firebase Authentication and Firestore for your project.
3. Update the Firebase configuration in `src/firebase/config.js`.

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export default firebaseConfig;
```

## Contributing

Feel free to contribute to the project. Check out the [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Real Estate App Ui Kit [Figma Community](<https://www.figma.com/file/QKSD9AtjIQ6OJSYTGiieN0/Real-Estate-App-UI-Kit-(Community)?type=design&node-id=0-1&mode=design&t=19LfydaFosSjzwxA-0>)

---
