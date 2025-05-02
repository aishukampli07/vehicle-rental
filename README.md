# Vehicle Rental Booking System

This is a full-stack vehicle rental booking system where users can select the type of vehicle they want to rent based on the number of wheels. The application is built with:

- **Frontend:** React, Material UI
- **Backend:** Node.js, Express
- **Database:** MySQL
- **API:** Axios for frontend API calls

## Features

- Select vehicle type based on the number of wheels (2-wheeler or 4-wheeler).
- Backend API to fetch available vehicle types dynamically.
- Form validation and dynamic form rendering based on user selections.
- Real-time data fetching from the backend when selecting different wheel options.

## Prerequisites

To run this project locally, you need the following tools installed:

- **Node.js** (https://nodejs.org/)
- **MySQL** (https://www.mysql.com/)
- **npm** (comes with Node.js)
- **Axios** (for API calls from React frontend)



Navigate to the backend directory and install dependencies:

cd backend
npm install

Set up your MySQL database:
Create a MySQL database and configure the connection details in backend/config/config.js.

Run the seed script to populate initial data:

node seeders/seed.js
Start the backend server:

npm start
This will start the backend on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:
cd frontend
Install the necessary frontend dependencies:
npm install
Start the frontend development server:
npm start
This will start the frontend on http://localhost:3000.


How to Use
Open the frontend in your browser (http://localhost:3000).

Select the number of wheels (2 or 4) from the dropdown.

Based on the selection, the available vehicle types (e.g., "Cruiser", "SUV") will appear as radio buttons.

Choose the desired vehicle type, and proceed with the next steps in the booking process.



PROJECT STRUCTURE

vehicle-rental-booking/
│
├── backend/                # Backend API
│   ├── config/             # MySQL database configuration
│   ├── models/             # Sequelize models
│   ├── routes/             # API routes
│   ├── seeders/            # Initial data seeders
│   ├── server.js           # Main backend entry point
│   └── package.json        # Backend dependencies
│
├── frontend/               # React frontend
│   ├── src/                # Frontend source code
│   │   ├── components/     # React components
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Main entry point
│   └── package.json        # Frontend dependencies
│
└── README.md               # This file

