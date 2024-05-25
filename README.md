# React-Express Fullstack Application

****************** Login Details ****************************

            email : user@gmail.com
            password : 12345
            
        new user can also be created
********************************************************

## Description
This is a fullstack web application with a React frontend and an Express backend. The frontend is built using React, a popular JavaScript library for building user interfaces, and the backend uses Express.


## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (version 14 or later)
- npm (version 6 or later) or yarn (version 1.22 or later)

## Installation
To install this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Vedant-Dalavi/bookStore.git
    cd bookStore
    ```

2. Install dependencies for the backend:
    ```bash
    cd ./server
    npm install
    ```

3. Install dependencies for the frontend:
    ```bash
    cd frontend
    npm install
    ```

## Running the Application
To run the application locally, follow these steps:


**Start the frontend and backend
App PORT=4000 or any free PORT Locally in .env file 
npm run dev

The backend server will run on `http://localhost:4000` and the frontend will run on `http://localhost:3000`.




## Project Structure
Here is an overview of the project's structure

## Scripts
Here are some useful scripts you can run:


## API Documentation
The backend API provides the following endpoints:
  **User Routes
- `POST /auth/login`: login user
{
  "email":"example@gmail.com",
  "password":"12345",
}

- `POST /auth/signup`: Create a new New User
  {
  "firstName":"firstName",
  "lastName":"lastName",
  "email":"example@gmail.com",
  "password":"12345",
  "confirmPassword":"12345"
}

**Books Routes
- `GET /books`: Retrieve All books of user

- `POST /books/` Create a New Book
  {
  "title":"Book",
  "auther":"Auther_name",
  "genre":"Genre",
  "yearPublished":"date"
}
- `PUT /books/:id`: Update an Book by ID
   {
  "title":"newTitle" || "" ,
  "auther":"Auther_name" || "",
  "genre":"Genre" || "",
}
- `DELETE /book/:id`: Delete an Book by ID

Refer to the backend source code for more detailed documentation on each endpoint.

## Contributing
To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
If you want to contact me, you can reach me at [vedantdalvi59@gmail.com].

