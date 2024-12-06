# LawSoft Backend

Welcome to the **LawSoft Backend** repository! This repository contains the server-side code and logic that powers the **LawSoft** platform, providing services such as case management, lawyer search, user authentication, and real-time communication for online hearings.

The backend is built using **Node.js**, **Express.js**, **MongoDB**, and other technologies to support a seamless user experience for clients, lawyers, and judges.

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [API Endpoints](#api-endpoints)
5. [Running the Application](#running-the-application)
6. [Contributing](#contributing)
7. [License](#additional-notes)

---

## Features
- **User Authentication**: Secure login and registration for clients, lawyers, and judges.
- **Case Management**: Allows clients to submit and manage legal cases, schedule hearings, and track case progress.
- **Lawyer Search**: Enables clients to search for lawyers based on expertise, location, and availability.
- **Real-Time Communication**: WebRTC-powered video calling for online hearings between clients, lawyers, and judges.
- **Case Library**: Access to a database of previous cases and judgments for legal research.

---

## Technologies Used
- **Node.js**: JavaScript runtime used to build scalable server-side applications.
- **Express.js**: A web framework for building RESTful APIs.
- **MongoDB**: A NoSQL database for storing user data, cases, and legal documents.
- **Socket.io**: Real-time communication library for enabling chat and live updates.
- **WebRTC**: Technology for enabling real-time video and audio communication.
- **JWT (JSON Web Tokens)**: For secure user authentication.

---

## Setup Instructions

Follow these steps to set up the project locally:

### Step 1: Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/Project-LawSoft/LawSoft-backend.git
```

### Step 2: Navigate to the Project Directory
Navigate to the project directory:

```bash
cd <project-directory>
```

### Step 3: Install Dependencies
Run the following command to install the project dependencies:

```bash
npm install
```

### Step 4: Set Up Environment Variables
Create a .env file in the root directory of the project and add the following configurations:

```bash 
Copy code
PORT=3000
MONGO_URI=<your-mongo-uri>
JWT_SECRET=<your-jwt-secret>
Replace <your-mongo-uri> with your MongoDB connection string and <your-jwt-secret> with a secret key for JWT.
```

### Step 5: Run the Application
After setting up the environment, start the backend server (with nodemon):

```bash
npm run de
# The server will start running on http://localhost:3000.
```
---
## API Endpoints
**Authentication**
- POST /api/auth/register: Register a new user (client, lawyer, or judge).
- POST /api/auth/login: Log in to the system and obtain a JWT token.
**Case Management**
- POST /api/cases: Submit a new case.
- GET /api/cases/:id: Retrieve details of a specific case.
- PUT /api/cases/:id: Update case information.
- DELETE /api/cases/:id: Delete a case.
**Lawyer Search**
- GET /api/lawyers: Search for lawyers based on expertise and location.
- GET /api/lawyers/:id: Retrieve information about a specific lawyer.
**Real-Time Communication**
- POST /api/communication/start: Start a video call for a hearing session.
- POST /api/communication/end: End an active video call.

---
## Running the Application
To run the application locally, you will need to:

1. Clone the repository.
2. Install the dependencies using npm install.
3. Set up your .env file with your MongoDB URI and JWT secret.
4. Run the application using npm start.
5. Once the backend is running, the API will be accessible at http://localhost:3000.

---
## Contributing
### Team Contribution Guide

Welcome to the **LawSoft** project! This guide is designed to help team members contribute to the repository smoothly and efficiently. Please follow the steps outlined below for contributing to the project.

---

### Table of Contents
1. [Clone the Repository](#clone-the-repository)
2. [Navigate to the Project Directory](#navigate-to-the-project-directory)
3. [Install Dependencies](#install-dependencies)
4. [Create a New Branch](#create-a-new-branch)
5. [Branch Naming Conventions](#branch-naming-conventions)
6. [Making Changes Locally](#making-changes-locally)
7. [Push Changes to Remote](#push-changes-to-remote)
8. [Create a Pull Request](#create-a-pull-request)
9. [Pull Updates from Main](#pull-updates-from-main)
10. [Resolve Merge Conflicts](#resolve-merge-conflicts)
11. [Code Reviews and Merging](#code-reviews-and-merging)


--- 

### Clone the Repository
Before you start working, clone the repository to your local machine:
```bash
git clone https://github.com/Project-LawSoft/LawSoft.git
```

---
### Navigate to the Project Directory
After cloning the repo, navigate to the project directory:

```bash
cd <project-directory>
```

---
### Install Dependencies
If the project requires dependencies, run the following command to install them:

```bash
npm install
```

---
### Create a New Branch
It is important to create a new branch before making any changes to the codebase:

```bash
git checkout -b <branch-name>

#### Example:

git checkout -b feature/add-login
```

---
### Branch Naming Conventions
Follow these naming conventions for your branches:

1. `feature/<feature-name>` - for new features.
2. `fix/<issue-name>` - for bug fixes.
3. `docs/<documentation-update>` - for documentation

**Branch Type**	  **Example Name**
- **New Feature**	`feature/add-login`
- **Bug Fix**	`fix/login-error`
- **Documentation Update**	`docs/update-readme`


---
### Making Changes Locally
Make necessary changes or add new features to the codebase.
After editing, stage the changes using the following command:

```bash
git add .

#### Commit your changes with a clear message:
git commit -m "Give a clear and detailed commit massage"
```

---
### Push Changes to Remote
Once you have committed your changes locally, push the branch to the remote repository:

```bash
git push origin <branch-name>

#### Example:
git push origin feature/add-login
```

---
### Create a Pull Request

1. Navigate to the GitHub repository.
2. Go to the Pull Requests section and click on New Pull Request.
3. Select the base branch as main and compare branch as your working branch.
4. Provide a description of your changes and submit the pull request.


---
### Pull Updates from Main
Every Time before start working on the project run this comment to ensure you have the latest changes from the main branch, run the following:

```bash
git pull origin main
```

---
### Resolve Merge Conflicts
If there are any merge conflicts, Git will notify you. Follow Git instructions to resolve these conflicts and continue with your changes.


----
### Code Reviews and Merging
1. Once your pull request is submitted, team members will review your changes.
2. Address any feedback provided.
3. Once approved, your pull request can be merged into the main branch.

----

## Additional Notes
- Use GitHub Issues or Project Boards to manage tasks and bugs.
- Ensure consistency by following the coding standards and commit message guidelines.
- Communicate actively with your team to avoid conflicts and ensure smooth collaboration.
Happy contributing! 🚀