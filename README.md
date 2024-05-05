# Project Overview

This project consists of three main components:

- E-commerce Admin
- E-commerce Frontend
- E-commerce Backend

## Description

This document provides a guide on setting up and running the project efficiently.

## Prerequisites

- Node.js (If not already installed)
  - Visit the official Node.js website: [Node.js Website](https://nodejs.org/)
  - Download the Node.js installer.
  - Run the installer and follow the prompts.

## Installation Steps

**Note:** Backend should be run before Frontend and Admin.

### Setup Backend:

1. Open the project folder in Visual Studio Code.
2. Open the Integrated Terminal.
3. Right-click on the sidebar, select "Open in Integrated Terminal".
4. Type `npm install` and press Enter. Wait for installation to complete (requires an internet connection).

### Setup MongoDB:

1. Open MongoDB Atlas in a web browser.
2. Sign Up on the website.
3. Click on "New Project" option.
4. Navigate to the Database section and create a new database.
5. Select M0, your region, and create the database.
6. Set up a username and password for the database user.
7. Add IP 0.0.0.0 and click on "Add Entry".
8. Click on Finish and Close.
9. Click on Connect and select Compass.
10. Copy the connection string.
11. Paste the connection string in `index.js`, replacing `<password>` with the password set previously in step 6.
12. Save changes.

To run the project, use `node index.js` in the Integrated Terminal.

### Setup Frontend & Admin Panel:

1. Open the project folder in Visual Studio Code.
2. Open the Integrated Terminal.
3. Right-click on the sidebar, and select "Open in Integrated Terminal".
4. Type `npm install` and press Enter. Wait for installation to complete (requires an internet connection).
5. After installation, the `node_modules` folder will appear in the project directory.
6. Type `npm start` in the terminal.
7. The project will start in your default web browser.

### Deployment Links:

[ADMIN Panel](https://project-flipr-task-j6uu.vercel.app/)
[Front-end](https://project-flipr-task.vercel.app/)

Backend deployed on Render.

## Project By

**Nishchal Vyas**  
CSE, Third Year  
Acropolis Institute of Technology and Research
